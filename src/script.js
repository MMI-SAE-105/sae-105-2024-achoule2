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



  
