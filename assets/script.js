const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
const gauche = document.querySelector(".arrow_left");
const droite = document.querySelector(".arrow_right");
const dots = document.querySelector(".dots");
let imageactuelle = 0;
const monimage = document.querySelector(".banner-img");
const montexte = document.querySelector("#banner p");

const taille = slides.length;
for (let i = 1; i <= taille; i++) {
  const dots1 = document.createElement("div");
  dots1.classList.add("dot");
  if (i === 1) {
    dots1.classList.add("dot_selected");
  }

  dots.appendChild(dots1);
}

gauche.addEventListener("click", () => changeSlide());

function changeSlide() {
  imageactuelle = (imageactuelle - 1 + taille) % taille;
  miseajour();
}

droite.addEventListener("click", () => clicldroit());

function clicldroit() {
  imageactuelle = (imageactuelle + 1 + taille) % taille;
  miseajour();
}

function miseajour() {
  const slide = slides[imageactuelle];
  monimage.src = `./assets/images/slideshow/${slide.image}`;
  montexte.innerHTML = slide.tagLine;
  document.querySelectorAll(".dot").forEach((dot, index) => {
    if (index === imageactuelle) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
}
