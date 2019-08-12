// TOP MENU
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("sticky-menu");

// Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 50) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



// SIDE MENU
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
    // Opacity for background images
    let bg = document.getElementsByClassName('bg-img')
    for (let i = 0; i < bg.length; i++){
      bg[i].style.opacity = "0.65"
    }
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
  function closeNav() {
    document.getElementById("side-menu").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
    document.body.style.backgroundColor = "white";
    // Remove opacity for background images
    let bg = document.getElementsByClassName('bg-img')
    for (let i = 0; i < bg.length; i++){
      bg[i].style.opacity = "1"
    }
  }