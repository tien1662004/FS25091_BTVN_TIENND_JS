const clock = document.getElementById("clock");
function showTime() {
  const time = new Date();
  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();

  clock.innerHTML = h + ":" + m + ":" + s;
}
setInterval(showTime, 1000);
