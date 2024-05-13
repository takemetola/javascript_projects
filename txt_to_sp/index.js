let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

function populateVoiceList(){
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

populateVoiceList();

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

