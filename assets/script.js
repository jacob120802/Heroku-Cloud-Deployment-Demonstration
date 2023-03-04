// DOM Elements
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});

// Code to scroll smoothly to the top when clicking on the "Back to top" button
const backToTopButton = document.querySelector('#back-to-top');

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// Toggle Nav
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

// Smooth Scrolling
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = link.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Scroll Reveal
window.addEventListener("scroll", () => {
  const revealItems = document.querySelectorAll(".reveal");
  for (let i = 0; i < revealItems.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = revealItems[i].getBoundingClientRect().top;
    const revealPoint = 50;
    if (revealTop < windowHeight - revealPoint) {
      revealItems[i].classList.add("reveal_active");
    }
  }
});
const banner = document.querySelector('.banner');
const about = document.querySelector('.about');
const courses = document.querySelector('.courses');
const admissions = document.querySelector('.admissions');
const contact = document.querySelector('.contact');

window.addEventListener('scroll', () => {
  const distance = window.scrollY;

  banner.style.transform = `translateY(${distance * 0.2}px)`;
  about.style.transform = `translateY(${distance * -0.1}px)`;
  courses.style.transform = `translateY(${distance * 0.05}px)`;
  admissions.style.transform = `translateY(${distance * -0.1}px)`;
  contact.style.transform = `translateY(${distance * 0.05}px)`;
});
const burger = document.querySelector('.burger');

const navLinksLi = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active');

  navLinksLi.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
  });

  burger.classList.toggle('toggle');
});
