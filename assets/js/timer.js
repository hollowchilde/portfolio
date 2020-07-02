function funcion_topnav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
let ms = 0, s = 0, m = 0;
let timer

let stopwatchEl = document.querySelector('.stopwatch');
let lapsContainer = document.querySelector('.laps');

function start() {
    if (!timer) {
    timer = setInterval(run, 10);
    }
}
function pause(){
    stopTimer();
}

function run() {
    stopwatchEl.textContent = getTimer();
    ms++;
    if (ms==100) {
        ms = 0;
        s++;
    }
    if (s==60){
        s = 0;
        m++;
    }
}

function stop() {
    m=0;
    s=0;
    ms=0;
    stopTimer();
    stopwatchEl.textContent = getTimer();
}

function restart() {
    stop();
    start();
}

function lap() {
    if(timer){
        let li = document.createElement('li');
        li.textContent = getTimer();
        lapsContainer.appendChild(li);
    }
}
function stopTimer() {
    clearInterval(timer);
    timer = false;
}
function resetlaps(){
    lapsContainer.innerHTML = '';
}
function getTimer() {
    return (m<10?"0"+m:m) + ":" + (s<10?"0"+s:s) + ":" + (ms<10?"0"+ms:ms);
}