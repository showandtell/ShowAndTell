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
            
            $(document).on('keypress change blur', '.url', _.debounce(function(evt) {
            	evt.stopPropagation();
            	evt.preventDefault();
                
                $('#errors').empty();
                var img = $('.url').val();
                
                if(!img) return;
                
                var match = img.match(/(\/([^.]+\.[^.]+))$/i);
                var ext = 'jpeg';
                var name = 'img.' + ext;
                if(match) {
                    name = match[match.length - 1];
                    ext = name.split('.')[1];
                }
           
                //http://stackoverflow.com/questions/7370943/retrieving-binary-file-content-using-javascript-base64-encode-it-and-reverse-de    
                function base64ArrayBuffer(arrayBuffer) {
                  var base64    = ''
                  var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
                
                  var bytes         = new Uint8Array(arrayBuffer)
                  var byteLength    = bytes.byteLength
                  var byteRemainder = byteLength % 3
                  var mainLength    = byteLength - byteRemainder
                
                  var a, b, c, d
                  var chunk
                
                  // Main loop deals with bytes in chunks of 3
                  for (var i = 0; i < mainLength; i = i + 3) {
                    // Combine the three bytes into a single integer
                    chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]
                
                    // Use bitmasks to extract 6-bit segments from the triplet
                    a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
                    b = (chunk & 258048)   >> 12 // 258048   = (2^6 - 1) << 12
                    c = (chunk & 4032)     >>  6 // 4032     = (2^6 - 1) << 6
                    d = chunk & 63               // 63       = 2^6 - 1
                
                    // Convert the raw binary segments to the appropriate ASCII encoding
                    base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
                  }
                
                  // Deal with the remaining bytes and padding
                  if (byteRemainder == 1) {
                    chunk = bytes[mainLength]
                
                    a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2
                
                    // Set the 4 least significant bits to zero
                    b = (chunk & 3)   << 4 // 3   = 2^2 - 1
                
                    base64 += encodings[a] + encodings[b] + '=='
                  } else if (byteRemainder == 2) {
                    chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]
                
                    a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
                    b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4
                
                    // Set the 2 least significant bits to zero
                    c = (chunk & 15)    <<  2 // 15    = 2^4 - 1
                
                    base64 += encodings[a] + encodings[b] + encodings[c] + '='
                  }
                
                  return base64
                }
                
                var xhr = new XMLHttpRequest();
                xhr.open('GET', img, true);
                xhr.responseType = 'arraybuffer';
                xhr.onload = function(e) {
                    value.set((value.get() || []).concat([{
                        name: name,
                        dataURL: 'data:image/' + ext + ';base64,' + base64ArrayBuffer(e.currentTarget.response)
                    }]));
                    renderCurrentCard();
                };
                xhr.send();
            
                $('.url').val("");
            }, 500));

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