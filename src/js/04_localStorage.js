'use strict';

function onLoad() {
  const dataLocalStorage = JSON.parse(localStorage.getItem('data'));
  console.log(dataLocalStorage);

  if (dataLocalStorage) {
    favouritesAnime = dataLocalStorage;
    renderFavourites();
    console.log('usa LS');
  } else {
    console.log('no estoy en el LS');
  }
}

onLoad();
