var _ = window._;
var Handlebars, Backbone, mediaWidgets, XLSXConverter, exporters, importers;

var schema = [{
    name : 'image',
    type : 'image'
},{
    name : 'audio',
    hint : 'This currently only works in Desktop Chrome and the latest Firefox.',
    type : 'audio'
},{
    name : 'text',
    type : 'text'
},{
    name : 'geopoint',
    type : 'geopoint'
}];
var viewSchema;
//Make it correspond to a directory stucture so images can be saved to folders.
var deck = [
    {}
];

var deckTemplate;

var currentCard = deck[0];
var renderCurrentCard = function(){
    _.invoke(viewSchema, 'render');
    renderDeck();
};
var renderDeck = function(){
    $('.cards').empty();
    _.each(deck, function(card, idx){
        card.idx = idx;
        card.isCurrent = currentCard === card;
    });
    $('.cards').append(deckTemplate(deck));
    
    _.defer(function(){
        $( ".cards" ).sortable();
        $( ".cards" ).disableSelection();
    });
};

$(document).ready(function () {

deckTemplate =  Handlebars.compile($('#deck-template').html());

viewSchema = _.map(schema, function(widget, idx){
    var templateString = $("#" + widget.type + "-template").html();
    if(!templateString) {
        console.log("missing template");
        alert("Missing template");
    }
    
    var WidgetView = Backbone.View.extend({
        template : Handlebars.compile(templateString),
        render : function(){
            this.$el.html(this.template(this.value.get()));
            return this;
        },
        value : {
            get : function(){
                return currentCard[widget.name];
            },
            set : function(value){
                currentCard[widget.name] = value;
            }
        }
    }).extend(mediaWidgets[widget.type]);
    
    var $el = $('<div id="' + widget.name + '"></div>');
    $el.addClass('widget widget-' + (idx % 3) + ' ' + widget.type);
    $('.output').append($el);
    return new WidgetView({
        el: $el
    });
});
renderCurrentCard();

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
$( document ).on("sortupdate", ".sortable", function( event, ui ) {
    var newDeck = [];
    _.each($( ".sortable" ).sortable( "toArray" ), function(nidx, idx){
        var parsedNidx = parseInt(nidx, 10);
        newDeck[idx] = deck[parsedNidx];
    });
    deck = newDeck;
    renderDeck();
});
$(document).on('click', '.add-card', function(evt) {
    deck.push({});
    renderDeck();
});

$(document).on('click', '.toggle-panel', function(evt) {
                
    $('.deck').toggleClass("no-show");
    
});

$(document).on('click', '.export', function(evt) {
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
            var zip = new JSZip(e.target.result, {base64:false})
            deck = JSON.parse(zip.file('reveal.js-2.5.0/deck.json').asText());
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
