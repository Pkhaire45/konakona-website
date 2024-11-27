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

document.addEventListener('DOMContentLoaded', function () {
  // Initialize EmailJS with your public key
  emailjs.init('GKF97LA-Z70XR3EtC');  // Replace 'YOUR_PUBLIC_KEY' with your actual public key

  // Now you can attach event listeners or other logic
  document.getElementById('contact-form1').addEventListener('submit', function(event) {
      event.preventDefault();  // Prevent form from reloading the page

      const formData = new FormData(event.target);
      const fullName = formData.get('full-name');
      const email = formData.get('email');
      const message = formData.get('message');

      console.log('Form Data:', { fullName, email, message });
      
      const templateParams = {
          full_name: fullName,
          email: email,
          message: message
      };

      // Send the email using EmailJS
      emailjs.send('service_blhljpr', 'template_szx51pe', templateParams)
          .then(function(response) {
              console.log('Success:', response);
              alert('Your message has been sent successfully!');
              document.getElementById('contact-form1').reset();  // Reset the form
          })
          .catch(function(error) {
              console.log('Error:', error);
              alert('Something went wrong. Please try again later.');
          });
  });
});

