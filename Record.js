var recordButton = document.getElementById("record");
var stopButton = document.getElementById("stop");
var recording = document.getElementById("recording");
var recorder;

//Configuration for stereoAudioRecorder
navigator.mediaDevices.getUserMedia({ audio: true }).then(function (stream) {
  recorder = RecordRTC(stream, {
    type: "audio",
    mimeType: "audio/webm",

    sampleRate: 96000,
    desiredSampRate: 16000,
    bufferSize: 16384,
    numberOfAudioChannels: 2,
  });
});

// Start Recording
recordButton.addEventListener("click", function () {
  recorder.startRecording();
});

// Stop Recording
stopButton.addEventListener("click", function () {
  recorder.stopRecording(function () {
    //get recording data
    var blob = recorder.getBlob();
    form = new FormData();
    form.append("file", blob, "akkkkkk.webm");

    $.ajax({
      url: "/saveRecord",
      type: "POST",
      data: form,
      enctype: "multipart/form-data",
      processData: false,
      contentType: false,
      success: function (data) {
        console.log("success");
      },
      error: function (e) {
        console.log("error");
      },
    });
  });
});
