import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [workTime, setWorkTime] = useState(25 * 60); // 25 minutes in seconds
  const [breakTime, setBreakTime] = useState(5 * 60); // 5 minutes in seconds
  const [timerId, setTimerId] = useState(null);
  const [isWorking, setIsWorking] = useState(true);

  useEffect(() => {
    if (isWorking) {
      document.title = `Pomodoro Timer - ${formatTime(workTime)}`;
    } else {
      document.title = `Break Timer - ${formatTime(breakTime)}`;
    }
  }, [workTime, breakTime, isWorking]);

  const startTimer = () => {
    if (timerId === null) {
      setTimerId(setInterval(countdown, 1000));
    }
  };

  const pauseTimer = () => {
    clearInterval(timerId);
    setTimerId(null);
  };

  const resetTimer = () => {
    pauseTimer();
    if (isWorking) {
      setWorkTime(25 * 60);
    } else {
      setBreakTime(5 * 60);
    }
  };

  const countdown = () => {
    if (isWorking) {
      setWorkTime((prevWorkTime) => {
        if (prevWorkTime <= 0) {
          pauseTimer();
          alert("Time's up! Take a break.");
          setIsWorking(false);
          startTimer();
          return breakTime;
        }
        return prevWorkTime - 1;
      });
    } else {
      setBreakTime((prevBreakTime) => {
        if (prevBreakTime <= 0) {
          pauseTimer();
          alert("Break's over! Time to work.");
          setIsWorking(true);
          startTimer();
          return workTime;
        }
        return prevBreakTime - 1;
      });
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${padZero(minutes)}:${padZero(seconds)}`;
  };

  const padZero = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className="container mx-auto w-25 mt-5">
      <h1>Pomodoro Timer</h1>
      <div id="timer">{isWorking ? formatTime(workTime) : formatTime(breakTime)}</div>
      <button onClick={startTimer} className="btn btn-success">
        Start
      </button>
      <button onClick={pauseTimer} className="btn btn-warning">
        Pause
      </button>
      <button onClick={resetTimer} className="btn btn-danger">
        Reset
      </button>
    </div>
  );
};

export default PomodoroTimer;
