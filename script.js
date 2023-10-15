var timer;
var hours = 0;
var minutes = 0;
var seconds = 0;

function startTimer() {
    timer = setInterval(function() {
        seconds++;

        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }

        if (minutes >= 60) {
            hours++;
            minutes = 0;
        }

        displayTime();
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTime();
}

function stopTimer() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTime();
}

function displayTime() {
    var hoursSpan = document.getElementById("hours");
    var minutesSpan = document.getElementById("minutes");
    var secondsSpan = document.getElementById("seconds");

    hoursSpan.textContent = (hours < 10 ? "0" + hours : hours);
    minutesSpan.textContent = (minutes < 10 ? "0" + minutes : minutes);
    secondsSpan.textContent = (seconds < 10 ? "0" + seconds : seconds);
}