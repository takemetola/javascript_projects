const questions = [
    {
        question: "What is the largest planet in our solar system by mass?",
        answers: [
            { text: "Earth", correct: false},
            { text: "Sun", correct: false},
            { text: "Jupiter", correct: true},
            { text: "Saturn", correct: false},
        ]
    },
    {
        question: "What is the name of the nearest galaxy to the Milky Way?",
        answers: [
            { text: "Andromeda", correct: true},
            { text: "Triangulum", correct: false},
            { text: "Orion", correct: true},
            { text: "Sombrero", correct: false},
        ]
    },
    {
        question: "Which celestial body is known as the Red Planet?",
        answers: [
            { text: "Jupiter", correct: false},
            { text: "Venus", correct: false},
            { text: "Mars", correct: true},
            { text: "Saturn", correct: false},
        ]
    },
    {
        question: "Which of the following is NOT a type of galaxy?",
        answers: [
            { text: "Spiral", correct: false},
            { text: "Elliptical", correct: false},
            { text: "Irregular", correct: false},
            { text: "Nebular", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function starQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}

function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumb = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumb + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
}

starQuiz();
