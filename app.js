const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const reset = document.querySelector("#reset");
const playto = document.querySelector("#playto");
const p1display = document.querySelector("#p1Display");
const p2display = document.querySelector("#p2Display");
let p1score = 0;
let p2score = 0;

p1Button.addEventListener("click", function () {
  p1score++;
  p1display.innerText = `${p1score}`;
  checkScore();
});

p2Button.addEventListener("click", function () {
  p2score++;
  p2display.innerText = `${p2score}`;
  checkScore();
});

reset.addEventListener("click", function () {
  p1score = 0;
  p2score = 0;
  p1display.innerText = `${p1score}`;
  p2display.innerText = `${p2score}`;
  p1display.style.color = "";
  p2display.style.color = "";
  p1Button.removeAttribute("disabled");
  p2Button.removeAttribute("disabled");
});

const checkScore = () => {
  if (p1score === parseInt(playto.value)) {
    p1display.style.color = "green";
    p2display.style.color = "red";
    p1Button.setAttribute("disabled", "");
    p2Button.setAttribute("disabled", "");
  } else if (p2score === parseInt(playto.value)) {
    p2display.style.color = "green";
    p1display.style.color = "red";
    p1Button.setAttribute("disabled", "");
    p2Button.setAttribute("disabled", "");
  }
};
