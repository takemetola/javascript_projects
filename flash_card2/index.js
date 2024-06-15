const term = document.querySelector(".term");
const definition = document.querySelector(".definition");
const checkButton = document.querySelector(".check");
const nextButton = document.querySelector(".next");

let words = {};
let data = [];
let randomTerm = [];


function fetchCSV() {
    fetch('./csv/words.csv')
        .then(response => response.text())
        .then(csvData => {
            const lines = csvData.split('\n');
            lines.forEach(line => {
                if (line.trim()) { // Check for empty lines
                    const [key, value] = line.split(';');
                    if (key && value) {
                        words[key.trim()] = value.trim();
                    }
                }
            });
            data = Object.entries(words);
            if (data.length > 0) {
                getRandomTerm();
            } else {
                console.error('No valid data found in CSV.');
            }
        })
        .catch(error => console.error('Error fetching the CSV file:', error));
}




checkButton.addEventListener("click", function() {
    if (randomTerm && randomTerm.length > 0) {
        definition.style.display = "block";
        definition.innerHTML = `<h1>${randomTerm[0]}</h1>`;
    } else {
        console.error('No term selected.');
    }
});

nextButton.addEventListener("click", function(){
    getRandomTerm();
    definition.style.display = "none";
})

function getRandomTerm() {
    if (data.length > 0) {
        randomTerm = data[Math.floor(Math.random() * data.length)];
        term.innerHTML = `<h1>${randomTerm[1]}</h1>`;
    } else {
        console.error('No data available.');
    }
}

fetchCSV();



