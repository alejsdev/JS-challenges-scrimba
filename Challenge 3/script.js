const slides = document.getElementsByClassName("carousel-item");
let slidePosition = 0;
const totalSlides = slides.length;

document
  .getElementById("carousel-button-next")
  .addEventListener("click", moveNextSlide);
document
  .getElementById("carousel-button-prev")
  .addEventListener("click", movePrevSlide);

function moveNextSlide() {
  hideAllSlides();
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}

function movePrevSlide() {
  hideAllSlides();
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  slides[slidePosition].classList.add("carousel-item-visible");
}

function hideAllSlides() {
  for (let slide of slides) {
    slide.classList.remove("carousel-item-visible");
    slide.classList.add("carousel-item-hidden");
  }
}
