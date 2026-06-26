const btn = document.getElementById("btn-start");
const screen1 = document.getElementById("screen-1");
const screen2 = document.getElementById("screen-2");
const screen3 = document.getElementById("screen-3");
const audio = new Audio("/media/music/musical-accompaniment.mp3");

btn.addEventListener("click", () => {
  audio.play();

  screen1.style.transition = "opacity 1s ease";
  screen1.style.opacity = "0";

  setTimeout(() => {
    screen1.style.display = "none";
    screen2.style.display = "block";
    screen3.style.display = "flex";
    setTimeout(() => {
      screen2.style.opacity = "1";
    }, 50);
  }, 1000);
});

const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      // чтобы анимация была только один раз, раскомментируй строку ниже:
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const hiddenElements = document.querySelectorAll(".scroll-reveal");
hiddenElements.forEach((el) => observer.observe(el));
