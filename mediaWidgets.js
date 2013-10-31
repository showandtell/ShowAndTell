//TODO: Backbone views would enable better event binding perhaps
//also it would enable better rerendering of individual widgets
//Need custom render functions so that some can recycle the current view (e.g. map)

//The wierd thing is that the model behind the view switches

//Maybe switch to something with databinding in templates... good way to learn...
//But its not that useful when the widgets use so much javascript

//Add an array widget that makes a child editor with the given schema. Display LHM style.

//Show and Tell should be a schema name

var mediaWidgets = {
    text: {
        init : function(value) {
            $(document).on('keypress change blur paste', 'textarea', function(evt) {
                value.set($('textarea').val());
            });
        }
    }, 
    image : {
        init : function(value) {
            $(document).on('change', '.uploadfile', function(evt) {
                $("#img-error").empty();
            	var files = evt.target.files;
            	_.each(files, function(file){
                	var reader = new FileReader();
                    reader.onload = function(e) {
                        value.set({
                            name: file.name,
                            dataURL: e.target.result
                        });
                        renderCurrentCard();
                	};
                    try {
                        reader.readAsDataURL(file);
                    } catch(e) {
                        $("#img-error").append("<p>Could not read file.</p>");
                        throw e;
                    }
            	});
                
                //Clear the file input so the form can be updated:
                $('.uploadfile').val("");
            });
            
            var prevVal;
            $(document).on('keypress change blur paste', '.url', _.debounce(function(evt) {
                $('#img-error').empty();
                var img = $('.url').val();
                
                if(!img || img === prevVal) return;
                prevVal = img;
                
                var match = img.match(/(\/([^.]+\.[^.]+))$/i);
                //If there is no file ext we assume jpeg
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
                xhr.onload = xhr.onerror = function(e) {
                    if(xhr.status !== 200) {
                        console.log(xhr);
                        if(!xhr.statusText) {
                            $('#img-error').text("Could not load image: It may be hosted on a domain that doesn't allow CORs");
                        } else {
                            $('#img-error').text('Could not load image: ' + xhr.statusText);
                        }
                        return;
                    }
                    value.set({
                        name: name,
                        dataURL: 'data:image/' + ext + ';base64,' + base64ArrayBuffer(e.currentTarget.response)
                    });
                    renderCurrentCard();
                };
                
                xhr.send();
            
            }, 600));

        }
        
    },
    audio : {
        init : function(value) {
            $(document).on('click', '.record', function(evt) {
                
                $('.record').addClass('active');
                
                navigator.getUserMedia({ audio: true }, onMediaSuccess, onMediaError);
            
                function onMediaSuccess(stream) {
                    try {
                        var recordRTC = new RecordRTC(stream);
                        recordRTC.startRecording();
                        $(document).one('click', '.stop', function(evt) {
                            $('.record').removeClass('active');
                            recordRTC.stopRecording(function(audioURL) {
                                recordRTC.getDataURL(function(dataURL){
                                   value.set({
                                       stopTime : new Date(),
                                       dataURL : dataURL
                                   });
                                   console.log();
                                   renderCurrentCard();
                                });
    
                            });
                        });
                    } catch(e) {
                        onMediaError(e);
                    }
                }
            
                function onMediaError(e) {
                    console.error('media error', e);
                    $('.record').removeClass('active');
                }
            });
        }
    }, 
    geopoint : {
        init : function(value) {
            
    		var map = new L.map('map', {
    			center: new L.LatLng(53.2, 5.8), zoom: 12
    		});
    
            // add an OpenStreetMap tile layer
            L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(map);
    
            new L.Control.GeoSearch({
                provider: new L.GeoSearch.Provider.OpenStreetMap()
            }).addTo(map);
            
            var lastLocation = {};
            map.addEventListener('geosearch_showlocation', function(context){
                lastLocation = context.Location;
                console.log(lastLocation);
            });
            
            $(document).on('click', '.set-location', _.debounce(function(evt) {
                $('#raster-map').html("Generating raster map...")
                leafletImage(map, function(err, canvas) {
                    var dataURL = canvas.toDataURL();
                    value.set(_.extend({
                        query: document.getElementById('leaflet-control-geosearch-qry'),
                        dataURL: dataURL
                    }, lastLocation));
                    var img = document.createElement('img');
                    img.src = dataURL;
                    $('#raster-map').empty().append(img);
                });
                
            }, 500));

        }
        
    }
};