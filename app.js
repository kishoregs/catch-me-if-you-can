const squares = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;

const playTime = 15; //seconds
let currentTime = playTime;
timeLeft.textContent = playTime;

function clearMoole() {
  squares.forEach((sq) => {
    sq.classList.remove("mole");
  });
}
function randomSquare() {
  clearMoole();
  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");

  //assign the id of the randomPosition to hitPosition for us to use later
  hitPosition = randomPosition.id;
}

squares.forEach((id) => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

let moleTimerId = null;
let timerId = null;

function moveMole() {
  document.querySelector("button").disabled = true;
  currentTime = playTime;
  timeLeft.textContent = playTime;
  timerId = setInterval(countDown, 1000);
  moleTimerId = setInterval(randomSquare, 500);
}

function tempAlert(msg, duration) {
  var el = document.createElement("div");
  el.setAttribute(
    "style",
    "position:absolute;top:40%;left:20%;background-color:greenyellow;"
  );
  el.innerHTML = msg;
  setTimeout(function () {
    el.parentNode.removeChild(el);
  }, duration);
  document.body.appendChild(el);
}

// moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime <= 0) {
    clearMoole();
    clearInterval(timerId);
    clearInterval(moleTimerId);
    // setTimeout(() => {
    //   alert("GAME OVER! Your final score is" + result);
    // }, 2000);
    tempAlert("GAME OVER! Your final score is" + result, 5000);
    document.querySelector("button").disabled = false;
  }
}
