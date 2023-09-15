
var workTime = 25 * 60; // 25 minutes in seconds
		var breakTime = 5 * 60; // 5 minutes in seconds
		var timerId = null;
		var isWorking = true;
		
		function startTimer() {
			timerId = setInterval(countdown, 1000);
		}
		
		function pauseTimer() {
			clearInterval(timerId);
			timerId = null;
		}
		
		function resetTimer() {
			pauseTimer();
			if (isWorking) {
				workTime = 25 * 60;
				updateTimer(workTime);
			} else {
				breakTime = 5 * 60;
				updateTimer(breakTime);
			}
		}
		
		function countdown() {
			if (isWorking) {
				workTime=workTime-100;
				if (workTime == 0) {
					pauseTimer();
					alert("Time's up! Take a break.");
					isWorking = false;
					updateTimer(breakTime);
					startTimer();
				} else {
					updateTimer(workTime);
				}
			} else {
				breakTime--;
				if (breakTime == 0) {
					pauseTimer();
					alert("Break's over! Time to work.");
					isWorking = true;
					updateTimer(workTime);
					startTimer();
				} else {
					updateTimer(breakTime);
				}
			}
		}
		
		function updateTimer(timeLeft) {
			var minutes = Math.floor(timeLeft / 60);
			var seconds = timeLeft % 60;
			document.getElementById("timer").innerHTML = padZero(minutes) + ":" + padZero(seconds);
		}
		
		function padZero(num) {
			if (num < 10) {
				return "0" + num;
			} else {
				return num;
			}
		}









		