'use strict';

//Función para pintar en el html la lista de resultados

function renderAnime() {
  let html = '';
  for (const elementAnime of dataAnime) {
    if (
      elementAnime.images.jpg.image_url ===
      'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png'
    ) {
      html += ` <li class="listAnime js_eachAnime " id="${elementAnime.mal_id} "><img class="imgAnime"  src='https://via.placeholder.com/210x295/ffffff/666666/?text=TV'><h3 class="titleAnime">${elementAnime.title}</h3>`;
      if (elementAnime.airing) {
        html += `<a href="${elementAnime.url}">Más detalles</a></li>`;
      } else {
        html += `<p>No se está transmitiendo</p></li>`;
      }
    } else {
      html += `<li class="listAnime js_eachAnime " id="${elementAnime.mal_id} "><img class="imgAnime" src=${elementAnime.images.jpg.image_url}><h3 class="titleAnime">${elementAnime.title}</h3></li>`;
      if (elementAnime.airing) {
        html += `<a href="${elementAnime.url}">Más detalles</a></li>`;
      } else {
        html += `<p>No se está transmitiendo</p></li>`;
      }
    }
  }

  listResults.innerHTML = html;
  listenerAnimes();
}

//Función manejadora del evento click de buscar

function handleClick(event) {
  event.preventDefault();
  getAnimeData();
}

//Evento para escuchar el click en el botón de buscar

btnSearch.addEventListener('click', handleClick);
