var _, schema, Handlebars, Backbone, mediaWidgets, exporters;

var viewSchema;
//Make it correspond to a directory stucture so images can be saved to folders.
var deck = [
    {}
];

var currentCard = deck[0];

$(document).ready(function () {

var cardStubTemplate = Handlebars.compile($('#card-stub-template').html());

var renderCurrentCard = function(){
  _.invoke(viewSchema, 'render');
  renderDeck();
};
var renderDeck = function(){
  _.each(deck, function(card, idx){
    card.idx = idx;
    card.isCurrent = (currentCard === card);
  });
  $('.cards').html(deck.map(cardStubTemplate).join(''));
  
  _.defer(function(){
    if(window.deckSortable) return;//window.deckSortable.destroy();
    var $container = $(".sortable");
    window.deckSortable = new Sortable($container.get(0), {
      draggable: ".card-label",
      ghostClass: "invisible",
      handle: ".label-handle",
      onUpdate: function (evt/**Event*/){
        var newDeck = [];
        $container.children().each(function(idx, el){
          console.log(el);
          var parsedNidx = parseInt(el.id, 10);
          newDeck[idx] = deck[parsedNidx];
        });
        deck = newDeck;
        renderDeck();
      }
    });
  });
};

if("localStorage" in window) {
  if(localStorage.getItem("downloadWavConverter") === "true") {
    window.wavConverterLoading = true;
    worker = createWebWorker();
    worker.onready = function(event) {
      window.wavConverterLoaded = true;
      renderCurrentCard();
    };
  }
}

viewSchema = _.map(schema, function(widget, idx){
  var currentView;
  var templateString = $("#" + widget.type + "-template").html();
  if(!templateString) {
    console.log("missing template");
    alert("Missing template");
  }
  
  var WidgetView = Backbone.View.extend({
    template : Handlebars.compile(templateString),
    basicRender : function(){
      this.$el.html(this.template({
        name : this.name,
        value : this.value.get(),
        wavConverterLoading : window.wavConverterLoading,
        wavConverterLoaded : window.wavConverterLoaded
      }));
      return this;
    },
    render : function(){
      return this.basicRender();
    },
    value : {
      get : function(){
        return currentCard[widget.name];
      },
      set : function(value){
        currentCard[widget.name] = value;
        if(widget.name === 'text') {
          renderDeck();
        }
      }
    }
  }).extend(mediaWidgets[widget.type]).extend(widget);
  
  var $el = $('<div id="' + widget.name + '"></div>');
  $el.addClass('widget widget-' + (idx % 3) + ' ' + widget.type);
  $('.output').append($el);
  currentView = new WidgetView({
    el: $el
  });
  return currentView;
});
renderCurrentCard();

//Deck handlers
$( document ).on("click", ".card-label", function( event, ui ) {
  $('textarea').blur();
  $('.card').addClass('card-animation');
  window.setTimeout(function(){
    currentCard = deck[parseInt($(event.target).closest(".card-label").prop('id'), 10)];
    window.setTimeout( function(){
      $('.card').removeClass('card-animation');
    }, 1000 );
    renderCurrentCard();
    $('.deck').addClass("no-show");
  }, 100);
});
$(document).on('click', '.add-card', function(evt) {
  deck.push({});
  renderDeck();
});
$(document).on('click', '.rm-card', function(evt) {
  var currentCardIdx = currentCard.idx;
  deck.splice(currentCardIdx, 1);
  currentCard = deck[(currentCardIdx % deck.length)];
  console.log(currentCard, deck, currentCardIdx);
  renderDeck();
  renderCurrentCard();
});

$(document).on('click', '.toggle-panel', function(evt) {
  $('.deck').toggleClass("no-show");
});

$(document).on('click', '.export-github', function(evt) {
    $('#download').text('uploading to github...');
    exporters.github(deck);
});
$(document).on('click', '.export-zip', function(evt) {
    $('#download').text('generating zip...');
    exporters.zip(deck);
});

$(document).one('click', '.help', function(evt) {
    $('.help-body').html('<iframe src="tutorial/index.html" seamless="seamless" style="width:100%;height:340px"></iframe>');
});

$(document).on('change', '.uploadzip', function(evt) {
    $('.uploadzip-status').empty();
	var files = evt.target.files;
	_.each(files, function(file){
        var reader = new FileReader();
        reader.onload = function(e) {
            var zip = new JSZip(e.target.result, {base64 : false});
            deck = JSON.parse(zip.file('deck.json').asText());
            $('.uploadzip-status').text("Imported!");
            renderCurrentCard();
        };
        reader.readAsArrayBuffer(file);
	});
    
    //Clear the file input so the form can be updated:
    $('.uploadzip').val("");
    $('.uploadzip-status').text("importing...");
    
});

$('.loading').remove();

});
