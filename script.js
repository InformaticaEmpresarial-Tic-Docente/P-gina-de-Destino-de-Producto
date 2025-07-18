// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
  const navBar = document.getElementById('nav-bar');
  navBar.classList.toggle('active');
  
  // Change icon
  const icon = this.querySelector('i');
  if (navBar.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Close mobile menu if open
      const navBar = document.getElementById('nav-bar');
      if (navBar.classList.contains('active')) {
        navBar.classList.remove('active');
        const menuBtn = document.querySelector('.mobile-menu-btn i');
        menuBtn.classList.remove('fa-times');
        menuBtn.classList.add('fa-bars');
      }
      
      // Scroll to target
      const headerHeight = document.getElementById('header').offsetHeight;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Sticky header on scroll
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if (window.scrollY > 100) {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

// Form submission
document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  
  // Here you would typically send the data to a server
  console.log('Form submitted with email:', email);
  
  // Show success message
  alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
  this.reset();
});