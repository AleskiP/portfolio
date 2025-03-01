// Ligne 1
AOS.init({
    duration: 1000,
    once: true
  });
  
  // Animation personnalisée au chargement
  window.addEventListener('load', function () {
    document.body.classList.add('loaded');
  });
  