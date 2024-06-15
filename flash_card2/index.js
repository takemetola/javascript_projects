const term = document.querySelector(".term");
const definition = document.querySelector(".definition");
const checkButton = document.querySelector(".check");
const nextButton = document.querySelector(".next");

let words = {
    labas: "Hallo",
    viso: "Tschüss",
    medis: "Baum",
    kinas: "Kino"
}

let data = Object.entries(words);

checkButton.addEventListener("click", function(){
    
    definition.style.display = "block";
    definition.innerHTML = `<h1>${randomTerm[1]}</h1>`;


});

nextButton.addEventListener("click", function(){
    getRandomTerm();
    definition.style.display = "none";
})

function getRandomTerm(){
    randomTerm = data[Math.floor(Math.random() * data.length)];
    term.innerHTML = `<h1>${randomTerm[0]}</h1>`;
}



