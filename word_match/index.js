const gerWord1 = document.querySelector('.box-left[id="1"]');
const gerWord2 = document.querySelector('.box-left[id="2"]');
const engWord1 = document.querySelector('.box-right[id="1"]');
const engWord2 = document.querySelector('.box-right[id="2"]');

let words = {};
let data = [];
let randomTerm = [];


function fetchCSV() {
    fetch('./csv/words.csv')
        .then(response => response.text())
        .then(csvData => {
            const lines = csvData.split('\n');
            lines.forEach(line => {
                if (line.trim()) {
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
    if (data.length > 1) { // Ensure there are at least two items
        let index1 = Math.floor(Math.random() * data.length);
        let index2;
        do {
            index2 = Math.floor(Math.random() * data.length);
        } while (index1 === index2);

        let randomTerm1 = data[index1];
        let randomTerm2 = data[index2];

        gerWord1.textContent = randomTerm1[0];
        engWord1.textContent = randomTerm1[1];
        gerWord2.textContent = randomTerm2[0];
        engWord2.textContent = randomTerm2[1];
    } else {
        console.error('Not enough data available.');
    }
}

gerWord1.addEventListener("click", () => {
        gerWord1.style.background = "green";
    });


gerWord2.addEventListener("click", () => {
        console.log("hallo2");
    });

engWord1.addEventListener("click", () => {
        console.log("hello");
    });

engWord2.addEventListener("click", () => {
        console.log("hello2");
    });

    fetchCSV();