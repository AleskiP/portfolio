document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 1000, once: true });

  emailjs.init("BnqpCzJNzeiQRTgbI");

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const serviceID = "service_portfolio";
    const templateID = "template_portfolio";

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        document.getElementById("form-message").textContent = "Message envoyé avec succès ! ✅";
        document.getElementById("form-message").style.color = "green";
        this.reset();
      })
      .catch((error) => {
        document.getElementById("form-message").textContent = "Erreur lors de l'envoi ❌";
        document.getElementById("form-message").style.color = "red";
        console.error("Erreur EmailJS :", error);
      });
  });

  const sections = document.querySelectorAll(".section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 150;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {

  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": { "value": "#ffffff" },
      "shape": {
        "type": "circle",
        "stroke": { "width": 0, "color": "#000000" },
        "polygon": { "nb_sides": 5 }
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": { "enable": true, "mode": "grab" },
        "onclick": { "enable": false, "mode": "repulse" },
        "resize": true
      }
    },
    "retina_detect": true
  });
});