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

