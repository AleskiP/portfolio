document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 1000, once: true });

  emailjs.init("BnqpCzJNzeiQRTgbI"); // Remplace avec ta Public Key

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const serviceID = "service_portfolio"; // Remplace avec ton Service ID
    const templateID = "template_portfolio"; // Remplace avec ton Template ID

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

  // Sélection automatique de la section active
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
