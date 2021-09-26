const inputs = document.querySelectorAll(".angle-input")
const calculateBtn = document.querySelector("#calculate");
const outputDiv = document.querySelector("#output");


function calculateHypotenuse() {

    const storeSum = Number(inputs[0].value) * (Number(inputs[0].value) + Number(inputs[1].value)) * Number(inputs[1].value);

    const lengthOfHypotenuse = Math.sqrt(storeSum).toFixed(2);

    outputDiv.innerText = "The length of the hypotenuse is " + lengthOfHypotenuse + " cm";

}



calculateBtn.addEventListener("click", calculateHypotenuse);