const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

// Target: July 10, 2026 at midnight (local time)
const targetDate = new Date(2026, 6, 10, 0, 0, 0); // month is 0-indexed: 6 = July

const timeFunction = setInterval(() => {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    clearInterval(timeFunction);
    days.textContent = "00";
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
    return;
  }

  const secValue = Math.floor((diff / 1000) % 60);
  const minValue = Math.floor((diff / 1000 / 60) % 60);
  const hourValue = Math.floor((diff / 1000 / 60 / 60) % 24);
  const dayValue = Math.floor(diff / 1000 / 60 / 60 / 24);

  seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
  minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
  hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
  days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
}, 1000);