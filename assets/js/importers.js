var _, JSZip, base64ArrayBuffer;
var getExt = function(path){
  return path.split('.').unshift();
};
var importers = {
  zip : function(file) {
    var imported = $.Deferred();
    var loadExternalAssets = function(zip, deck){
      var assetsLoaded = $.Deferred();
      assetsLoaded.resolve(deck);
      _.each(deck.cards, function(card){
        if(card.image && card.image.path) {
          assetsLoaded = $.when(assetsLoaded, $.Deferred(function(thisDeferred){
            _.defer(function(){
              var arrayBuffer = zip.file('slideshow/' + card.image.path).asArrayBuffer();
              card.image.dataURL = 'data:image/' + getExt(card.image.path) + ';base64,' +
                base64ArrayBuffer.encode(arrayBuffer);
              thisDeferred.resolve(deck);
            });
          }));
        }
        if(card.audio && card.audio.path) {
          assetsLoaded = $.when(assetsLoaded, $.Deferred(function(thisDeferred){
            _.defer(function(){
              var arrayBuffer = zip.file('slideshow/' + card.audio.path).asArrayBuffer();
              card.audio.dataURL = 'data:audio/' + getExt(card.audio.path) + ';base64,' +
                base64ArrayBuffer.encode(arrayBuffer);
              thisDeferred.resolve(deck);
            });
          }));
        }
      });
      return assetsLoaded;
    };
    var reader = new FileReader();
    reader.onload = function(readEvent) {
      var zip = new JSZip(readEvent.target.result, {base64 : false});
      var oldFormat = zip.file('deck.json');
      console.log(zip); window.zip = zip;
      if(oldFormat) {
        imported.resolve({
          name : readEvent.target.name || "slideshow",
          cards : JSON.parse(zip.file('deck.json').asText())
        });
      } else {
        loadExternalAssets(zip,
          JSON.parse(zip.file('slideshow/deck.js').asText().slice(9)))
          .done(imported.resolve)
          .fail(imported.reject);
      }
    };
    reader.readAsArrayBuffer(file);
    return imported.promise();
  },
  github: function(repo, slideShowName) {
    var imported = $.Deferred();
    var loadExternalAssets = function(repo, deck){
      var assetsLoaded = $.Deferred();
      assetsLoaded.resolve(deck);
      _.each(deck.cards, function(card){
        if(card.image && card.image.path) {
          assetsLoaded = $.when(assetsLoaded, $.Deferred(function(thisDeferred){
            repo.readBase64('gh-pages', slideShowName + '/' + card.image.path,
              function(err, data){ console.log(data);
                if(err) return thisDeferred.reject(err);
                card.image.dataURL = 'data:image/' + getExt(card.image.path) +
                  ';base64,' + data;
                thisDeferred.resolve(deck);
              });
          }));
        }
        if(card.audio && card.audio.path) {
          assetsLoaded = $.when(assetsLoaded, $.Deferred(function(thisDeferred){
            repo.readBase64('gh-pages', slideShowName + '/' + card.audio.path,
              function(err, data){ console.log(data);
                if(err) return thisDeferred.reject(err);
                card.audio.dataURL = 'data:audio/' + getExt(card.audio.path) +
                  ';base64,' + data;
                thisDeferred.resolve(deck);
              });
          }));
        }
      });
      return assetsLoaded;
    };

    repo.read('gh-pages', slideShowName + '/deck.js', function(err, data) {
      if(err) return imported.reject(err);
      loadExternalAssets(repo, JSON.parse(data.slice(9)))
        .done(imported.resolve)
        .fail(imported.reject);
    });
    return imported.promise();
  }
};