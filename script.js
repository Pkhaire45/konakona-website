// Select filter buttons and gallery items
const filterButtons = document.querySelectorAll('.filter-btn');
const filterItems = document.querySelectorAll('.filter-item');

// Add event listeners to filter buttons
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons and add it to the clicked button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Get filter type
    const filterType = button.getAttribute('data-filter');

    // Show/hide images based on filter type
    filterItems.forEach(item => {
      if (filterType === 'all' || item.classList.contains(filterType)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
});

// Default to Residential filter
document.querySelector('[data-filter="residential"]').click();








// Recent work slider 
const carousel = document.querySelector('.carousel');
let scrollPosition = 0;

function slideLeft() {
  const cardWidth = document.querySelector('.card').offsetWidth + 15; // card width + gap
  scrollPosition = Math.max(scrollPosition - cardWidth, 0); // prevent overflow on left
  carousel.style.transform = `translateX(-${scrollPosition}px)`;
}

function slideRight() {
  const cardWidth = document.querySelector('.card').offsetWidth + 15; // card width + gap
  const maxScroll = (carousel.scrollWidth - carousel.offsetWidth);
  scrollPosition = Math.min(scrollPosition + cardWidth, maxScroll); // prevent overflow on right
  carousel.style.transform = `translateX(-${scrollPosition}px)`;
}
// Get elements
const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopup");

// Automatically show the popup after a delay
window.addEventListener("load", () => {
  setTimeout(() => {
    popup.style.display = "flex";
  }, 1000); // Delay of 1 second (1000 ms) after page load
});

// Close popup when the close button is clicked
closePopupBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

// Close popup when clicking outside the content
window.addEventListener("click", (event) => {
  if (event.target === popup) {
    popup.style.display = "none";
  }
});
