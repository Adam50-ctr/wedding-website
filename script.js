"use strict";
// HTML elemek
const galleryTrack = document.querySelector(".gallery__images");
const galleryItems = document.querySelectorAll(".gallery__images img");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const navbar = document.querySelector(".navbar");
const rightSideMenu = document.querySelector(".right-side");
// Kezdő index
let currentIndex = 0;
let galleryLength = 5;

// Frissíti a galéria pozícióját
function updateGallery() {
  const galleryWidth = galleryTrack.scrollWidth / galleryItems.length; // Dinamikusan számolt képszélesség
  galleryTrack.style.transform = `translateX(-${
    currentIndex * galleryWidth
  }px)`;
}

// Frissíti a gombok állapotát
function updateButtons() {
  // Prev gomb inaktiválása az első képnél
  prevButton.disabled = currentIndex === 0;
  // Next gomb inaktiválása az utolsó képnél
  nextButton.disabled = currentIndex === galleryLength - 1;
  console.log("Current Index:", currentIndex);
  console.log("Gallery Items Length:", galleryItems.length);
}

// Következő gomb eseménykezelő
nextButton.addEventListener("click", () => {
  if (currentIndex < galleryLength - 1) {
    currentIndex++;
    updateGallery();
    updateButtons();
  }
});

// Előző gomb eseménykezelő
prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateGallery();
    updateButtons();
  }
});

function handleScroll() {
  if (window.scrollY > window.innerHeight) {
    // Ha a felhasználó elhagyta a kezdőképernyőt
    navbar.classList.add("scrolled");
  } else {
    // Ha visszatér a kezdőképernyőre
    navbar.classList.remove("scrolled");
  }
}

// Oldal betöltésekor inicializálás
window.addEventListener("load", () => {
  currentIndex = 0; // Az első képnél kezdünk
  updateGallery(); // Kezdeti pozíció beállítása
  updateButtons(); // Gombok állapotának frissítése
});

window.addEventListener("scroll", handleScroll);

// price card animation
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".price__card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.5 }
  );

  cards.forEach((card) => observer.observe(card));
});
