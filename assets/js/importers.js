var _, JSZip;
var getExt = function(path){
  return path.split('.').unshift();
};
var importers = {
  zip : function(file, callback) {
    var loadExternalAssets = function(zip, deck){
      var assetsLoaded = $.Deferred();
      assetsLoaded.resolve();
      _.each(deck.cards, function(card){
        if(card.image && card.image.path) {
          assetsLoaded = $.when(assetsLoaded, $.Deferred(function(thisDeferred){
            _.defer(function(){
              var arrayBuffer = zip.file('slideshow/' + card.image.path).asArrayBuffer();
              card.image.dataURL = 'data:image/' + getExt(card.image.path) + ';base64,' +
                base64ArrayBuffer.encode(arrayBuffer);
              thisDeferred.resolve();
            });
          }));
        }
        if(card.audio && card.audio.path) {
          assetsLoaded = $.when(assetsLoaded, $.Deferred(function(thisDeferred){
            _.defer(function(){
              var arrayBuffer = zip.file('slideshow/' + card.audio.path).asArrayBuffer()
              card.audio.dataURL = 'data:audio/' + getExt(card.audio.path) + ';base64,' +
                base64ArrayBuffer.encode(arrayBuffer);
              thisDeferred.resolve();
            });
          }));
        }
      });
      $.when(assetsLoaded).then(function(){
        callback(null, deck);
      });
    };
    var reader = new FileReader();
    reader.onload = function(readEvent) {
      var zip = new JSZip(readEvent.target.result, {base64 : false});
      var oldFormat = zip.file('deck.json');
      console.log(zip); window.zip = zip;
      if(oldFormat) {
        callback(null, {
          name : readEvent.target.name || "slideshow",
          cards : JSON.parse(zip.file('deck.json').asText())
        });
      } else {
        loadExternalAssets(zip,
            JSON.parse(zip.file('slideshow/deck.js').asText().slice(9)));
      }
    };
    reader.readAsArrayBuffer(file);
  }
};