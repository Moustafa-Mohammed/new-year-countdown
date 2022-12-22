function countDownToNewYear() {
  const now = new Date();
  const newYear = new Date(2023, 0, 1);

  const diff = newYear - now;

  const days = Math.floor(diff / 1000 / 3600 / 24);
  const hours = Math.floor((diff / 1000 / 3600) % 24);
  const mins = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("mins").innerText = mins;
  document.getElementById("seconds").innerText = seconds;
}
countDownToNewYear();
setInterval(() => {
  countDownToNewYear();
}, 1000);
