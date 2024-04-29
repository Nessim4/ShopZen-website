// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}
function toggleForm() {
    var loginForm = document.getElementById("login-form");
    var signupForm = document.getElementById("signup-form");

    if (loginForm.style.display === "none") {
      loginForm.style.display = "block";
      signupForm.style.display = "none";
    } else {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
    }
  }
  var slideIndex = 0;
showSlides();

function showSlides() {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active"); // Remove active class from all slides
  }
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1;
  }
  slides[slideIndex - 1].classList.add("active"); // Add active class to current slide
  setTimeout(showSlides, 8000); // Change image every 2 seconds
}
// Function to show the previous slide
function prevSlide() {
  var slides = document.getElementsByClassName("slide");
  slideIndex--;
  if (slideIndex < 1) {
      slideIndex = slides.length; // Set index to last slide if current index is 0
  }
  showSlide(slideIndex);
}

// Function to show the next slide
function nextSlide() {
  var slides = document.getElementsByClassName("slide");
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1; // Set index to first slide if current index is last slide
  }
  showSlide(slideIndex);
}

// Function to show a specific slide
function showSlide(index) {
  var slides = document.getElementsByClassName("slide");
  for (var i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active"); // Remove active class from all slides
  }
  slides[index - 1].classList.add("active"); // Add active class to specified slide
}
// Add event listeners to remove item links
document.querySelectorAll('.remove-item').forEach(item => {
  item.addEventListener('click', event => {
      // Get the parent row of the clicked remove link
      let row = event.target.closest('tr');
      // Remove the row from the table
      row.remove();
  });
});
// Add event listener to remove items when "Remove" link is clicked
// Get the modal
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("checkoutButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
