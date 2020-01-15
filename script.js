var carouselSlide = document.querySelector(".carousel-slide");
var carouselImages = document.querySelectorAll(".carousel-slide div");
var first = document.querySelectorAll(".carousel-slide div")[0]
// console.log(carouselImages);

var prev = document.querySelector("#prev");
var next = document.querySelector("#next");



var size = carouselImages[0].clientWidth + 30;

carouselSlide.style.transform = "translateX(" + -size + "px)";
var i = 0;
next.addEventListener("click", () => {
var alldivs = document.getElementById("cc");
console.log("all divs: ",alldivs)
if (i < 7 && i!==0) {
  i++
  console.log("i val: ", i)
}  else {
  i = 0;
}
elem = alldivs.removeChild(alldivs.getElementsByTagName('div')[i]);
console.log("elem: ",elem)
 cln = elem.cloneNode(true)

document.getElementById('cc').appendChild(cln)


carouselSlide.style.transition = "transform 0.6s ease-in-out";
carouselSlide.style.transform = "translateX(" + -size + "px)";

});

var j = carouselImages.length;
console.log(j)
prev.addEventListener("click", () => {
  var alldivs = document.getElementById("cc");
  console.log("all divs: ",alldivs)
  if (j > 0 ) {
    j--
    console.log("i val: ", j)
  }  else {
    j = carouselImages;
  }
  elem = alldivs.removeChild(alldivs.getElementsByTagName('div')[j]);
  console.log("elem: ",elem)
   cln = elem.cloneNode(true)
  
  document.getElementById('cc').insertBefore(cln)
  
  
  carouselSlide.style.transition = "transform 0.6s ease-in-out";
  carouselSlide.style.transform = "translateX(" + -size + "px)";
});
// prev.addEventListener("click", () => {
//   if (counter === 1) {
//     counter = images.length-1
    // return;
    // use return to make the slider stops when it reaches the limits
//   }
//   carouselSlide.style.transition = "transform 0.4s ease-in-out";
//   counter--;
//   console.log(counter);
//   carouselSlide.style.transform = "translateX(" + -size  + "px)";
// });

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
