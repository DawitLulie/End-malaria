// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Form Validation for Order Form
document.addEventListener('DOMContentLoaded', () => {
  const orderForm = document.querySelector('#orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', function (e) {
      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      if (!name || !email) {
        e.preventDefault();
        alert('Please fill in all required fields.');
      }
    });
  }
});

// Dynamic Content Update on FAQ Page
const faqLinks = document.querySelectorAll('.faq-link');
faqLinks.forEach(link => {
  link.addEventListener('click', function () {
    const answer = this.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});
