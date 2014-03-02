var env = jjv();
var schema = {
  "type" : "object",
  "properties" : {
    "name" : {
      "type" : "string"
    },
    "cards" : {
      "type" : "array",
      "items": {
        "type": "object",
        "properties" : {
          "image" : {
            "type" : "object"
          },
          "audio" : {
            "type" : "object"
          }, "text" : {
            "type" : "string"
          }
        }
      }
    }
  },
  "required": ["name", "cards"]
};
test( "sanity.", function() {
  var env = jjv();
  var errors = env.validate(schema, deck.toJSON());
  strictEqual( errors, null, "deck matches schema" );
});
asyncTest( "import/export zip", function() {
  getDataFile('testData/oldFormat.zip').done(function(ab){
    importers.zip(new Blob([ab]), function(err, deckJSON){
      equal( err, null, "initial import without errors" );
      stop();
      var errors = env.validate(schema, deckJSON);
      console.log(deckJSON);
      strictEqual( errors, null, "imported deck matches schema" );
      deck.set(deckJSON);
      exporters.zip(deck, function(err, blob) {
        equal( err, null, "export without errors" );
        if(!err) {
          stop();
          importers.zip(blob, function(err, deckJSON){
            equal( err, null, "import without errors" );
            var errors = env.validate(schema, deckJSON);
            strictEqual( errors, null, "imported deck matches schema" );
            start();
          });
        }
        start();
      });
      start();
    });
  });

});