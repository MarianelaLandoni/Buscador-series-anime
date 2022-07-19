'use strict';

//PARTE - PONER FAVORITOS

//Función que pinta la lista de favoritos

function renderFavourites() {
  let html = '';
  for (const eachfav of favouritesAnime) {
    if (
      eachfav.images.jpg.image_url ===
      'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png'
    ) {
      html += `<li class="listAnime  js_eachAnime" id="${eachfav.mal_id} "><h3>${eachfav.title}</h3> <img class="imgAnime"  src='https://via.placeholder.com/210x295/ffffff/666666/?text=TV'></li>`;
    } else {
      html += `<li class="listAnime  js_eachAnime" id="${eachfav.mal_id} "><h3>${eachfav.title}</h3><img class="imgAnime" src=${eachfav.images.jpg.image_url}></li>`;
    }
  }
  localStorage.setItem('data', JSON.stringify(favouritesAnime)); //Si lo pongo dentro de esta función sí los guarda todos
  listFavourites.innerHTML = html;
}

//Función manejadora del click de cada li. Para saber la informacion de cada click que hago tengo que hacer un currentTarget. Para diferenciar cada li tengo que utilizar el id

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

  // console.log(favouritesAnime);

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
