const slider = document.getElementById("slider");
const images = slider.getElementsByTagName("img");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex = 0;

function showImage(index) {
  for (let i = 0; i < images.length; i++) {
    images[i].style.transform = "translateX(100%)";
    images[i].style.opacity = 0;
  }
  images[index].style.transform = "translateX(0)";
  images[index].style.opacity = 1;
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  } else if (event.key === "ArrowRight") {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
});

function autoChangeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Set a 5-second interval for automatic image change
const intervalId = setInterval(autoChangeImage, 5000);

// Show the first image initially
showImage(currentIndex);