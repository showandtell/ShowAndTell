var _, JSZip;
var getExt = function(path){
  return path.split('.').unshift();
};
var importers = {
  zip : function(evt, callback) {
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
              card.audio.dataURL = 'data:audio/' + getExt(card.image.path) + ';base64,' +
                base64ArrayBuffer.encode(arrayBuffer);
              thisDeferred.resolve();
            });
          }));
        }
      });
      $.when(assetsLoaded).then(function(){
        callback(deck);
      });
    };
    var files = evt.target.files;
    var file = files[0];
    var reader = new FileReader();
    reader.onload = function(readEvent) {
      var zip = new JSZip(readEvent.target.result, {base64 : false});
      var oldFormat = zip.file('deck.json');
      if(oldFormat) {
        callback({
          name : readEvent.target.name,
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