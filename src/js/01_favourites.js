'use strict';

//Función que pinta la lista de favoritos

function renderFavourites() {
  let html = '';
  for (const eachfav of favouritesAnime) {
    if (
      eachfav.images.jpg.image_url ===
      'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png'
    ) {
      html += `<li class="listAnime  js_eachAnime" id="${eachfav.mal_id} "> <img class="imgAnime"  src='https://via.placeholder.com/210x295/ffffff/666666/?text=TV'><h3 class="titleAnime">${eachfav.title}</h3></li>`;
    } else {
      html += `<li class="listAnime  js_eachAnime" id="${eachfav.mal_id} "><img class="imgAnime" src=${eachfav.images.jpg.image_url}><h3 class="titleAnime">${eachfav.title}</h3></li>`;
    }
  }
  localStorage.setItem('data', JSON.stringify(favouritesAnime));
  listFavourites.innerHTML = html;
}

//Función manejadora del click de cada li

function handleClickFavourite(event) {
  const animeSelected = event.currentTarget;
  console.log(animeSelected);
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
    animeSelected.classList.add('selected');
  } else {
    favouritesAnime.splice(favouritesAnimeFound, 1);
    animeSelected.classList.remove('selected');
  }

  renderFavourites();
  listenerAnimes();
}

//Funcion escuchadora de cada li

function listenerAnimes() {
  const selectAllLiAnimes = document.querySelectorAll('.js_eachAnime');
  for (const li of selectAllLiAnimes) {
    li.addEventListener('click', handleClickFavourite);
  }
}
