'use strict';

//Traer elementos del HTML a JS con variables.

const inputUser = document.querySelector('.js_inputUser');
const btnSearch = document.querySelector('.js_btnSearch');
//const btnReset = document.querySelector('.js_btnReset');
const listResults = document.querySelector('.js_listResults');
const listFavourites = document.querySelector('.js_listFavourites');

//Array para guardar los datos de búsqueda de la usuaria

let dataAnime = [];

//PARTE 2 - PONER FAVORITOS

//Array para guardar las series favoritas.  A este se guardarán los li que clickemos

let favouritesAnime = [];

//Función que pinta la lista de favoritos

function renderFavourites() {
  let html = '';
  for (const eachfav of favouritesAnime) {
    html += `<li class=" js_eachAnime" id="${eachfav.mal_id} "><h3>${eachfav.title}</h3><img src=${eachfav.images.jpg.image_url}></li>`;
  }
  listFavourites.innerHTML = html;
}

//Función manejadora del click de cada li. Para saber la informacion de cada click que hago tengo que hacer un currentTarget. Para diferenciar cada li tengo que utilizar el id

function handleClickFavourite(event) {
  console.log(event.currentTarget.id);
  const selectedId = parseInt(event.currentTarget.id);
  console.log(selectedId);

  const foundAnime = dataAnime.find(
    (eachAnime) => eachAnime.mal_id === selectedId
  );

  const favouritesAnimeFound = favouritesAnime.findIndex(
    (fav) => fav.mal_id === selectedId
  );
  if (favouritesAnimeFound === -1) {
    favouritesAnime.push(foundAnime);
  } else {
    favouritesAnime.splice(favouritesAnimeFound, 1);
  }

  console.log(favouritesAnime);

  renderFavourites();
  listenerAnimes();
}

//Funcion escuchadora de cada li. La voy a llamar una vez que se han pintado los elementos, dentro del renderizado, dentro de renderAnime."Pinto y escucho"
function listenerAnimes() {
  const selectAllLiAnimes = document.querySelectorAll('.js_eachAnime'); //no se puede poner como una variable global porque cuando carga la página dará un array vacío.
  for (const li of selectAllLiAnimes) {
    li.addEventListener('click', handleClickFavourite);
  }
}

//Función para pintar en el html la lista.
//Tengo que poner una variable vacía y luego ir recorriendo con un bucle para ir pintando dentro del array de anime.

function renderAnime() {
  let html = '';
  let classFavourite = '';
  for (const elementAnime of dataAnime) {
    const favouriteFoundIndex = favouritesAnime.findIndex(
      (fav) => elementAnime.mal_id === fav.mal_id
    );
    if (favouriteFoundIndex !== -1) {
      classFavourite = 'selected';
    } else {
      classFavourite = '';
    }

    html += `<li class="${classFavourite} js_eachAnime" id="${elementAnime.mal_id} "><h3>${elementAnime.title}</h3><img src=${elementAnime.images.jpg.image_url}></li>`;
  }

  listResults.innerHTML = html;
  listenerAnimes();
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
