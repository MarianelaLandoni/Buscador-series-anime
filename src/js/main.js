'use strict';

//Traer elementos del HTML a JS con variables.

const inputUser = document.querySelector('.js_inputUser');
const btnSearch = document.querySelector('.js_btnSearch');
const btnReset = document.querySelector('.js_btnReset');
const listResults = document.querySelector('.js_listResults');
const listFavorites = document.querySelector('.js_listFavorites');

//Array para guardar los datos de búsqueda de la usuaria

let dataAnime = [];

//Función para pintar en el html la lista.
//Tengo que poner una variable vacía y luego ir recorriendo con un bucle para ir pintando dentro del array de anime.

function renderAnime() {
  let html = '';
  for (const elementAnime of dataAnime) {
    html += `<li class=" js_eachAnime"><h3>${elementAnime.title}</h3><img src=${elementAnime.images.jpg.image_url}></li>`;
  }

  listResults.innerHTML = html;
}

//Función para conseguir los datos del API

function getAnimeData() {
  const userInput = inputUser.value;
  fetch(`https://api.jikan.moe/v4/anime?q=${userInput}`)
    .then((response) => response.json())
    .then((data) => {
      dataAnime = data.data;
      renderAnime(); //lo que va despues del . (.data)es lo que ponga en el API, aquí si vemos el JSON todos los datos están metidos dentro de "data"
    });
}

//Función manejadora del evento click de buscar

function handleClick(event) {
  event.preventDefault();
  getAnimeData();
}

//Evento para escuchar el evento click en el botón de buscar

btnSearch.addEventListener('click', handleClick);
