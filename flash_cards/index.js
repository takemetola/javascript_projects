const card = document.querySelector(".card");
const enWord = document.querySelector(".front p");
const deWord = document.querySelector(".back p");

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

function getRandomTerm() {
    if (data.length > 0) {
        randomTerm = data[Math.floor(Math.random() * data.length)];
        enWord.innerHTML = `<p>${randomTerm[1]}</p>`;
        deWord.innerHTML = `<p>${randomTerm[0]}</p>`;
    } else {
        console.error('No data available.');
    }
}

document.addEventListener("click", ()=>{
    getRandomTerm();
})

fetchCSV();