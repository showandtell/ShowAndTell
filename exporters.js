var JSZip, Handlebars;
Handlebars.registerHelper("markdown", function(text) {
    if(!text) return '';
    var converter = new Markdown.Converter();
    return new Handlebars.SafeString(converter.makeHtml(text));
});
var stripPrefix = function(str){
    return str.split(',')[1];
};
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
        
        $.get('assets/revealIndex.html', function(revealIndex){
            var slideShowTemplate = Handlebars.compile(revealIndex);
            
            var csvTemplate = 'text, image, audio, map\n' +
                "{{#each deck}}" +
                "{{text}},{{image.path}},audio,map\n" +
                "{{/each}}";
            console.log(csvTemplate);
            csvTemplate = Handlebars.compile(csvTemplate);
            /*
            revealIndexHtml = slideShowTemplate({ deck : deck, revealPathPrefix : 'tutorial/' });
            document.getElementById('preview').contentDocument.write(revealIndexHtml);
            */
            
            $.when(zipPromise).then(function(zip){
                var zipPromise2 = $.Deferred();
                _.each(deck, function(card){
                    if(!card.image) return;
                    var path = 'images/' + card.image.name;
                    zip.file('reveal.js-2.5.0/' + path, stripPrefix(card.image.dataURL), {base64: true});
                    card.image.path = path;
                });
                zipPromise2.resolve(zip);
                return zipPromise2;
            }).then(function(zip){
                var revealIndexHtml = slideShowTemplate({ deck : deck });
                zip.file('reveal.js-2.5.0/index.html', revealIndexHtml);
                zip.file('reveal.js-2.5.0/deck.csv', csvTemplate({ deck : deck }));
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