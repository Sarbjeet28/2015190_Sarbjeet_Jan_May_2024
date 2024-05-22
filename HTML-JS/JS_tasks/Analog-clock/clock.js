function updateClock() {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  const hourDegrees = (hours % 12) * 30 + minutes * 0.5;
  const minuteDegrees = minutes * 6;
  const secondDegrees = seconds * 6;

  const hourNeedle = document.querySelector('.hour-needle');
  const minuteNeedle = document.querySelector('.minute-needle');
  const secondNeedle = document.querySelector('.second-needle');

  hourNeedle.style.transform = `rotate(${hourDegrees}deg)`;
  minuteNeedle.style.transform = `rotate(${minuteDegrees}deg)`;
  secondNeedle.style.transform = `rotate(${secondDegrees}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
