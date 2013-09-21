var exporters = {
    jsonBlob : function(deck){
        console.log(JSON.stringify(deck));
    },
    zip : function(deck){
        var zip = new JSZip();
        var pathMap = {};
        $.when.apply(null, _.map(deck, function(card, idx){
            var promise = $.Deferred();
            window.setTimeout(function(){
                zip.file(idx + "/text.txt", card.text);
                _.each(card.images, function(image){
                    var data = image.dataURL.replace(/^data:image\/(png|jpg|gif|jpeg);base64,/, "");
                    zip.file(idx + "/" + image.name, data, { base64: true });
                });
                promise.resolve();
            }, 100);

            return promise;
        })).then(function(){
            var zipped = zip.generate({
                type:'blob'
            });
            $('#download').html($('#download-notice').html());
            var $downloadBtn = $('#download').find('.download');
            $downloadBtn.attr('href', window.URL.createObjectURL(zipped));
            $downloadBtn.attr('download', "deck.zip");
        });
    },
    slideShow : function(deck){

    }
};