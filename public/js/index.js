// Get all the info-card elements
const infoCards = document.querySelectorAll('.info-card');

// Add an event listener to the window object to detect when the user scrolls
window.addEventListener('scroll', () => {
  // Loop through all the info-card elements
  infoCards.forEach(infoCard => {
    // Check if the top of the info-card element is visible in the viewport
    if (infoCard.getBoundingClientRect().top < window.innerHeight) {
      // Add the "float-up" CSS class to the info-card element
      infoCard.classList.add('float-up');
    }
  });
});

