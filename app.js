var _ = window._;
var Handlebars = window.Handlebars;
var html2canvas = window.html2canvas;

//Make it correspond to a directory stucture so images can be saved to folders.
var deck = [
    {}
];
var currentCard = deck[0];

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

//TODO: Backbone views would enable better event binding perhaps
//also it would enable better rerendering of individual widgets
var mediaWidgets = [
    {
        name: 'text',
        init : function(value) {
            $(document).on('change', 'textarea', function(evt) {
            	evt.stopPropagation();
            	evt.preventDefault();
                
                value.set($('textarea').val());
            });
        }
    }, {
        name: 'images',
        init : function(value) {
            $(document).on('change', '.uploadfile', function(evt) {
            	evt.stopPropagation();
            	evt.preventDefault();
                
                $('#errors').empty();
                
            	var files = evt.target.files;
            	_.each(files, function(file){
                	var reader = new FileReader();
                    reader.onload = function(e) {
                        value.set((value.get() || []).concat([{
                            name: file.name,
                            dataURL: e.target.result
                        }]));
                        renderCurrentCard();
                	};
                    try {
                        reader.readAsDataURL(file);
                    } catch(e) {
                        $("#errors").append("<p>Could not read file.</p>");
                        throw e;
                    }
            	});
                
                //Clear the file input so the form can be updated:
                $('.uploadfile').val("");
            });
            
            $(document).on('keypress', '.url', function(evt) {
            	evt.stopPropagation();
            	evt.preventDefault();
                
                $('#errors').empty();
                var img = $('.url').val();
                
                if(!img) return;
                
                var $imgEl = $('<img>');
                $('body').append($imgEl);
                $imgEl.load(function() {  
                    // Create an empty canvas element
                    var canvas = document.createElement("canvas");
                    canvas.width = $imgEl.width();
                    canvas.height = $imgEl.height();
                
                    // Copy the image contents to the canvas
                    var ctx = canvas.getContext("2d");
                  ctx.drawImage($imgEl.get(0), 0, 0);
                     // Get the data-URL formatted image
                    // Firefox supports PNG and JPEG. You could check img.src to
                    // guess the original format, but be aware the using "image/jpg"
                    // will re-encode the image.
                    value.set((value.get() || []).concat([{ dataURL : canvas.toDataURL("image/png") }]));
                    renderCurrentCard();
                      
                }).prop('src', img);  
                /*
                
                $.ajax({
                    dataType: "jsonp",
                    url: 'https://bot-c9-nathanathan.c9.io/batch',
                    data: {data : img},
                    success: function(resp){
                        currentCard.images.push(resp[img]);
                        renderCurrentCard();
                    }
                });
                */
                //could just use the urls? when to export?? why?
            
                $('.url').val("");
            });

        }
        
    }, {
        name: 'audio',
        init : function(value) {
            $(document).on('click', '.record', function(evt) {
                
                navigator.getUserMedia({ audio: true }, onMediaSuccess, onMediaError);
            
                function onMediaSuccess(stream) {
                    var recordRTC = RecordRTC(stream);
                    recordRTC.startRecording();
                    $(document).one('click', '.stop', function(evt) {
                        recordRTC.stopRecording(function(audioURL) {
                           value.set(audioURL);
                           renderCurrentCard();
                        });
                    });
                }
            
                function onMediaError(e) {
                    console.error('media error', e);
                }
            });
        }
    }
];
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

var renderCurrentCard = function(){
    $('.card').empty();
    _.each(mediaWidgets, function(mediaWidget, idx){
        $('.output').append($('<div class="widget widget-' + (idx % 3) + ' ' + mediaWidget.name + '">').append(mediaWidget.template(currentCard[mediaWidget.name])));
    });
};

renderCurrentCard();

var deckTemplate = Handlebars.compile($('#deck-template').html());

var renderDeck = function(){
    $('.cards').empty();
    _.each(deck, function(card, idx){
        card.idx = idx;
    });
    $('.cards').append(deckTemplate(deck));
    
    $( ".cards" ).sortable();
    $( ".cards" ).disableSelection();

};
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
