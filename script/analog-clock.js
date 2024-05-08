// make 3 clocks one time from las vegas, one from london and one for sweden
function setClockSweden() {
  const nowSweden = new Date();
  const hour = nowSweden.getHours() % 12;
  const minute = nowSweden.getMinutes();
  const second = nowSweden.getSeconds();

  const hourHand = document.getElementById("hour");
  const minuteHand = document.getElementById("minute");
  const secondHand = document.getElementById("second");

  const hourDegrees = hour * 30 + 0.5 * minute;
  const minuteDegrees = minute * 6 + 0.1 * second;
  const secondDegrees = second * 6;

  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}
setInterval(setClockSweden, 1000);
