var JSZip, Handlebars;
Handlebars.registerHelper("markdown", function(text) {
    var converter = new Markdown.Converter();
    return new Handlebars.SafeString(converter.makeHtml(text));
});
var exporters = {
    jsonBlob : function(deck){
        console.log(JSON.stringify(deck));
    },
    zip : function(deck){
        var zipPromise = $.Deferred();
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'reveal.js.zip', true);
        xhr.responseType = 'arraybuffer';
        xhr.onload = xhr.onerror = function(e) {
            if(xhr.status !== 200) {
                console.log(xhr);
            }
            zipPromise.resolve(new JSZip(e.currentTarget.response, {base64:false}));
        };
        xhr.send();
        
        var revealIndexHtml;
        $.get('assets/revealIndex.html', function(resp){
            var indexTemplate = Handlebars.compile(resp);
            revealIndexHtml = indexTemplate(deck);
            
            $.when(zipPromise).then(function(zip){
                zip.file('reveal.js-2.5.0/index.html', revealIndexHtml);
                zip.file('reveal.js-2.5.0/deck.json', JSON.stringify(deck));
                var zipped = zip.generate({
                    type:'blob'
                });
                var $downloadBtn = $('<a class="btn btn-success">Download<a>');
                $downloadBtn.attr('href', window.URL.createObjectURL(zipped));
                $downloadBtn.attr('download', "presentation.zip");
                $('#download').empty().append($downloadBtn);
            });
        });
    },
    slideShow : function(deck){

    }
};