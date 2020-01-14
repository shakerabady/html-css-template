var carouselSlide = document.querySelector(".carousel-slide");
var carouselImages = document.querySelectorAll(".carousel-slide div");
var first = document.querySelectorAll(".carousel-slide div")[0]
console.log(carouselImages);

var prev = document.querySelector("#prev");
var next = document.querySelector("#next");


// the size of the image (width) + the margin
var size = carouselImages[0].clientWidth + 30;

// the equation for the single item to move on the x-axis
carouselSlide.style.transform = "translateX(" + -size + "px)";

// what happens when next is clicked
next.addEventListener("click", () => {
  
  var shaker = document.getElementById("cc");
  var pc = shaker.removeChild(first)
 var  y = shaker.appendChild.lastChild
 console.log(y)
  

  carouselSlide.style.transition = "transform 0.6s ease-in-out";
  // counter++;
  // console.log(counter);
  carouselSlide.style.transform = "translateX(" + -size + "px)";
});
// what happens when prev function is triggered
prev.addEventListener("click", () => {
  if (counter === 1) {
    counter = images.length-1
    // return;
    // use return to make the slider stops when it reaches the limits
  }
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  console.log(counter);
  carouselSlide.style.transform = "translateX(" + -size  + "px)";
});

// in case wanted the slider to start over once it reaches the limits

// carouselSlide.addEventListener("transitionend", () => {
//   if (carouselImages[counter].id === "last") {
//     // carouselSlide.style.transition = "none";
//     counter = carouselImages.length - 3;
//     carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
//   }
//   if (carouselImages[counter].id === "first") {
//     // carouselSlide.style.transition = "none";
//     counter = carouselImages.length - counter;
//     console.log("len: ", counter);
//     carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
//   }
// });
