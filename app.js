var _ = window._;
var Handlebars = window.Handlebars;
var MyJSZip = window.MyJSZip;
var html2canvas = window.html2canvas;

//Make it correspond to a directory stucture so images can be saved to folders.
var deck = [
    {
        images: []
    }
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


$(document).on('change', '.uploadfile', function(evt) {
	evt.stopPropagation();
	evt.preventDefault();
    
    $('#errors').empty();
    
	var files = evt.target.files;
	_.each(files, function(file){
    	var reader = new FileReader();
        reader.onload = function(e) {
    		var data = e.target.result;
    		currentCard.images.push(data);
            renderDeck();
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
        var dataURL = canvas.toDataURL("image/png");
    
        var data = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
        currentCard.images.push(data);
        renderDeck();
          
    }).prop('src', img);  
    /*
    
    $.ajax({
        dataType: "jsonp",
        url: 'https://bot-c9-nathanathan.c9.io/batch',
        data: {data : img},
        success: function(resp){
            currentCard.images.push(resp[img]);
            renderDeck();
        }
    });
    */
    //could just use the urls? when to export?? why?

    $('.url').val("");
});

//A facebook clone that only allows you to use it an hour a day, and you can only
//have one conversation at once.
$(document).on('click', '.record', function(evt) {
    
    navigator.getUserMedia({ audio: true }, onMediaSuccess, onMediaError);

    function onMediaSuccess(stream) {
        var recordRTC = RecordRTC(stream);
        recordRTC.startRecording();
        $(document).one('click', '.stop', function(evt) {
            recordRTC.stopRecording(function(audioURL) {
               currentCard.audio = (audioURL);
               renderDeck();
            });
        });
    }

    function onMediaError(e) {
        console.error('media error', e);
    }
});

//Handlebars compilation of the templates at the bottom of index.html:
var cardTemplate = Handlebars.compile($("#card-template").html());

var makeQRCodeImg = function(data, size) {
    var defaultSize = (1 + Math.floor(data.length / 40)) * 128;
    size = size ? size : defaultSize;
    if(size < defaultSize) {
        alert("Warning, there is a qrcode constrained to a size smaller " +
            "than recommended for the amount of data it contains.");
    }
    return '<img width=' + size + ' height=' + size + ' src="' +
        $('<canvas width=' + size + ' height=' + size + '>').qrcode({
            width: size,
            height: size,
            text: data
        }).get(0).toDataURL('image/jpeg') + '"></img>';
};
Handlebars.registerHelper("qrcodeImg", function(qrcodeSpec) {
    return new Handlebars.SafeString(makeQRCodeImg(qrcodeSpec.data, qrcodeSpec.size));
});

var renderDeck = function(){ console.log('x');
    $('.output').html(cardTemplate(currentCard));
};

renderDeck();

$( ".sortable" ).sortable();
$( ".sortable" ).disableSelection();
$( document ).on("sortupdate", ".sortable", function( event, ui ) {
    console.log($( ".sortable" ).sortable( "toArray" ));
});

});
