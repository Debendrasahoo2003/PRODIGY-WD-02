let startTime, updatedTime, difference;
let tInterval;
let running = false;
const display = document.querySelector('.display');
const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');

function startStop() {
    if (!running) {
        running = true;
        startTime = new Date().getTime();
        tInterval = setInterval(updateTime, 1);
        startStopBtn.textContent = 'Stop';
        startStopBtn.style.backgroundColor = '#f44336';
    } else {
        running = false;
        clearInterval(tInterval);
        startStopBtn.textContent = 'Start';
        startStopBtn.style.backgroundColor = '#4CAF50';
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    display.textContent = '00:00:00';
    startStopBtn.textContent = 'Start';
    startStopBtn.style.backgroundColor = '#4CAF50';
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;
    
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    
    display.textContent = hours + ':' + minutes + ':' + seconds;
}

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
