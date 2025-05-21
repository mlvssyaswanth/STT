runSpeechRecog = () => {
    var output = document.getElementById('output');
    var action = document.getElementById('action');
    var micIndicator = document.getElementById('mic-indicator');
    let recognization = new webkitSpeechRecognition();

    recognization.onresult = (e) =>{
        var transcript = e.results[0][0].transcript;
        output.innerHTML = transcript;
        output.classList.add("show");
        action.innerHTML="";
        micIndicator.classList.remove("active");
    }
    output.classList.remove("show");
    output.innerHTML = "";
    action.innerHTML = "Listening...";
    micIndicator.classList.add("active");
    recognization.onend = () => {
        micIndicator.classList.remove("active");
        action.innerHTML = "";
    }
    recognization.start();
}

function clearOutput() {
    var output = document.getElementById('output');
    output.innerHTML = "";
    output.classList.remove("show");
}