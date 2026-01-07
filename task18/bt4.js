const arr = ["na", "ổi", "xoài", "táo", "mận", "cam"];

const wordEl = document.getElementById("word");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const startBtn = document.getElementById("start-btn");

let score = 0;
let time = 60;
let timer = null;
let currentWord = "";

function getRandom() {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}
function showWord() {
  currentWord = getRandom();
  wordEl.innerText = currentWord;
}
function startGame() {
  score = 0;
  time = 60;

  scoreEl.innerText = "Score: 0";
  timeEl.innerText = "Time: 60";

  inputEl.disabled = false;
  inputEl.value = "";
  inputEl.focus();

  showWord();

  clearInterval(timer);
  timer = setInterval(countDown, 1000);
}
inputEl.addEventListener("input", function () {
  if (inputEl.value === currentWord) {
    score++;
    scoreEl.innerText = "Score: " + score;
    inputEl.value = "";
    showWord();
  }
});
startBtn.onclick = startGame;
