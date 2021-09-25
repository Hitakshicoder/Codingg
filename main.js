var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run (event) {

console.log(event);    

var Content = even.results[0] [0].transcript;
console.log(Contecnt);

document.getElementById("textbox").innerHTML = Content;
}