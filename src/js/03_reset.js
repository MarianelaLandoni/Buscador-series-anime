'use strict';
//Evento para eliminar el input de la usuaria y los resultados de búsqueda

function handleClickReset() {
  listResults.innerHTML = '';
  userInput = '';
}

btnReset.addEventListener('click', handleClickReset);

//Evento para elminar toda la lista de favoritos

function handleResetAllFavs() {
  localStorage.clear();
  listFavourites.innerHTML = '';
  favouritesAnime = [];
}

resetAllFavs.addEventListener('click', handleResetAllFavs);
