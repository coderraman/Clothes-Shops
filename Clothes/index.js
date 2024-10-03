const slides = document.querySelectorAll('.slide');
console.log(slides);

var counter = 0;

// Position each slide to the right of the previous one
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`; // Changed from 50% to 100% for proper slide positioning
});

// Function to show the next picture
const nextPic = () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0; // Reset counter if it exceeds the number of slides
    }
    slideImage();
};

// Function to show the previous picture
const lastPic = () => {
    counter--;
    if(counter<0){
        counter = 0
    }
    slideImage();
};

// Function to move the slides based on the counter value
const slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
};


// Animation Code
// Function to handle the scroll event and trigger // Function to handle the scroll event and trigger animations
function revealSections() {
    const sections = document.querySelectorAll("section");
    const revealPoint = 150;
    
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      // Check if the section is in view
      if (sectionTop < windowHeight - revealPoint) {
        section.classList.add("fade-in");
      }
    });
  }
  
  // Run revealSections on page load and on scroll
  window.addEventListener("scroll", revealSections);
  window.addEventListener("load", revealSections); // To trigger on load
  
// Animation Code

// Toggle Button
// Get the toggle button and the menu items
const toggleButton = document.getElementById('menu-toggle');
const menuItems = document.getElementById('menu-items');
const body = document.body;

// Add an event listener to the button
toggleButton.addEventListener('click', () => {
  // Toggle the visibility of the menu
  body.classList.toggle('menu-open');

  // Add transition effect to the toggle button
  toggleButton.style.transition = "transform 0.3s ease-in-out";

  // Example: Change scale or rotation for a visual effect
  if (body.classList.contains('menu-open')) {
    toggleButton.style.transform = "rotate(90deg)"; // Example rotation when opened
  } else {
    toggleButton.style.transform = "rotate(0deg)"; // Reset rotation when closed
  }
});

