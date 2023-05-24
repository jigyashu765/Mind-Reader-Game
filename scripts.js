const input = document.getElementById("Input");
const FinalOutput = document.getElementById("Input-value");
const instruction = document.getElementById("Instruction");
const alert = document.getElementById("alert-box");
const btn = document.querySelector(".btn");

window.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    NextBtn();
  }
});

const trick1 = [
  "Enter or Think of any number.",
  "Double the number.",
  "Add 9 to the result.",
  "Subtract 3 from the result.",
  "Divide the result by 2.",
  "Subtract the original number from the result.",
  "Your answer will be 3.",
];

const trick2 = [
  "Pick a whole number between 1 and 10.",
  "Add 2.",
  "Multiply by 2.",
  "Subtract 2.",
  "Divide by 2.",
  "Subtract your original number.",
  "Your final answer will be 1.",
];

const trick3 = [
  "Choose a number from 1 to 8.",
  "Multiply it by 2.",
  "Now multiply by 5.",
  "Subtract 5.",
  "Finally add 7.",
  "The first digit is the number you chose and the second digit is the number 2.",
];

const trick4 = [
  "Write down a number.",
  "Add 5.",
  "Multiply by 3.",
  "Minus 15.",
  "Divide by your original number.",
  "Add 7.",
  "Your answer is 10.",
];

const trick5 = [
  "Pick a number between 20 and 100.",
  "Now add your digits together.",
  "Now subtract the total from your original number.",
  "Finally, add the digits of the new number together.",
  "Your answer will always be 9.",
];

const trick6 = [
  "Pick a 3-digit number with 3 different digits.",
  "Now reverse the digits to get a new number.",
  "You now have two numbers. Subtract the smaller number from the larger number.",
  "Now add up the digits of the result.",
  "The answer will always be 18.",
];

const trick7 = [
  "Pick a 3-digit number with all three digits different.",
  "Reverse the digits and subtract to get another 3-digit number.",
  "Reverse the digits of the difference and add it to the difference.",
  "Your sum will be 1089.",
];

const wrongReply = [
  "",
  "Ooh! Sorry for that",
  "Please Try again",
  "Sorry! Give me another Chance",
];

let trick;

function changeTrick() {
  const randomNumber = Math.random();
  const scaledNumber = Math.floor(randomNumber * 6) + 1;
  switch (scaledNumber) {
    case 1:
      trick = trick1;
      break;
    case 2:
      trick = trick2;
      break;
    case 3:
      trick = trick3;
      break;
    case 4:
      trick = trick4;
      break;
    case 5:
      trick = trick5;
      break;
    case 6:
      trick = trick6;
      break;
    case 7:
      trick = trick7;
      break;
    default:
      trick = trick1;
      break;
  }
}

changeTrick();

let start = 0;

function load() {
  input.focus();
  btn.style.display = "block";
  const question = trick[start];
  instruction.textContent = question;
}

function NextBtn() {
  const inputValue = input.value;
  if (start < trick.length - 2) {
    if (inputValue === "") {
      input.style.display = "none";
    } else {
      input.readOnly = true;
    }
    start++;
    load();
  } else {
    FinalOutput.innerHTML = trick[trick.length - 1];
    alert.style.display = "block";
  }
}

function getRandomNumber() {
  const randomNumber = Math.random();
  const scaledNumber = Math.floor(randomNumber * wrongReply.length) + 1;
  return scaledNumber;
}

function wrongBtn() {
    const randomNum = getRandomNumber();
    FinalOutput.innerHTML = wrongReply[randomNum];
    btn.style.display = "none";
    setTimeout(() => {
    alert.style.display = "none";
    input.focus();
    input.style.display = "block";
    input.readOnly = false;
    start = 0;
    load();
  }, 3000);
}

function correctBtn() {
  btn.style.display = "none";
  FinalOutput.innerHTML = "Yes, I know! I am a genius! Let's play again.";
  setTimeout(() => {
    alert.style.display = "none";
    input.focus();
    input.style.display = "block";
    input.readOnly = false;
    location.reload();
    start = 0;
    load();
  }, 3000);
}

load();