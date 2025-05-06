const text = "mobbing pågår!";
const correctAnswer = "Jeg mobber ikke!";
const container = document.getElementById("container");
const fanfare = document.getElementById("fanfare");
let interval;
let scrolling = true;

function startScroll() {
  interval = setInterval(() => {
    const p = document.createElement("p");
    p.textContent = text;
    p.classList.add("scroll-text"); 
    container.appendChild(p);
    if (scrolling) window.scrollTo(0, document.body.scrollHeight);
  }, 300);
}

function stopScroll() {
  clearInterval(interval);
  fanfare.play();
  container.id = "fade"; 
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const answer = prompt("Erklæring:");
    if (answer === correctAnswer) {
      stopScroll();
    }
  }
});

startScroll();
