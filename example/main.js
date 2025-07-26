// Toggle dark mode
const themeToggle = document.getElementById("toggle-theme");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});

// Hamburger menu
const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Back to top button
const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Load projects dynamically
const projects = [
  {
    title: "AutoScript CLI",
    description: "A command-line tool to automate repetitive tasks written in Python."
  },
  {
    title: "Dev Portfolio Site",
    description: "The personal website you're viewing now. Built using vanilla HTML, CSS, and JS."
  },
  {
    title: "Flask Blog API",
    description: "A backend API for a blog system with token auth and SQLite integration."
  }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `<h4>${project.title}</h4><p>${project.description}</p>`;
  projectList.appendChild(card);
});

// Simple contact form handler
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  alert(`Thank you, ${data.name}! Your message has been sent.`);
  contactForm.reset();
});
// Initialize Barba
barba.init({
  transitions: [
    {
      name: 'fade-transition',

      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
          duration: 0.6
        });
      },

      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
          duration: 0.6
        });
      }
    }
  ]
});
document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // Optional: Add animation class
    target.classList.add('animate-scroll');
    setTimeout(() => {
      target.classList.remove('animate-scroll');
    }, 1000); // match animation duration
  });
});
const toggleTheme = document.getElementById("toggle-theme");

toggleTheme.addEventListener("change", () => {
  document.body.classList.toggle("dark-theme");

  // Save preference
  if (document.body.classList.contains("dark-theme")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Apply saved theme on load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
    toggleTheme.checked = true;
  }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Optional fade-in animation when scrolled
      target.classList.add('animate-scroll');
      setTimeout(() => {
        target.classList.remove('animate-scroll');
      }, 1000); // animation duration
    }
  });
});

