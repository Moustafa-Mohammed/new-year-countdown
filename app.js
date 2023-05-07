function countDownToNewYear() {
  let currentYear = new Date();
  document.querySelector('#current-year').textContent =
    currentYear.getFullYear();

  let newYear = currentYear.getFullYear() + 1;
  document.querySelector('#new-year').textContent = newYear;

  const diff = new Date(newYear, 0, 1) - currentYear;

  const days = Math.floor(diff / 1000 / 3600 / 24);
  const hours = Math.floor((diff / 1000 / 3600) % 24);
  const mins = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').innerText = diff > 0 ? days : 0;
  document.getElementById('hours').innerText = diff > 0 ? hours : 0;
  document.getElementById('mins').innerText = diff > 0 ? mins : 0;
  document.getElementById('seconds').innerText = diff > 0 ? seconds : 0;
}

countDownToNewYear();

setInterval(() => {
  countDownToNewYear();
}, 1000);
