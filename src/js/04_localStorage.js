'use strict';

function onLoad() {
  const dataLocalStorage = JSON.parse(localStorage.getItem('data'));
  console.log(dataLocalStorage);

  if (dataLocalStorage) {
    favouritesAnime = dataLocalStorage;
    renderFavourites();
    console.log('usa LS');
  } else {
    getAnimeData();
    console.log('no estoy en el LS');
  }
}

//getAnimeData(); //no lo pongo porque no quiero que me recarge todos los resultados al cargar la página
onLoad();
