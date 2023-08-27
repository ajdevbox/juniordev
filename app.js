const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let launchDate = new Date("Oct 24, 2023 00:00:00").getTime();

let tracking = setInterval(function () {
  let current = new Date().getTime();
  let timeleft = launchDate - current;

  let day = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hour = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let mintue = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let second = Math.floor((timeleft % (1000 * 60)) / 1000);

  days.innerHTML = day;
  hours.innerHTML = hour;
  minutes.innerHTML = mintue;
  seconds.innerHTML = second;
}, 1000);
