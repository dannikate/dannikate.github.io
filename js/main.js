var scrollButton = document.getElementById("scrollButton");

window.onscroll = function() { 
    scrollFunction(); 
}

// when the user scrolls down 20px from the top of the document, show the button 
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

// when the user clicks on the button, scroll to the top of the document 
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* 
window.onload = function() {
    document.getElementsById("fade-in").style.opacity = 1;
} */

var slide = document.getElementById("slide");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");

/* 
let x = 0;
upArrow.onclick = function() {
    if ( x > "-900") {
        x = x - 300; //because height is 300px
    slide.style.top = x + "px";
    }
}
downArrow.onclick = function() {
    if ( x < 0) {
        x = x + 300; //because height is 300px
    slide.style.top = x + "px";
    }
}
*/

let x = 0;
upArrow.onclick = function() { 
    slideUp();
} 
downArrow.onclick = function() {
    slideDown();
}

function slideUp() {
    if ( x < 0) {
        x = x + 275; //because height is 300px
    slide.style.top = x + "px";
    }
}

function slideDown() {
    if ( x > "-1100") {
        x = x - 275; //because height is 300px
    slide.style.top = x + "px";
    }
}