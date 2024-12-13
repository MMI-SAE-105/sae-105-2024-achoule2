document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuOverlay = document.querySelector('.menu-overlay');
    const closeMenu = document.querySelector('.close-menu');

    menuToggle.addEventListener('click', function() {
        menuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', function() {
        menuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const forecastItems = document.querySelectorAll('.forecast-item');
  
    forecastItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transition = 'opacity 0.3s ease';
  
      setTimeout(() => {
        item.style.opacity = '1';
      }, 200 * index);
    });
  });

  
  document.addEventListener('DOMContentLoaded', () => {
    const scheduleItems = document.querySelectorAll('.schedule-item');
  
    scheduleItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
        item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
      });
  
      item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = 'none';
      });
    });
  });
  


  
