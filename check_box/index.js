const myRadioButton = document.getElementById("myRadioButton");
const instagram = document.getElementById("instagram");
const twitter= document.getElementById("twitter");
const youtube = document.getElementById("youtube");
const mySubmit = document.getElementById("mySubmit");
const followResult = document.getElementById("followResult");
const checkBoxResult = document.getElementById("checkBoxResult");

mySubmit.onclick = function() {
    if(myRadioButton.checked){
        followResult.textContent = "You are following!";
    } else{
        followResult.textContent = "Please follow us!";
    }

    if(instagram.checked){
        checkBoxResult.textContent = "You are following us on Instagram now!";
    } else if(twitter.checked){
        checkBoxResult.textContent = "You are following us on Twitter now!";
    } else if(youtube.checked){
        checkBoxResult.textContent = "You are following us on Youtube now!";
    } else{
        checkBoxResult.textContent = "Select platform to follow us."
    }

}