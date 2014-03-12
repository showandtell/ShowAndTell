var _, RecordRTC, base64ArrayBuffer, createWebWorker, convertStreams;

var blobToDataURL = function(blob, callback){
  var reader = new FileReader();
  reader.onload = function(e) {
    callback(null, e.target.result);
  };
  reader.onerror = callback;
  reader.readAsDataURL(blob);
};

var mediaWidgets = {
    text: {
      updateValue : _.debounce(function(evt) {
        var value = $(evt.target).closest('textarea').val();
        this.value.set(value);
      }, 100),
      events : {
        'keypress textarea' : 'updateValue',
        'paste textarea' : 'updateValue',
        'cut textarea' : 'updateValue'
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
                    dataURL: 'data:image/' + ext + ';base64,' + base64ArrayBuffer.decode(e.currentTarget.response)
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
        initialize : function(){
          if(localStorage.getItem("downloadWavConverter") === "true") this.loadWavConverter();
        },
        recording : false,
        inChrome : navigator.userAgent.match('Chrome') ? true : false,
        loadWavConverter : function(){
          var that = this;
          this.wavConverterLoading = true;
          worker = createWebWorker();
          worker.onready = function(event) {
            that.wavConverterLoading = false;
            that.wavConverterLoaded = true;
            that.render();
          };
        },
        render : function() {
          return this.basicRender({
            recording : this.recording,
            wavConverterLoading : this.wavConverterLoading,
            wavConverterLoaded : this.wavConverterLoaded,
            audioCompatible : this.inChrome
          });
        },
        record : function(evt) {
            var that = this;
            if(this.recording) return;
            this.recording = true;
            
            navigator.getUserMedia({ audio: true }, onMediaSuccess, onMediaError);
        
            function done(){
              that.recording = false;
              that.render();
            }
        
            function onMediaSuccess(stream) {
              var type = 'webm';
              try {
                var recordRTC = new RecordRTC(stream); //, { type: 'audio/' + type });
                recordRTC.startRecording();
                var startTime = new Date();
                var currentValue = that.value.get();
                if(!currentValue) {
                  currentValue = {};
                  that.value.set(currentValue);
                }
                that.render();
                
                $(document).one('click', '.stop, .record', function(evt) {
                  recordRTC.stopRecording();
                  currentValue.converting = true;
                  done();
                  var blob = recordRTC.getBlob();
                  if(!blob) throw Error("Missing recordRTC blob.");
                  convertStreams(blob, function(err, vorbisBlob){
                    if(err) throw err;
                    if(vorbisBlob.size === 0) {
                      console.log("Empty blob");
                      console.log(vorbisBlob);
                    }
                    blobToDataURL(vorbisBlob, function(err, dataURL){
                      _.extend(currentValue, {
                        name : 'rec' + Number(startTime) + '.' + type,
                        startTime : startTime,
                        stopTime : new Date(),
                        dataURL : dataURL,
                        converting : false
                      });
                      if(that.value.get() === currentValue) that.render();
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
        enable : function(){
          var that = this;
          localStorage.setItem("downloadWavConverter", $('#rememberWavConverter').prop('checked'));
          this.loadWavConverter();
          this.render();
        },
        events : {
            'click .record' : 'record',
            'click .clear' : 'clear',
            'click .enable-audio' : 'enable'
        }
    }
};