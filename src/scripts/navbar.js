export function initNavbar() {
    const navbar = document.querySelector('nav');
    let lastScroll = 0;
  
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll > 50) {
        navbar.classList.add('shadow-diffused', 'bg-surface/90', 'backdrop-blur-md');
      } else {
        navbar.classList.remove('shadow-diffused', 'bg-surface/90', 'backdrop-blur-md');
      }
      lastScroll = currentScroll;
    });
  }