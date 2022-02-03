const timerElement = document.getElementById("timer");
let minutes = 60;
let seconds = 0;

const finishTimer = (interval) => {
  clearInterval(interval);
};

export const resetTimer = () => {
	minutes = 60;
	seconds = 0;
	updateTimerElement(minutes, seconds);
}

const updateTimerElement = (minutes, seconds) => {
  // format seconds:
  seconds = seconds.toLocaleString("pt-BR", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  minutes = minutes.toLocaleString("pt-BR", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
  timerElement.innerText = `${minutes}:${seconds}`;
};

export const startTimer = () => {
  return new Promise(function (resolve) {
    const timerInterval = setInterval(() => {
      if (seconds === 0 && minutes !== 0) {
        seconds = 59;
        minutes--;
        updateTimerElement(minutes, seconds);
      } else if (seconds <= 0 && minutes <= 0) {
        finishTimer(timerInterval);
        resolve(true);
      } else {
        seconds--;
        updateTimerElement(minutes, seconds);
      }
    }, 1);
  });
};

export default timer;

