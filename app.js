var _ = window._;
var Handlebars = window.Handlebars;
var html2canvas = window.html2canvas;

//Make it correspond to a directory stucture so images can be saved to folders.
var deck = [
    {}
];
var currentCard = deck[0];
var renderCurrentCard = function(){
    $('.card').empty();
    _.each(mediaWidgets, function(mediaWidget, idx){
        $('.output').append($('<div class="widget widget-' + (idx % 3) + ' ' + mediaWidget.name + '">').append(mediaWidget.template(currentCard[mediaWidget.name])));
    });
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

var processXLSX = function(data, filename, callback){
    try {
        var xlsx = XLSX.read(data, {type: 'binary'});
        var jsonWorkbook = to_json(xlsx);
        var processedWorkbook = XLSXConverter.processJSONWorkbook(jsonWorkbook);
        processedWorkbook.filename = filename;
        
        renderForm(processedWorkbook, callback);
        
        _.each(XLSXConverter.getWarnings(), function(warning){
            var $warningEl = $("<p>");
            $warningEl.text(warning);
            $("#warnings").append($warningEl);
        });
    } catch(e) {
        var $errorEl = $("<p>");
        $errorEl.text(String(e));
        $("#errors").append($errorEl);
        throw e;
    }
};


_.each(mediaWidgets, function(mediaWidget){
    var templateString = $("#" + mediaWidget.name + "-template").html();
    if(!templateString) {
        console.log("missing template");
        alert("Missing template");
    }
    mediaWidget.template = Handlebars.compile(templateString);
    if('init' in mediaWidget) mediaWidget.init({
        get : function(){
            return currentCard[mediaWidget.name];
        },
        set : function(value){
            currentCard[mediaWidget.name] = value;
        }
    });
});
window.deckTemplate = Handlebars.compile($('#deck-template').html());

renderCurrentCard();

$( document ).on("click", ".card-label", function( event, ui ) {
    currentCard = deck[parseInt($(event.target).closest(".card-label").prop('id'), 10)];
    renderCurrentCard();
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
                
    $('.deck').toggleClass("hidden");
    
});


});
