const questionElement = document.querySelector(".question");
const answerButton = document.querySelector(".buttons");
const next = document.querySelector(".next_btn");


document.querySelector(".start_quiz").addEventListener("click",()=>{
    document.querySelector(".quiz").classList.add("active")
})

let questions = [
    {
        question: "Which is larget animal in the world?" ,
        answers: [
            {text: "Shark", correct: false} ,
            {text: "Blue whale", correct: true} ,
            {text: "Elephant", correct: false} ,
            {text: "Giraffe", correct: false}
        ]
    } ,
    {
        question: "In the TV show Friends, how many times has Ross been married by the time the series ends? " ,
        answers: [
            {text: "three", correct: true} ,
            {text: "two", correct: false} ,
            {text: "one", correct: false} ,
            {text: "five", correct: false}
        ]
    } ,
    {
        question: "What animal is Indiana Jones famously afraid of?",
        answers: [
                {text:"Lion",correct: false} ,
                {text:"Bear",correct: false} ,
                {text:"Snakes",correct: true} ,
                {text:"Elephant",correct: false} ,

        ]
    } ,
    {
        question: "What is the national sport of Canada?",
        answers: [
                {text:"Football",correct: false} ,
                {text:"Lacrosse",correct: true} ,
                {text:"Tennis",correct: false} ,
                {text:"Basketball",correct: false} ,

        ]
    } ,
    {
        question: "What is the furthest planet from the sun?",
        answers: [
                {text:"Venus",correct: false} ,
                {text:"Earth",correct: false} ,
                {text:"Mars",correct: false} ,
                {text:"Neptune",correct: true} ,

        ]
    } 

]


let CurrentQuestionIndex = 0
let Score = 0

function StartQuiz() {
    CurrentQuestionIndex = 0
    Score = 0
    next.innerHTML = "Next"
    showQuestion()
}

function showQuestion() {
    resetState()
    let CurrentQuestion = questions[CurrentQuestionIndex]
    let ScoreNo = CurrentQuestionIndex + 1
    questionElement.innerHTML = ScoreNo + ". " + CurrentQuestion.
    question

    CurrentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButton.appendChild(button)
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click",selectAnswer)
    })
}


function resetState() {
    next.style.display = "none"
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if (isCorrect) {
        selectedBtn.classList.add("correct")
        Score++
    } else {
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = "true"
    })
    next.style.display = "block"
}


function showScore() {
    resetState()
    questionElement.innerHTML = `You scored ${Score} out of ${questions.length} !`
    next.innerHTML = "Play Again"
    next.style.display = "block"
}

function  handlenext() {
    CurrentQuestionIndex++
    if (CurrentQuestionIndex < questions.length) {
        showQuestion()
    } else {
        showScore()
    }
}

next.addEventListener("click",()=>{
    if (CurrentQuestionIndex < questions.length) {
        handlenext()
    } else {
        StartQuiz()
    }
})


StartQuiz()





// let Questions = ["What is the capital of capital?","What country does this language belong to?"]
// fetch("https://restcountries.com/v3.1/all")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
     
//     })


