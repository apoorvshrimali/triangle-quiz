const quizForm = document.querySelector(".quiz-form");

const submitAnswerBtn = document.querySelector("#submit-btn");

const outputDiv = document.querySelector("#output");

const correctAnswers = ["90", "right-angled", "Isosceles", "Scalene"]


function checkAnswers() {

    let score = 0;
    let index = 0;

    const formResults = new FormData(quizForm);

    for(let value of formResults.values()){

        if(value === correctAnswers[index]){
            score = score + 1;
        }

        index = index + 1;
    }

   outputDiv.innerText = "Your score is " + score;

}





submitAnswerBtn.addEventListener("click", checkAnswers);