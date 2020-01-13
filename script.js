image = document.getElementsByClassName("carousel-items")[0].getElementsByTagName("img")
var i = 0;
var images = [];

for (i= 0; i<image.length; i++){
    images[i] = image[i].src;
}

function next(){
    
    window.clicks =window.clicks+1;
    console.log(window.clicks)
    image[0].src = images[i];
    if (i <= images.length - 1) {
     i++   
    } else {
    i = 0
    }
}
function next1(){
    image[1].src = images[i];
    if (i <= images.length - 1) {
     i++   
    } else {
    i = 0
    }
}
function next2(){
    image[2].src = images[i];
    if (i <= images.length - 1) {
     i++   
    } else {
    i = 0
    }
}

function prev(){
    image[0].src = images[i];
    if (i <= images.length - 1) {
     i++   
    } else {
    i = 0
    }
}
function prev1(){
    image[1].src = images[i];
    if (i <= images.length - 1) {
     i++   
    } else {
    i = 0
    console.log(window.clicks)

    }
}
function prev2(){
    image[2].src = images[i];
    if (i <= images.length - 1) {
     i++   
    } else {
    i = 0
    }
}

console.log(window.clicks)
