const output = document.getElementById("output");

const result = document.querySelector("#result");


console.log(result.innerText);
const buttons = document.querySelectorAll(".item");

buttons.forEach((button, i, buttons) => {
button.addEventListener("click", showButton);
});

function showButton() {
if (this.innerText === "=") {
    result.innerText = eval(output.innerText);
} else if (this.innerText === "C") {
    output.innerText = "";
    result.innerText = "";
}
    else if(this.innerText === "D"){
    output.innerText = output.innerText.slice(0, -1);
    result.innerText = result.innerText.slice(0, -1);
}
else output.innerText += this.innerText;
}



