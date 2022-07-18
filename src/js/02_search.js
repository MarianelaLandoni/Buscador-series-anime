'use strict';

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

    html += `<li class="listAnime ${classFavourite} js_eachAnime" id="${elementAnime.mal_id} ">`;
    html += `<h3>${elementAnime.title}</h3>`;
    if (
      elementAnime.images.jpg.image_url ===
      'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png'
    ) {
      html += ` <img class="imgAnime"  src='https://via.placeholder.com/210x295/ffffff/666666/?text=TV'>`;
    } else {
      html += `<img class="imgAnime" src=${elementAnime.images.jpg.image_url}>`;
    }
    html += `</li>`;
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
      localStorage.setItem('data', JSON.stringify(favouritesAnime));
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
