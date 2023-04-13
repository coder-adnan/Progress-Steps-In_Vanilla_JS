const progress = document.getElementById("progress");
// const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;
next.addEventListener("click", () => {
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  currentActive++;
  update();
});

prev.addEventListener("click", () => {
  currentActive--;

  currentActive < 1 ? (currentActive = 1) : null;

  console.log(currentActive);
  update();
});

const update = () => {
  circles.forEach((circle, index) => {
    index < currentActive
      ? circle.classList.add("active")
      : circle.classList.remove("active");
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
};
