var JSZip, Handlebars, _;

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
    var repoName = "ShowAndTellDocs";
    return function(){
      return $.Deferred(function(def){
        if(repo) def.resolve(repo);
        
        var github;
        var username = prompt("username");
        var password = prompt("password");

        if(!username || !password) {
          def.reject();
        } else {
          github = new Github({
            username: username,
            password: password,
            auth: "basic"
          });
          var repo = github.getRepo(username, repoName);
          repo.show(function(err, info){
            if(err) {
              if(err.error === 401) {
                alert("Incorrect username or password.");
                //TODO
                makeRepoPromise().then(def.resolve);
              } else {
                //repo doesn't exist?
                //fork the repo form me.
                github.getRepo("nathanathan", repoName).fork(function(err){
                  var repo = github.getRepo(username, repoName);
                  repo.show(function(err, info){ 
                    if(err) {
                      console.log(err);
                      alert("Couldn't create repo");
                      def.reject("Couldn't create repo");
                    } else {
                      repo.ghPagesURL = 'http://' + username +
                        ".github.com/" + repoName + '/';
                      repo = repo;
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
  zip : function(deck){
    $('#exportModal').modal('hide');
    $('#outputModal').modal({show:true});
    $('#output').text("Creating zip...");
      
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
        if(card.image) {
          card.image.path = 'media/' + card.image.name;
          zip.file('slideshow/' + card.image.path, stripPrefix(card.image.dataURL), {
            base64: true
          });
        }
        if(card.audio) {
          card.audio.path = 'media/' + card.audio.name;
          zip.file('slideshow/' + card.audio.path, stripPrefix(card.audio.dataURL), {
            base64: true
          });
        }
      });
      writeZipPromise.resolve(zip);
    });
    
    $.when(writeZipPromise, $.get('assets/revealIndex.html'))
     .then(function(zip, revealIndex){
      zip.file('slideshow/deck.js', "var deck=" + JSON.stringify(deck.toSmallJSON()));
      zip.file('slideshow/index.html', revealIndex[0]);
      var zipped = zip.generate({
          type:'blob'
      });
      var $downloadBtn = $('<a class="btn btn-primary">Download<a>');
      $downloadBtn.attr('href', window.URL.createObjectURL(zipped));
      $downloadBtn.attr('download', "presentation.zip");
      $('#output').empty().append($downloadBtn);
    });

  },
  github : function(deck){
    $('#exportModal').modal('hide');
    $('#outputModal').modal({show:true});
    $('#output').text("Publishing to github...");
    
    var presentationName = deck.get('name');
    var cards = deck.get('cards');
    
    $.get('assets/revealIndex.html', function(revealIndex){
        
        $.when(makeRepoPromise()).done(function(repo){
            var writer = repo.batchWriter('gh-pages', function(err){
              console.log(err);
            });
            var presDir = presentationName + '/';

            var mediaSaved = $.Deferred().resolve();
            _.each(cards, function(card){
              
              if(card.image) {
                  mediaSaved = $.when(mediaSaved, $.Deferred(function(thisDeferred){
                      card.image.path = card.image.name;
                      writer.write(presDir + card.image.path,
                          {
                              content: stripPrefix(card.image.dataURL),
                              encoding : 'base64'
                          }, function(err, s) {
                              if(err) {
                                  thisDeferred.reject(err);
                              } else {
                                  thisDeferred.resolve();
                              }
                          });
                  }));
              }
              if(card.audio) {
                  mediaSaved = $.when(mediaSaved, $.Deferred(function(thisDeferred){
                      card.audio.path = card.audio.name;
                      writer.write(presDir + card.audio.path,
                          {
                              content: stripPrefix(card.audio.dataURL),
                              encoding : 'base64'
                          }, function(err, s) {
                              if(err) {
                                  thisDeferred.reject(err);
                              } else {
                                  thisDeferred.resolve();
                              }
                          });
                  }));
              }
            });
            var dataWritten = $.when(mediaSaved,
              $.Deferred(function(indexWritten){
                writer.write(presDir + 'index.html',
                  revealIndex, function(err) {
                    if(err) return indexWritten.reject(err);
                    indexWritten.resolve();
                  });
              }), $.Deferred(function(deckWritten){
                writer.write(presDir + 'deck.js',
                "var deck=" + JSON.stringify(deck.toJSON()), function(err) {
                  if(err) return deckWritten.reject(err);
                  deckWritten.resolve();
                });
              })
            );
            dataWritten.done(function(){
              writer.commit("Commited", function(err){
                console.log(err);
                var $openBtn = $('<a class="btn btn-success">Open Presentation<a>');
                $openBtn.attr('href', repo.ghPagesURL + presentationName)
                    .attr("target", "_blank");
                $('#output').empty()
                  .append("<p>It may take a few minutes before your presentation is updated on github.</p>")
                  .append($openBtn);
              });
            });
            dataWritten.fail(function(err){
              console.log("data write fail!");
              console.log(err);
            });
        });
    });
  }
};