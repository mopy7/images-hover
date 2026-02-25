const image = document.querySelector("#image");

const images = [
  "./images/1.avif",
  "./images/2.jpg",
  "./images/3.jpg",
  "./images/4.jpg",
];

let currentIndex = 0;

image.addEventListener("mouseover", function () {
  currentIndex++;

  if (currentIndex >= images.length) currentIndex = 0;

  this.src = images[currentIndex];
});

// let outIndex = 3;
image.addEventListener("mouseout", function () {
  currentIndex++;

  if (currentIndex >= images.length) currentIndex = 0;

  this.src = images[currentIndex];
});

// image.addEventListener("mouseout", function (event) {
//   this.src = "./images/3.jpg";
// })
