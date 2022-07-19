'use strict';

//Función para conseguir los datos del API

function getAnimeData() {
  const userInput = inputUser.value;
  fetch(`https://api.jikan.moe/v4/anime?q=${userInput}`)
    .then((response) => response.json())
    .then((data) => {
      dataAnime = data.data;
      renderAnime();
    });
}
