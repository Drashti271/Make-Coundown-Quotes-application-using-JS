let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;

document.getElementById("start").onclick = function () {
    timer = true;
    runStopwatch();
};

document.getElementById("stop").onclick = function () {
    timer = false;
};

document.getElementById("reset").onclick = function () {
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    count = 0;
    displayTime();
};

function runStopwatch() {
    if (timer) {
        count++;

        if (count === 100) {
            sec++;
            count = 0;
        }

        if (sec === 60) {
            min++;
            sec = 0;
        }

        if (min === 60) {
            hr++;
            min = 0;
        }

        displayTime();

        setTimeout(runStopwatch, 10); 
    }
}

function displayTime() {
    document.getElementById("hr").textContent = (hr < 10 ? "0" : "") + hr;
    document.getElementById("min").textContent = (min < 10 ? "0" : "") + min;
    document.getElementById("sec").textContent = (sec < 10 ? "0" : "") + sec;
    document.getElementById("count").textContent = (count < 10 ? "0" : "") + count;
}
