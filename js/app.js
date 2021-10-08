"use strict";
/**********************************/
//variables
//config
import { LOCKey, APIkey } from "./config.js";
//html
const dateDuJour = document.getElementById("dateDuJour");
const pSearch = document.querySelector(".search");
const main = document.querySelector("main");
const h1 = document.querySelector("h1");
const form = document.getElementById("searchForm");
const search = document.getElementById("inputSearch");
const buttonSearch = document.getElementById("buttonSearch");
const header = document.querySelector(".header");
const newSearch = document.getElementsByClassName("selection");
const imgMeteoActu = document.getElementById("imgMeteoActu");
const heureMeteoActu = document.getElementById("heureMeteoActu");
const degreMeteoActu = document.getElementById("degreMeteoActu");
const nuageMeteoActu = document.getElementById("nuageMeteoActu");
const ventMeteoActu = document.getElementById("ventMeteoActu");
const descriptionMeteoActu = document.getElementById("descriptionMeteoActu");
const imgMeteoNext = document.getElementById("imgMeteoNext");
const heureMeteoNext = document.getElementById("heureMeteoNext");
const degreMeteoNext = document.getElementById("degreMeteoNext");
const nuageMeteoNext = document.getElementById("nuageMeteoNext");
const ventMeteoNext = document.getElementById("ventMeteoNext");
const descriptionMeteoNext = document.getElementById("descriptionMeteoNext");
const imgMeteoSuperNext = document.getElementById("imgMeteoSuperNext");
const heureMeteoSuperNext = document.getElementById("heureMeteoSuperNext");
const degreMeteoSuperNext = document.getElementById("degreMeteoSuperNext");
const nuageMeteoSuperNext = document.getElementById("nuageMeteoSuperNext");
const ventMeteoSuperNext = document.getElementById("ventMeteoSuperNext");
const descriptionMeteoSuperNext = document.getElementById(
  "descriptionMeteoSuperNext"
);
const divMeteo3Jours = document.querySelector(".meteo3Jours");
const titreWeekend = document.getElementById("weekend");
const divMeteoWeekend = document.querySelector(".meteoWeekend");
const btnFav = document.getElementById("favoris");
const btnSupprFav = document.getElementById("supprFavoris");
const flecheGauche = document.querySelector(".fa-chevron-circle-left");
const flecheDroite = document.querySelector(".fa-chevron-circle-right");
//dates
const now = new Date();
const heure = now.getHours();
const day = now.getTime();
const jourDeLaSemaine = now.getDay();
const JOURS = [];
const WEEKEND = ["Samedi", "Dimanche"];
//autres
let latitude;
let longitude;
let COORDONNEES = {};
let nextMeteo;
let superNextMeteo;
const locale = navigator.language;
const options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "numeric",
};
/**********************************/

//FONCTION SUPPRIMER LES ACCENTS:
String.prototype.sansAccent = function () {
  //source : http://www.finalclap.com/faq/257-javascript-supprimer-remplacer-accent
  let accent = [
    /[\300-\306]/g,
    /[\340-\346]/g, // A, a
    /[\310-\313]/g,
    /[\350-\353]/g, // E, e
    /[\314-\317]/g,
    /[\354-\357]/g, // I, i
    /[\322-\330]/g,
    /[\362-\370]/g, // O, o
    /[\331-\334]/g,
    /[\371-\374]/g, // U, u
    /[\321]/g,
    /[\361]/g, // N, n
    /[\307]/g,
    /[\347]/g, // C, c
  ];
  let noaccent = [
    "A",
    "a",
    "E",
    "e",
    "I",
    "i",
    "O",
    "o",
    "U",
    "u",
    "N",
    "n",
    "C",
    "c",
  ];

  let str = this;
  for (let i = 0; i < accent.length; i++) {
    str = str.replace(accent[i], noaccent[i]);
  }
  return str;
};

//BLOCAGE DU BOUTON DE RECHERCHER PENDANT 3 SECONDES
function buttonDisable() {
  buttonSearch.disabled = false;
}
//si plusieurs clicks , bouton desactivé pendant 3 secondes
buttonSearch.addEventListener("click", function () {
  //on supprime les anciens choix de requetes
  if (document.querySelector(".selectionBis"))
    document.querySelector(".selectionBis").remove();
  if (document.querySelector(".selection")) {
    for (let i = 0; i <= document.querySelectorAll(".selection").length; i++)
      document.querySelector(".selection").remove();
  }
  //on desactive le bouton puis le reactive au bout de 3 secondes
  buttonSearch.disabled = true;
  let timeoutID = setTimeout(buttonDisable, 3000);
});

//FONCTION ERREUR
function displayAlert() {
  let timeoutID = setTimeout(deleteAlert, 4000);
}
function deleteAlert() {
  document.querySelector(".error").remove();
}

//FONCTION POUR TROUVER QUELLE OCCURENCE CHOISIR DANS L'OBJET HOURLY EN FONCTION DE L'HEURE ACTUELLE
const hourly = function (objet) {
  switch (heure) {
    case 0:
      nextMeteo = objet.hourly[8];
      superNextMeteo = objet.hourly[15];
      break;
    case 1:
      nextMeteo = objet.hourly[7];
      superNextMeteo = objet.hourly[14];
      break;
    case 2:
      nextMeteo = objet.hourly[6];
      superNextMeteo = objet.hourly[13];
      break;
    case 3:
      nextMeteo = objet.hourly[5];
      superNextMeteo = objet.hourly[12];
      break;
    case 4:
      nextMeteo = objet.hourly[4];
      superNextMeteo = objet.hourly[11];
      break;
    case 5:
      nextMeteo = objet.hourly[3];
      superNextMeteo = objet.hourly[10];
      break;
    case 6:
      nextMeteo = objet.hourly[9];
      superNextMeteo = objet.hourly[17];
      break;
    case 7:
      nextMeteo = objet.hourly[8];
      superNextMeteo = objet.hourly[16];
      break;
    case 8:
      nextMeteo = objet.hourly[7];
      superNextMeteo = objet.hourly[15];
      break;
    case 9:
      nextMeteo = objet.hourly[6];
      superNextMeteo = objet.hourly[14];
      break;
    case 10:
      nextMeteo = objet.hourly[5];
      superNextMeteo = objet.hourly[13];
      break;
    case 11:
      nextMeteo = objet.hourly[4];
      superNextMeteo = objet.hourly[12];
      break;
    case 12:
      nextMeteo = objet.hourly[11];
      superNextMeteo = objet.hourly[16];
      break;
    case 13:
      nextMeteo = objet.hourly[10];
      superNextMeteo = objet.hourly[16];
      break;
    case 14:
      nextMeteo = objet.hourly[9];
      superNextMeteo = objet.hourly[16];
      break;
    case 15:
      nextMeteo = objet.hourly[8];
      superNextMeteo = objet.hourly[16];
      break;
    case 16:
      nextMeteo = objet.hourly[7];
      superNextMeteo = objet.hourly[16];
      break;
    case 17:
      nextMeteo = objet.hourly[6];
      superNextMeteo = objet.hourly[16];
      break;
    case 18:
      nextMeteo = objet.hourly[5];
      superNextMeteo = objet.hourly[16];
      break;
    case 19:
      nextMeteo = objet.hourly[4];
      superNextMeteo = objet.hourly[16];
      break;
    case 20:
      nextMeteo = objet.hourly[12];
      superNextMeteo = objet.hourly[19];
      break;
    case 21:
      nextMeteo = objet.hourly[11];
      superNextMeteo = objet.hourly[18];
      break;
    case 22:
      nextMeteo = objet.hourly[10];
      superNextMeteo = objet.hourly[17];
      break;
    case 23:
      nextMeteo = objet.hourly[9];
      superNextMeteo = objet.hourly[16];
      break;
  }
};

//DATE DU JOUR
const date = new Intl.DateTimeFormat(locale, options).format(now);
const dateMaj = date[0].toLocaleUpperCase() + date.slice(1);
dateDuJour.innerHTML = `${dateMaj}`;

//DATE DES 3 JOURS A VENIR
const SEMAINE = [
  "Dimanche",
  "Lundi",
  "Mardi",
  "Mercredi",
  "Jeudi",
  "Vendredi",
  "Samedi",
];
//timestamp des jour J+1 à J+3
const day2 = new Date(day + 86400000);
const day3 = new Date(day + 86400000 * 2);
const day4 = new Date(day + 86400000 * 3);
//Extrait le jour de la semaine de la date (ex jour numéro 1 pour lundi) et grace à l'index on trouve le jours dans SEMAINE, puis on le met dans le tableau JOURS
JOURS.push(SEMAINE[day2.getDay()]);
JOURS.push(SEMAINE[day3.getDay()]);
JOURS.push(SEMAINE[day4.getDay()]);

//DATE POUR WEEKEND
let jourPourWE = function () {
  switch (jourDeLaSemaine) {
    case 0: //dimanche
      return 6;
      break;
    case 1: //lundi
      return 5;
      break;
    case 2: //mardi
      return 4;
      break;
    case 3: //mercredi
      return 3;
      break;
    case 4: //jeudi
      return 2;
      break;
    case 5: //vendredi
      return 1;
      break;
    case 6: //samedi
      return 7;
      break;
  }
};

//AFFICHAGE DU MOMENT DU JOUR
if (heure >= 12 && heure < 19) {
  heureMeteoActu.innerHTML = "Après-midi";
  heureMeteoNext.innerHTML = "Soirée";
  heureMeteoSuperNext.innerHTML = "Matin";
} else if (heure >= 6 && heure < 12) {
  heureMeteoActu.innerHTML = "Matin";
  heureMeteoNext.innerHTML = "Après-midi";
  heureMeteoSuperNext.innerHTML = "Soirée";
} else {
  heureMeteoActu.innerHTML = "Soirée";
  heureMeteoNext.innerHTML = "Matin";
  heureMeteoSuperNext.innerHTML = "Après-midi";
}

//VILLE EN GEOLOCALISATION
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      //si geolocalisation activée, on affiche le site
      main.classList.remove("hide");
      COORDONNEES.latitude = latitude;
      COORDONNEES.longitude = longitude;
      localisation(COORDONNEES);
      meteo(COORDONNEES);
    },
    function () {
      //si geolocalisation non activée, on affiche l'autre partie du site
      pSearch.classList.remove("hide");
    }
  );
}

//INITIALISATION DES METHODES & FONCTIONS
const coords = function (objet) {
  //on vide l'objet en insèrant les nouvelles coordonnées
  COORDONNEES.latitude = +objet.latitude;
  COORDONNEES.longitude = +objet.longitude;
};

const localisation = async function (objet) {
  try {
    const res = await fetch(
      `https://us1.locationiq.com/v1/reverse.php?key=${LOCKey}&lat=${objet.latitude}&lon=${objet.longitude}&format=json`
    );
    if (!res.ok)
      throw new Error(
        "Problème pour accéder à la géolocalisation. <br>Veuillez recharger la page"
      );
    const data = await res.json();
    //On affiche la ville
    h1.innerHTML = "";
    if (data.address.city) h1.innerHTML = `${data.address.city}`;
    if (data.address.town) h1.innerHTML = `${data.address.town}`;
    if (data.address.village) h1.innerHTML = `${data.address.village}`;
    //on selectionne l'icone favoris à afficher si besoin
    favori();
  } catch (err) {
    form.insertAdjacentHTML("afterend", `<p class="error">${err}</p>`);
    displayAlert();
  }
};

//RECHERCHER UNE VILLE
const rechercherVille = async function (querry) {
  try {
    const res = await fetch(
      `https://api.locationiq.com/v1/autocomplete.php?key=${LOCKey}&q=${querry}&normalizecity=1&tag=place%3Acity%2Cplace%3Atown%2Cplace%3Avillage&limit=5&accept-language=fr`
    );
    if (!res.ok)
      throw new Error(
        "Problème pour accéder à la ville<br> Veuillez effectuer une nouvelle recherche"
      );
    const data = await res.json();
    pSearch.classList.add("hide");
    main.classList.remove("hide");
    btnFav.classList.remove("hide");
    btnSupprFav.classList.add("hide");
    //Si retour de plusieurs résultats, on élimine les faux résultats en comparant la ville cherchée et le nom de la ville du résultat
    if (data.length !== 1) {
      //pour chaque resultat, vérifier si le nom correspond à la recherche, et mettre le résultat dans newData
      let newData = [];
      data.forEach(function (_, i) {
        if (
          data[i].display_place.toLowerCase().sansAccent() ===
          querry.toLowerCase().sansAccent()
        )
          newData.push(data[i]);
      });
      //s'il ne reste qu'un choix, on l'affiche grace à newData
      if (newData.length === 1) {
        COORDONNEES.latitude = newData[0].lat;
        COORDONNEES.longitude = newData[0].lon;
        localisation(COORDONNEES);
        meteo(COORDONNEES);
        //On vide le form
        form.reset();
      } else if (newData.length === 0) {
        throw new Error(
          "Cette ville n'existe pas<br> Veuillez effectuer une nouvelle recherche"
        );
      } else {
        newData.forEach(function (_, index) {
          //Si on a un code postal, on affiche les choix avec VILLE + PAYS + CODE POSTAL
          newData[index].address.postcode
            ? form.insertAdjacentHTML(
                "afterend",
                `<input class="selection" id="${
                  +newData.length - index - 1
                }" value="${newData[index].address.name} ${
                  newData[index].address.country
                } ${newData[index].address.postcode}">`
              )
            : //Sinon, on affiche les choix avec VILLE + PAYS
              form.insertAdjacentHTML(
                "afterend",
                `<input class="selection" id="${
                  +newData.length - index - 1
                }" value="${newData[index].address.name} ${
                  newData[index].address.country
                }">`
              );
        });
        form.insertAdjacentHTML(
          "afterend",
          `<p class="selectionBis">Merci de préciser votre choix :</p>
          `
        );
        //on ecoute le click de l'utilisateur pour préciser son choix
        header.addEventListener("click", function (e) {
          //on ecoute tout le header par propagation et on ne s'interesse qu'aux éléments qui ont la classe "selection"
          if (e.target.classList.contains("selection")) {
            //on sait quel element est selectionné grace à son id
            let id = e.target.getAttribute("id");
            const villeSelection = [];
            //on met dans un tableau l'info qui correspond à l'id selectionné (utilisation de reverse pour avoir les chiffre dans le meme ordre)
            villeSelection.push(newData.reverse()[id]);
            COORDONNEES.latitude = villeSelection[0].lat;
            COORDONNEES.longitude = villeSelection[0].lon;
            h1.innerHTML = "";
            h1.innerHTML = `${villeSelection[0].address.name} ${villeSelection[0].address.country}`;
            //affichage du bouton favoris
            favori();
            meteo(COORDONNEES);
            //On vide le form et les choix affichés
            form.reset();
            while (newSearch.length > 0) {
              newSearch[0].remove();
            }
            if (document.querySelector(".selectionBis"))
              document.querySelector(".selectionBis").remove();
          }
        });
      }
    } else {
      //Si avec le fetch, retour d'un seul résultat, on l'affiche
      coords(data);
      localisation(COORDONNEES);
      meteo(COORDONNEES);
      //On vide le form
      form.reset();
    }
  } catch (err) {
    form.insertAdjacentHTML("afterend", `<p class="error">${err}</p>`);
    displayAlert();
  }
};

//ECOUTE DU FORM DE CHOIX DE VILLE
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //appel de la fonction avec la valeur du form
  rechercherVille(search.value);
});

//AFFICHAGE ICONE METEO
const iconeMeteo = function (array) {
  switch (array) {
    case "01d":
      return `<i class="wi wi-day-sunny"></i>`;
      break;
    case "01n":
      return `<i class="wi wi-night-clear"></i>`;
      break;
    case "02d":
      return `<i class="wi wi-day-cloudy"></i>`;
      break;
    case "02n":
      return `<i class="wi wi-night-alt-cloudy"></i>`;
      break;
    case "03d":
    case "03n":
      return `<i class="wi wi-cloud"></i>`;
      break;
    case "04d":
    case "04n":
      return `<i class="wi wi-cloudy"></i>`;
      break;
    case "09d":
    case "09n":
      return `<i class="wi wi-rain"></i>`;
      break;
    case "10d":
      return `<i class="wi wi-day-hail"></i>`;
      break;
    case "10n":
      return `<i class="wi wi-night-rain"></i>`;
      break;
    case "11d":
      return `<i class="wi wi-day-thunderstorm"></i>`;
      break;
    case "11n":
      return `<i class="wi wi-night-alt-thunderstorm"></i>`;
      break;
    case "13d":
    case "13n":
      return `<i class="wi wi-snowflake-cold"></i>`;
      break;
    case "50d":
      return `<i class="wi wi-windy"></i>`;
      break;
  }
};

//AFFICHAGE DE LA METEO
const meteo = async function (objet) {
  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${objet.latitude}&lon=${objet.longitude}&units=metric&lang=fr&appid=${APIkey}`
    );
    if (!res.ok)
      throw new Error(
        "Un problème est survenue lors de l'affichage.<br>Veuillez recharger la page"
      );
    const data = await res.json();
    ////////////////////////////////
    //selon l'heure, trouve quelle occurence choisir dans l'objet hourly pour les météos du jour en definissany nextMeteo et superNextMeteo
    hourly(data);

    ////////////////////////////////
    //affichage meteo de maintenant
    imgMeteoActu.innerHTML = `${iconeMeteo(data.current.weather[0].icon)}`;
    degreMeteoActu.innerHTML = `${data.current.temp.toFixed(1)}°C`;
    ventMeteoActu.innerHTML = `Vent : ${data.current.wind_speed.toFixed(
      0
    )} km/h`;
    descriptionMeteoActu.innerHTML = `${data.current.weather[0].description[0].toUpperCase()}${data.current.weather[0].description.slice(
      1
    )}`;
    nuageMeteoActu.innerHTML = `Nuage : ${data.current.clouds.toFixed(0)} %`;
    /////////////////////////////////
    //affichage meteo de l'instant +1
    imgMeteoNext.innerHTML = `${iconeMeteo(nextMeteo.weather[0].icon)}`;
    degreMeteoNext.innerHTML = `${nextMeteo.temp.toFixed(1)}°C`;
    ventMeteoNext.innerHTML = `Vent : ${nextMeteo.wind_speed.toFixed(0)} km/h`;
    descriptionMeteoNext.innerHTML = `${nextMeteo.weather[0].description[0].toUpperCase()}${nextMeteo.weather[0].description.slice(
      1
    )}`;
    nuageMeteoNext.innerHTML = `Nuage : ${nextMeteo.clouds.toFixed(0)} %`;
    /////////////////////////////////
    //affichage meteo de l'instant +2
    imgMeteoSuperNext.innerHTML = `${iconeMeteo(
      superNextMeteo.weather[0].icon
    )}`;
    degreMeteoSuperNext.innerHTML = `${superNextMeteo.temp.toFixed(1)}°C`;
    ventMeteoSuperNext.innerHTML = `Vent : ${superNextMeteo.wind_speed.toFixed(
      0
    )} km/h`;
    descriptionMeteoSuperNext.innerHTML = `${superNextMeteo.weather[0].description[0].toUpperCase()}${superNextMeteo.weather[0].description.slice(
      1
    )}`;
    nuageMeteoSuperNext.innerHTML = `Nuage : ${superNextMeteo.clouds.toFixed(
      0
    )} %`;

    /////////////////////////////////
    //affichage trois prochain jours
    //extraire les 3 premiers jours
    const meteo3jours = data.daily.slice(1, 4);
    //on vide le html:
    divMeteo3Jours.innerHTML = "";
    //pour chaque jour, insérer le html suivant:
    meteo3jours.forEach(function (_, index) {
      let icone = iconeMeteo(meteo3jours[index].weather[0].icon);
      divMeteo3Jours.insertAdjacentHTML(
        "beforeend",
        `<div class="flex meteoTroisJours">
              <p>${JOURS[index]}</p>
              <p>${icone}</p>
              <p>${meteo3jours[index].temp.day.toFixed(1)}°C</p>
            </div>`
      );
    });

    /////////////////////////////////
    //affichage weekend
    //touver les données du weekend
    //extraire les 2 jours
    let jourWe = jourPourWE();
    //on affiche le bon titre:
    titreWeekend.innerHTML = "";
    //si on est dimanche, afficher le WE prochain, sinon le WE actuel
    jourWe === 0
      ? (titreWeekend.innerHTML = "Le weekend prochain")
      : (titreWeekend.innerHTML = "Ce weekend");
    const meteoWeekend = data.daily.slice(jourWe, jourWe + 2);
    //on vide le html:
    divMeteoWeekend.innerHTML = "";
    //pour chaque jour, insérer le html suivant:
    meteoWeekend.forEach(function (_, index) {
      let icone = iconeMeteo(meteoWeekend[index].weather[0].icon);
      divMeteoWeekend.insertAdjacentHTML(
        "beforeend",
        `<div class="flex meteoWE darkblue">
          <p>${WEEKEND[index]}</p>
          <p>${icone}</p>
          <p>${meteoWeekend[index].temp.day.toFixed(1)}°C</p>
        </div>`
      );
    });
  } catch (err) {
    form.insertAdjacentHTML("afterend", `<p class="error">${err}</p>`);
    displayAlert();
  }
};
/*////////////////////////////////*/

const favoris = {
  villesFavorites: [],
};

//fonction favori
const favori = function () {
  favoris.villesFavorites.forEach(function (_, index) {
    if (
      favoris.villesFavorites[index].latitude === COORDONNEES.latitude &&
      favoris.villesFavorites[index].longitude === COORDONNEES.longitude
    ) {
      btnFav.classList.add("hide");
      btnSupprFav.classList.remove("hide");
    }
  });
};

//FONCTION MISE A JOUR DES FAVORIS
const MAJFavoris = function () {
  localStorage.setItem(
    "villesFavorites",
    JSON.stringify(favoris.villesFavorites)
  );
};

//AJOUTER UNE VILLE AUX FAVORIS
btnFav.addEventListener("click", function () {
  ajouterFavoris(COORDONNEES);
  btnFav.classList.add("hide");
  btnSupprFav.classList.remove("hide");
});

const ajouterFavoris = function (coordonnees) {
  favoris.villesFavorites.push(coordonnees);
  MAJFavoris();
  affichageFleche();
};

const init = function () {
  const storage = localStorage.getItem("villesFavorites");
  if (storage) favoris.villesFavorites = JSON.parse(storage);
};
init();

btnSupprFav.addEventListener("click", function () {
  supprimerFavoris(COORDONNEES);
  btnFav.classList.remove("hide");
  btnSupprFav.classList.add("hide");
  affichageFleche();
});

const supprimerFavoris = function (objet) {
  const storage = localStorage
    .getItem("villesFavorites")
    .replaceAll("[", "")
    .replaceAll("]", "")
    .replaceAll("{", "")
    .replaceAll("}", "")
    .replaceAll(":", "")
    .replaceAll("latitude", "")
    .replaceAll("longitude", "")
    .replaceAll('"', "")
    .split(",");
  init();
  storage.forEach(function (_, i) {
    if (
      storage[i] === objet.latitude.toString() &&
      storage[i + 1] === objet.longitude.toString()
    ) {
      favoris.villesFavorites.splice(i, 1);
      MAJFavoris();
    }
  });
};

//Affichage des fleches de favoris
const affichageFleche = function () {
  init();
  if (favoris.villesFavorites.length > 0) {
    flecheDroite.classList.remove("invisible");
    flecheGauche.classList.remove("invisible");
  } else {
    flecheDroite.classList.add("invisible");
    flecheGauche.classList.add("invisible");
  }
};
affichageFleche();

let nombreClickDroit = 0;

//ecoute des btn fleches
flecheDroite.addEventListener("click", function () {
  const storageAcopier = JSON.parse(localStorage.getItem("villesFavorites"));
  COORDONNEES.latitude = storageAcopier[nombreClickDroit].latitude;
  COORDONNEES.longitude = storageAcopier[nombreClickDroit].longitude;
  localisation(COORDONNEES);
  meteo(COORDONNEES);
  nombreClickDroit < storageAcopier.length - 1
    ? nombreClickDroit++
    : (nombreClickDroit = 0);
});
let nombreClickGauche;
flecheGauche.addEventListener("click", function () {
  const storageAcopier = JSON.parse(localStorage.getItem("villesFavorites"));
  if ((nombreClickGauche === undefined) === true)
    nombreClickGauche = storageAcopier.length - 1;
  COORDONNEES.latitude = storageAcopier[nombreClickGauche].latitude;
  COORDONNEES.longitude = storageAcopier[nombreClickGauche].longitude;
  localisation(COORDONNEES);
  meteo(COORDONNEES);
  nombreClickGauche != 0
    ? nombreClickGauche--
    : (nombreClickGauche = storageAcopier.length - 1);
});
