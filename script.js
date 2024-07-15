document.getElementById('hamburger-menu').addEventListener('click', function() {
    const menu = document.querySelector('nav .menu');
    menu.classList.toggle('active');
});

AOS.init({
    duration: 1000,
    once: true
});
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav .menu ul li a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (pageYOffset >= sectionTop - sectionHeight / 2) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});
