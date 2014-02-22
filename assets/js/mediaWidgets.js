var _, RecordRTC, base64ArrayBuffer;

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
        updateValue : _.debounce(function() {
            this.value.set(this.$('textarea').val());
        }, 400),
        events : {
            'keypress textarea' : 'updateValue',
            'blur textarea' : 'updateValue',
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
        recording : false,
        record : function(evt) {
            var that = this;
            if(this.recording) return;
            this.recording = true;
            $('.record').addClass('active');
            
            navigator.getUserMedia({ audio: true }, onMediaSuccess, onMediaError);
        
            function done(){
              $('.record').removeClass('active');
              $('.recording').hide();
              that.recording = false;
            }
        
            function onMediaSuccess(stream) {
              var type = 'webm';
              try {
                var recordRTC = new RecordRTC(stream); //, { type: 'audio/' + type });
                recordRTC.startRecording();
                var startTime = new Date();
                $('.recording').show();
                $(document).one('click', '.stop, .record', function(evt) {
                  recordRTC.stopRecording();
                  that.value.set({ converting : true });
                  that.render();
                  convertStreams(recordRTC.getBlob(), function(err, oggblob){
                    blobToDataURL(oggblob, function(err, dataURL){
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
        enable : function(){
          var that = this;
          localStorage.setItem("downloadWavConverter", $('#rememberWavConverter').prop('checked'));
          //Download the ogg-to-wav code to enable this widget
          window.wavConverterLoading = true;
          this.render();
          worker = createWebWorker();
          worker.onready = function(event) {
            window.wavConverterLoaded = true;
            that.render();
          };
        },
        events : {
            'click .record' : 'record',
            'click .clear' : 'clear',
            'click .enable-audio' : 'enable'
        }
    }
};