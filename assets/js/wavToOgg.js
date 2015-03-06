//Muaz Khan's Wav to Ogg code:
//https://github.com/muaz-khan/WebRTC-Experiment/tree/master/ffmpeg
//MIT licenced
//Some modifications by Nathan Breit

function createWebWorker() {
  var workerPath = 'https://bgrins.github.io/videoconverter.js/build/ffmpeg.js';
  var blob = URL.createObjectURL(new Blob(['importScripts("' + workerPath + '");var now = Date.now;function print(text) {postMessage({"type" : "stdout","data" : text});};onmessage = function(event) {var message = event.data;if (message.type === "command") {var Module = {print: print,printErr: print,files: message.files || [],arguments: message.arguments || [],TOTAL_MEMORY: message.TOTAL_MEMORY || false};postMessage({"type" : "start","data" : Module.arguments.join(" ")});postMessage({"type" : "stdout","data" : "Received command: " +Module.arguments.join(" ") +((Module.TOTAL_MEMORY) ? ".  Processing with " + Module.TOTAL_MEMORY + " bits." : "")});var time = now();var result = ffmpeg_run(Module);var totalTime = now() - time;postMessage({"type" : "stdout","data" : "Finished processing (took " + totalTime + "ms)"});postMessage({"type" : "done","data" : result,"time" : totalTime});}};postMessage({"type" : "ready"});'], {
      type: 'application/javascript'
  }));
  var worker = new Worker(blob);
  URL.revokeObjectURL(blob);
  worker.onready = function(){}; 
  worker.onmessage = function(event) {
    var message = event.data;
    if (message.type == "ready") {
      worker.ready = true;
      worker.onready();
    }
  };
  return worker;
}

var worker;

function convertStreams(audioBlob, callback) {
  var aab;
  var buffersReady;
  var workerReady;
  var posted;
  
  var fileReader = new FileReader();
  fileReader.onload = function() {
      aab = this.result;
      postMessage();
  };
  fileReader.readAsArrayBuffer(audioBlob);
  
  if (!worker || !worker.ready) {
      throw Error("Worker is not ready");
  }
  
  worker.onmessage = function(event) {
      var message = event.data;
      if (message.type == "stdout") {
          console.log(message.data);
      } else if (message.type == "start") {
          console.log('<a href="https://googledrive.com/host/0B6GWd_dUUTT8OEtLRGdQb2pibDg/ffmpeg_asm.js" download="ffmpeg-asm.js">ffmpeg-asm.js</a> file received ffmpeg command.');
      } else if (message.type == "done") {
          var result = message.data[0];
          //console.log(JSON.stringify(result));
  
          var blob = new Blob([result.data], {
              type: 'audio/webm'
          });
  
          //console.log(blob);
  
          callback(null, blob);
      }
  };
  var postMessage = function() {
      posted = true;
  
      worker.postMessage({
          type: 'command',
          arguments: ['-i', 'audio.wav', '-c:a', 'vorbis', '-b:a', '48k', '-strict', 'experimental', 'output.webm'],
          files: [
              {
                  data: new Uint8Array(aab),
                  name: "audio.wav"
              }
          ]
      });
  };
}