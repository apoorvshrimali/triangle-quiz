const areaInputs = document.querySelectorAll(".angle-input");

const areaBtn = document.querySelector("#calculate-area");

const outputDiv = document.querySelector("#output");

function findArea() {

    const area = 0.5 * Number(areaInputs[0].value) * Number(areaInputs[1].value);

    outputDiv.innerText = "The area of the triangle is " + area + " square cm";

}


areaBtn.addEventListener("click", findArea);