// ==========================================
// CURRENT YEAR
// ==========================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}


// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const icon = menuToggle.querySelector("i");

  if (navLinks.classList.contains("active")) {
    icon.className = "fa-solid fa-xmark";
  } else {
    icon.className = "fa-solid fa-bars";
  }
});


document.querySelectorAll(".nav-links a").forEach(link => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("active");

    const icon = menuToggle.querySelector("i");
    icon.className = "fa-solid fa-bars";

  });

});


// ==========================================
// DARK / LIGHT MODE
// ==========================================

const themeToggle = document.getElementById("themeToggle");
const html = document.documentElement;

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme) {
  html.setAttribute("data-theme", savedTheme);
}

updateThemeIcon();


themeToggle.addEventListener("click", () => {

  const currentTheme =
    html.getAttribute("data-theme");

  const newTheme =
    currentTheme === "dark"
      ? "light"
      : "dark";

  html.setAttribute(
    "data-theme",
    newTheme
  );

  localStorage.setItem(
    "portfolio-theme",
    newTheme
  );

  updateThemeIcon();

});


function updateThemeIcon() {

  const theme =
    html.getAttribute("data-theme");

  const icon =
    themeToggle.querySelector("i");

  if (theme === "dark") {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }

}


// ==========================================
// PROJECT FILTERING
// ==========================================

const filterButtons =
  document.querySelectorAll(".filter-btn");

const projectCards =
  document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    const filter =
      button.dataset.filter;


    projectCards.forEach(card => {

      const categories =
        card.dataset.category
          .split(" ");

      if (
        filter === "all" ||
        categories.includes(filter)
      ) {

        card.classList.remove("hidden");

      } else {

        card.classList.add("hidden");

      }

    });

  });

});


// ==========================================
// SCROLL REVEAL
// ==========================================

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },

    {
      threshold: 0.12
    }

  );


revealElements.forEach(element => {
  revealObserver.observe(element);
});


// ==========================================
// TERMINAL TYPING ANIMATION
// ==========================================

const typedText =
  document.getElementById("typedText");

const terminalMessages = [
  "building useful models...",
  "turning data into insights...",
  "shipping reproducible pipelines...",
  "exploring intelligent systems..."
];

let messageIndex = 0;
let charIndex = 0;
let deleting = false;


function typeTerminal() {

  const currentMessage =
    terminalMessages[messageIndex];

  if (!deleting) {

    typedText.textContent =
      currentMessage.substring(
        0,
        charIndex + 1
      );

    charIndex++;

    if (
      charIndex ===
      currentMessage.length
    ) {

      deleting = true;

      setTimeout(
        typeTerminal,
        1600
      );

      return;
    }

  } else {

    typedText.textContent =
      currentMessage.substring(
        0,
        charIndex - 1
      );

    charIndex--;

    if (charIndex === 0) {

      deleting = false;

      messageIndex =
        (messageIndex + 1) %
        terminalMessages.length;

    }

  }

  const speed =
    deleting ? 35 : 65;

  setTimeout(
    typeTerminal,
    speed
  );

}


setTimeout(
  typeTerminal,
  900
);


// ==========================================
// ACTIVE NAV LINK WHILE SCROLLING
// ==========================================

const sections =
  document.querySelectorAll(
    "main section[id]"
  );

const navAnchors =
  document.querySelectorAll(
    ".nav-links a"
  );


window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    if (
      window.scrollY >=
      sectionTop
    ) {

      currentSection =
        section.getAttribute("id");

    }

  });


  navAnchors.forEach(anchor => {

    anchor.classList.remove(
      "active-link"
    );

    if (
      anchor.getAttribute("href") ===
      `#${currentSection}`
    ) {

      anchor.classList.add(
        "active-link"
      );

    }

  });

});
