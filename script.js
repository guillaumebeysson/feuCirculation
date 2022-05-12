/////////////////////Feu gauche
function startTrafficSignalGauche() {
  let green = document.getElementById("vertGauche");
  let red = document.getElementById("rougeGauche");
  let yellow = document.getElementById("orangeGauche");

  console.log(green);

  green.style.opacity = 1;
  setTimeout(function () {
    green.style.opacity = 0.1;
    red.style.opacity = 1;
    yellow.style.opacity = 0.1;
  }, 0000);

  setTimeout(function () {
    green.style.opacity = 1;
    red.style.opacity = 0.1;
    yellow.style.opacity = 0.1;
  }, 13000);

  setTimeout(function () {
    green.style.opacity = 0.1;
    red.style.opacity = 0.1;
    yellow.style.opacity = 1;
  }, 27000);
}

let timerGauche = setInterval(function () {
  startTrafficSignalGauche();
}, 30000);

startTrafficSignalGauche();

////////////////////////Feu droit
function startTrafficSignalDroit() {
  let green = document.getElementById("vertDroit");
  let red = document.getElementById("rougeDroit");
  let yellow = document.getElementById("orangeDroit");

  console.log(green);

  green.style.opacity = 1;
  setTimeout(function () {
    green.style.opacity = 0.1;
    red.style.opacity = 1;
    yellow.style.opacity = 0.1;
  }, 0000);

  setTimeout(function () {
    green.style.opacity = 1;
    red.style.opacity = 0.1;
    yellow.style.opacity = 0.1;
  }, 13000);

  setTimeout(function () {
    green.style.opacity = 0.1;
    red.style.opacity = 0.1;
    yellow.style.opacity = 1;
  }, 27000);
}

let timerDroit = setInterval(function () {
  startTrafficSignalDroit();
}, 30000);

startTrafficSignalDroit();

//carLeft

let carLeft = document.getElementById("carLeft");

function moveCarLeft() {
  setTimeout(function () {
    carLeft.style.top = "3rem";
    let timeleftGauche = 13;
    let downloadTimerGauche = setInterval(function () {
      timeleftGauche--;
      document.getElementById("countdowntimerGauche").textContent =
        timeleftGauche;
      if (timeleftGauche <= 0) clearInterval(downloadTimerGauche);
    }, 1000);
  }, 0000);

  setTimeout(function () {
    carLeft.style.top = "120%";
  }, 13000);

  setTimeout(function () {
    carLeft.style.display = "none";
  }, 21000);

  setTimeout(function () {
    carLeft.style.display = "block";
    carLeft.style.top = "-300px";
  }, 23000);
}
let timerCarLeft = setInterval(function () {
  moveCarLeft();
}, 30000);
moveCarLeft();

//carRight

let carRight = document.getElementById("carRight");
let sonGauche = document.getElementById("sonGauche");

function moveCarRight() {
  setTimeout(function () {
    carRight.style.bottom = "3rem";
    let timeleftDroit = 13;
    let downloadTimerDroit = setInterval(function () {
      timeleftDroit--;
      document.getElementById("countdowntimerDroit").textContent =
        timeleftDroit;
      console.log(timeleftDroit);
      if (timeleftDroit <= 0) clearInterval(downloadTimerDroit);
    }, 1000);
  }, 0000);

  setTimeout(function () {
    sonGauche.loop = true;
    sonGauche.autoplay = true;
    carRight.style.bottom = "120%";
  }, 13000);

  setTimeout(function () {
    carRight.style.display = "none";
  }, 21000);

  setTimeout(function () {
    carRight.style.display = "block";
    carRight.style.bottom = "-300px";
  }, 23000);
}
let timerCarRight = setInterval(function () {
  moveCarRight();
}, 30000);
moveCarRight();
