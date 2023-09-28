import "./utilitaires.scss";

import "./pagination/pagination.js";

// import "./mega-menu/mega-menu";

import "./mega-menu-www.marseille.aeroport.fr/mega-menu";
//
// try to load image
import brokenHandcuffs from "./images/chambre-style-campagne-chic.webp";
const img = document.createElement("img");
img.className = "quote__img2";
img.setAttribute("src", brokenHandcuffs);
img.setAttribute("alt", "Someone's upraised arms bound to the pieces of a handcuff that has just been broken.");
img.setAttribute("width", "817");
img.setAttribute("height", "460");
const imgContainer = document.querySelector("#image_load_here");
imgContainer.appendChild(img);
