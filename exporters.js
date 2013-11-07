var JSZip, Handlebars;
Handlebars.registerHelper("markdown", function(text) {
    if(!text) return '';
    var converter = new Markdown.Converter();
    return new Handlebars.SafeString(converter.makeHtml(text));
});
Handlebars.registerHelper("get", function(obby, path) {
    if(!('path' in obby)) return '';
    return new Handlebars.SafeString(obby[path]);
});
var stripPrefix = function(str){
    return str.split(',')[1];
};
var exporters = {
    jsonBlob : function(deck){
        console.log(JSON.stringify(deck));
    },
    zipCsv : function(deck){
        var columns = [
            "front text",
            "back text",
            "image.path",
            "audio.path",
            "map image.path",
            "map image.query",
            "map image.X",
            "map image.Y",
            "map image.Label",
            "audio.name",
            "audio.startTime",
            "audio.stopTime"
        ];
        
        $.when(new JSZip()).then(function(zip){
            var zipPromise2 = $.Deferred();
            _.each(deck, function(card){
                if(card.image) {
                    card.image.path = 'media/' + card.image.name;
                    zip.file(card.image.path,
                        stripPrefix(card.image.dataURL), {base64: true});
                }
                if(card.audio) {
                    card.audio.path = 'media/' + card.audio.name;
                    zip.file(card.audio.path,
                        stripPrefix(card.audio.dataURL), {base64: true});
                }
                if(card['map image']) {
                    card['map image'].path = 'media/' + card['map image'].name;
                    zip.file(card['map image'].path,
                        stripPrefix(card['map image'].dataURL), {base64: true});
                }
            });
            zipPromise2.resolve(zip);
            return zipPromise2;
        }).then(function(zip){
            var csvOut = '';
            //columns.join(',') + '\n';
            csvOut += _.map(deck, function(card){
                return _.map(columns, function(column){
                    var ptr = card;
                    var components = column.split('.');
                    while(components.length > 0) {
                        var component = components.shift();
                        if(!(component in ptr)) return '""';
                        ptr = ptr[component];
                    }
                    return '"' + ptr + '"';
                }).join(',') + '\n';
            }).join('');
            
            zip.file('deck.csv', csvOut);
            zip.file('deck.json', JSON.stringify(deck));
            var zipped = zip.generate({
                type:'blob'
            });
            var $downloadBtn = $('<a class="btn btn-success">Download<a>');
            $downloadBtn.attr('href', window.URL.createObjectURL(zipped));
            $downloadBtn.attr('download', "presentation.zip");
            $('#download').empty().append($downloadBtn);
        });
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
            
            
            /*
            revealIndexHtml = slideShowTemplate({ deck : deck, revealPathPrefix : 'tutorial/' });
            document.getElementById('preview').contentDocument.write(revealIndexHtml);
            */
            
            $.when(zipPromise).then(function(zip){
                var zipPromise2 = $.Deferred();
                _.each(deck, function(card){
                    if(card.image) {
                        card.image.path = 'media/' + card.image.name;
                        zip.file('reveal.js-2.5.0/' + card.image.path,
                            stripPrefix(card.image.dataURL), {base64: true});
                    }
                    if(card.audio) {
                        card.audio.path = 'media/' + card.audio.name;
                        zip.file('reveal.js-2.5.0/' + card.audio.path,
                            stripPrefix(card.audio.dataURL), {base64: true});
                    }
                });
                zipPromise2.resolve(zip);
                return zipPromise2;
            }).then(function(zip){
                var revealIndexHtml = slideShowTemplate({ deck : deck });
                zip.file('reveal.js-2.5.0/index.html', revealIndexHtml);
                zip.file('deck.json', JSON.stringify(deck));

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