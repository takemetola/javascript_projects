let pass = document.getElementById("password");
let message = document.getElementById("message");
let str = document.getElementById("strength");


pass.addEventListener("input", event => {
    if (pass.value.length > 0) {
        message.style.display = "block";
    }
    else {
        message.style.display = "none";
    }
    if (pass.value.length < 4) {
        str.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        message.style.color = "#ff5925";
    }
    else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        message.style.color = "yellow";
    }
    else if (pass.value.length >= 8 && pass.value.includes("!")) {
        str.innerHTML = "strong";
        pass.style.borderColor = "#26d730";
        message.style.color = "#26d730";
    }
}
)