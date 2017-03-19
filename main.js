var time = 0;
var currentTime = document.getElementById("currentTime");
var num = 0;
var pastTimes = "";
document.getElementById("startStopBtn").addEventListener('click', function() {
    num++;
    var interval = setInterval(function() {
        if(num == 1) {
            time = time + 0.01;
        }
        else if(num == 2) {
            num = 0;
            clearInterval(interval);   
        }
        currentTime.innerText = time.toFixed(2);
    }, 1);
});

document.getElementById("resetBtn").addEventListener('click', function() {
    time = 0;
    pastTimes = "";
    document.getElementById("pastTimes").innerHTML = pastTimes;
});

document.getElementById("recordTimeBtn").addEventListener("click", function() {
    pastTimes += currentTime.innerText + "<br>";
    document.getElementById("pastTimes").innerHTML = pastTimes;
});