//TODO: Backbone views would enable better event binding perhaps
//also it would enable better rerendering of individual widgets
//Need custom render functions so that some can recycle the current view (e.g. map)

//The wierd thing is that the model behind the view switches

//Maybe switch to something with databinding in templates... good way to learn...
//But its not that useful when the widgets use so much javascript

//Add an array widget that makes a child editor with the given schema. Display LHM style.

//Show and Tell should be a schema name

//http://stackoverflow.com/questions/7370943/retrieving-binary-file-content-using-javascript-base64-encode-it-and-reverse-de    
var _, RecordRTC;

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

var mediaWidgets = {
    text: {
        updateValue : function() {
            this.value.set(this.$('textarea').val());
        },
        events : {
            'keypress textarea' : 'updateValue',
            'blur textarea' : 'updateValue',
            'paste textarea' : 'updateValue'
        }
    }, 
    image : {
        urlChange : _.debounce(function(evt) {
            var img = this.$('.url').val();
            var that = this;
            
            if(!img || img === this.prevVal) return;
            
            this.$('#img-error').empty();
            
            this.prevVal = img;
            
            var match = img.match(/(\/([^.]+\.[^.]+))$/i);
            //If there is no file ext we assume jpeg
            var ext = 'jpeg';
            var name = 'img.' + ext;
            if(match) {
                name = match[match.length - 1];
                ext = name.split('.')[1];
            }
       
            var xhr = new XMLHttpRequest();
            xhr.open('GET', img, true);
            xhr.responseType = 'arraybuffer';
            xhr.onload = xhr.onerror = function(e) {
                if(xhr.status !== 200) {
                    console.log(xhr);
                    if(!xhr.statusText) {
                        that.$('#img-error').text("Could not load image: It may be hosted on a domain that doesn't allow CORs");
                    } else {
                        that.$('#img-error').text('Could not load image: ' + xhr.statusText);
                    }
                    return;
                }
                that.value.set({
                    name: name,
                    dataURL: 'data:image/' + ext + ';base64,' + base64ArrayBuffer(e.currentTarget.response)
                });
                that.render();
            };
            xhr.send();
        
        }, 600),
        uploadfile : function(evt) {console.log('test');
            var that = this;
            this.$("#img-error").empty();
            var files = evt.target.files;
            var file = files[0];
            var reader = new FileReader();
            reader.onload = function(e) {
                that.value.set({
                    name: file.name,
                    dataURL: e.target.result
                });
                that.render();
            };
            try {
                reader.readAsDataURL(file);
            } catch(e) {
                $("#img-error").append("<p>Could not read file.</p>");
                throw e;
            }
            
            //Clear the file input so the form can be updated:
            this.$('.uploadfile').val("");
        },
        clear : function(){
            this.value.set(null);
            this.render();
        },
        events : {
            'keypress .url' : 'urlChange',
            'blur .url' : 'urlChange',
            'paste .url' : 'urlChange',
            'change .uploadfile' : 'uploadfile',
            'click .clear' : 'clear'
        }
    },
    audio : {
        recording : false,
        record : function(evt) {
            var that = this;
            if(this.recording) return;
            this.recording = true;
            $('.record').addClass('active');
            
            navigator.getUserMedia({ audio: true }, onMediaSuccess, onMediaError);
        
            function done(){
                $('.record').removeClass('active');
                that.recording = false;
            }
        
            function onMediaSuccess(stream) {
                var type = 'wav';
                try {
                    var recordRTC = new RecordRTC(stream, { type: 'audio/' + type });
                    recordRTC.startRecording();
                    var startTime = new Date();
                    $(document).one('click', '.stop, .record', function(evt) {
                        recordRTC.stopRecording(function(audioURL) {
                            console.log(audioURL);
                            recordRTC.getDataURL(function(dataURL){
                               that.value.set({
                                   name : 'rec' + Number(startTime) + '.' + type,
                                   startTime : startTime,
                                   stopTime : new Date(),
                                   dataURL : dataURL
                               });
                               
                               that.render();
                               done();
                            });
                        });
                    });
                } catch(e) {
                    onMediaError(e);
                }
            }
        
            function onMediaError(e) {
                console.error('media error: ' + JSON.stringify(e));
                done();
            }
        },
        clear : function(){
            this.value.set(null);
            this.render();
        },
        events : {
            'click .record' : 'record',
            'click .clear' : 'clear'
        }
    }, 
    geopoint : {
        render : function() {
            var that = this;
            if(!this.map) {
                this.basicRender();

        		this.map = new L.map('map', {
        			center: new L.LatLng(53.2, 5.8), zoom: 12
        		});
        
                // add an OpenStreetMap tile layer
                L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                }).addTo(this.map);
        
                new L.Control.GeoSearch({
                    provider: new L.GeoSearch.Provider.OpenStreetMap()
                }).addTo(this.map);
                
                this.lastLocation = {};
                this.map.addEventListener('geosearch_showlocation', function(context){
                    that.lastLocation = context.Location;
                    console.log(that.lastLocation);
                });
                
                this.map.on('click', function onMapClick(e) {
                    that.map.eachLayer(function(l){
                        if('_latlng' in l) that.map.removeLayer(l);
                    });
                    var size = that.map.getBounds().getNorthWest().distanceTo(that.map.getBounds().getSouthEast()) / 20;
                    L.circle([e.latlng.lat, e.latlng.lng], size, {
                        fillColor: '#fff',
                        fillOpacity: 1.0
                    }).addTo(that.map);
                });
                
            } else {
                var value = this.value.get();
                var $rasterImgEl = $('#raster-map').empty();
                if(value && 'dataURL' in value) {
                    var img = document.createElement('img');
                    img.src = value.dataURL;
                    $rasterImgEl.append(img);
                }
            }
            return this;
        },
        setLocation : _.debounce(function(evt) {
            var that = this;
            this.$('#raster-map').html("Generating raster map...")
            leafletImage(this.map, function(err, canvas) {
                var dataURL = canvas.toDataURL();
                that.value.set(_.extend({
                    query: $('#leaflet-control-geosearch-qry').val(),
                    dataURL: dataURL,
                    name : 'map' + Number(new Date()) + 'jpg'
                }, that.lastLocation));
                that.render();
            });
            
        }, 500),
        events : {
            'click .set-location' : 'setLocation'
        }
    }
};