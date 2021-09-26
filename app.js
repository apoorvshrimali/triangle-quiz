const angleInputs = document.querySelectorAll(".angle-input");
const outputDiv = document.querySelector("#output");

const checkBtn = document.querySelector("#check-btn");


function checkTriangle() {

    const storeSum = Number(angleInputs[0].value) + Number(angleInputs[1].value) + Number(angleInputs[2].value);

    if (storeSum === 180) {

        outputDiv.innerText = "Correct! These are angles which can form a perfect triangle!";
    }

    else {

        outputDiv.innerText = "Oops! It does not seem to be a triangle";
    }

}

checkBtn.addEventListener("click", checkTriangle);