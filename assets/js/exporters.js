var JSZip, _, Github, Markdown;

var stripPrefix = function(str){
  return str.split(',')[1];
};

var getDataFile = function(path){
  var def = $.Deferred();
  var xhr = new XMLHttpRequest();
  xhr.open('GET', path, true);
  xhr.responseType = 'arraybuffer';
  xhr.onload = xhr.onerror = function(e) {
    if(xhr.status !== 200) {
      console.log(xhr);
      def.reject(xhr);
      return;
    } else {
      def.resolve(e.currentTarget.response);
    }
  };
  xhr.send();
  return def;
};

var makeRepoPromise = (function(){
  var repoName = "slide-shows";
  var repo;
  return function(){
    return $.Deferred(function(def){
      if(repo) return def.resolve(repo);
      def.fail(function(){
        repo = null;
      });
      var github;
      var username = prompt("username");
      var password = prompt("password");

      if(!username || !password) {
        def.reject("Username/password was not provided.");
      } else {
        github = new Github({
          username: username,
          password: password,
          auth: "basic"
        });
        repo = github.getRepo(username, repoName);
        repo.show(function(err, info){
          if(err) {
            if(err.error === 401) {
              alert("Incorrect username or password.");
              makeRepoPromise().done(def.resolve).fail(def.reject);
            } else {
              //repo doesn't exist
              if(!confirm("You don't have a slide-show repository,\n" + 
                      "can this application create one?")) {
                return def.reject("Could not create repo: User rejection");
              }
              //fork the master slide-show repo.
              github.getRepo("showandtell", repoName).fork(function(err){
                repo = github.getRepo(username, repoName);
                repo.show(function(err, info){ 
                  if(err) {
                    console.log("Couldn't create repo: Possible fork failure.");
                    def.reject(err);
                  } else {
                    repo.ghPagesURL = 'http://' + username +
                      ".github.com/" + repoName + '/';
                    def.resolve(repo);
                  }
                });
              });
            }
          } else {
            //TODO: Should verify the repo is valid
            repo.ghPagesURL = 'http://' + username +
                      ".github.com/" + repoName + '/';
            repo = repo;
            def.resolve(repo);
          }
        });
      }
    });
  };
}());

var exporters = {
  zip : function(deck, callback){
    var zipPromise = getDataFile('reveal.js.zip');

    var mdConverter = new Markdown.Converter();

    var writeZipPromise = $.Deferred();
    
    zipPromise.done(function(zipFile){
      var zip = new JSZip(zipFile, {
        base64:false
      });
      
      _.each(deck.get('cards'), function(card){
        if(card.text) {
          card.formattedText = mdConverter.makeHtml(card.text);
        }
        if(card.image && card.image.dataURL) {
          card.image.path = 'media/' + card.image.name;
          zip.file('slideshow/' + card.image.path, stripPrefix(card.image.dataURL), {
            base64: true
          });
        }
        if(card.audio && card.audio.dataURL) {
          card.audio.path = 'media/' + card.audio.name;
          zip.file('slideshow/' + card.audio.path, stripPrefix(card.audio.dataURL), {
            base64: true
          });
        }
      });
      writeZipPromise.resolve(zip);
    });
    
    $.when(writeZipPromise, $.get('assets/revealIndex.html'))
     .done(function(zip, revealIndex){
      zip.file('slideshow/deck.js', "var deck=" + JSON.stringify(deck.toSmallJSON()));
      zip.file('slideshow/index.html', revealIndex[0]);
      var zipBlob = zip.generate({
          type:'blob'
      });
      callback(null, zipBlob);
    }).fail(callback);

  },
  github : function(deck, callback){
    $.when(makeRepoPromise(), $.get('assets/revealIndex.html'))
     .fail(callback)
     .done(function(repo, revealIndex){
      var writer = repo.batchWriter('gh-pages');
      
      var presentationName = deck.get('name');
      var presDir = presentationName + '/';

      var mdConverter = new Markdown.Converter();

      _.each(deck.get('cards'), function(card){
        if(card.text) {
          card.formattedText = mdConverter.makeHtml(card.text);
        }
        if(card.image) {
          card.image.path = 'media/' + card.image.name;
          writer.write(presDir + card.image.path, {
            content: stripPrefix(card.image.dataURL),
            encoding : 'base64'
          });
        }
        if(card.audio) {
          card.audio.path = 'media/' + card.audio.name;
          writer.write(presDir + card.audio.path, {
            content: stripPrefix(card.audio.dataURL),
            encoding : 'base64'
          });
        }
      });
      writer.write(presDir + 'index.html', revealIndex[0]);
      writer.write(presDir + 'deck.js', "var deck=" + JSON.stringify(deck.toSmallJSON(), 0, 2));
      writer.commit("Show & Tell commit").done(function(){
        callback(null, repo.ghPagesURL + presentationName);
      }).fail(function(err){
        callback(err);
      });
    });
  }
};