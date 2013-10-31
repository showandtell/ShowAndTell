var _ = window._;
var Handlebars, html2canvas, mediaWidgets, XLSXConverter, exporters, importers;

var schema = [{
    name : 'image',
    type : 'image'
},{
    name : 'audio',
    type : 'audio'
},{
    name : 'text',
    type : 'text'
}];
//Make it correspond to a directory stucture so images can be saved to folders.
var deck = [
    {}
];
var currentCard = deck[0];
var renderCurrentCard = function(){
    $('.card').empty();
    _.each(schema, function(widget, idx){
        $('.output').append($('<div class="widget widget-' + (idx % 3) + ' ' + widget.type + '">').append(widget.template(currentCard[widget.name])));
    });
    renderDeck();
};
var renderDeck = function(){
    $('.cards').empty();
    _.each(deck, function(card, idx){
        card.idx = idx;
    });
    $('.cards').append(deckTemplate(deck));
    
    $( ".cards" ).sortable();
    $( ".cards" ).disableSelection();

};

$(document).ready(function () {

_.each(schema, function(widget){
    _.extend(widget, mediaWidgets[widget.type]);
});

_.each(schema, function(widget){
    var templateString = $("#" + widget.name + "-template").html();
    if(!templateString) {
        console.log("missing template");
        alert("Missing template");
    }
    widget.template = Handlebars.compile(templateString);

});
window.deckTemplate = Handlebars.compile($('#deck-template').html());

renderCurrentCard();


_.each(schema, function(widget){
    if('init' in widget) widget.init({
        get : function(){
            return currentCard[widget.name];
        },
        set : function(value){
            currentCard[widget.name] = value;
        }
    });
});

$( document ).on("click", ".card-label", function( event, ui ) {
    currentCard = deck[parseInt($(event.target).closest(".card-label").prop('id'), 10)];
    renderCurrentCard();
    $('.deck').addClass("no-show");
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
    $('.help-body').html('<iframe src="http://lab.hakim.se/reveal-js" seamless="seamless" style="width:100%;height:340px"></iframe>');
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

});
