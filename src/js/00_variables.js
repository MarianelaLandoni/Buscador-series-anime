'use strict';
//Traer elementos del HTML a JS con variables.

const inputUser = document.querySelector('.js_inputUser');
const btnSearch = document.querySelector('.js_btnSearch');
const btnReset = document.querySelector('.js_btnReset');
const listResults = document.querySelector('.js_listResults');
const listFavourites = document.querySelector('.js_listFavourites');
const resetAllFavs = document.querySelector('.js_resetAllFavs');
//Array para guardar los datos de búsqueda de la usuaria

let dataAnime = [];

//Array para guardar las series favoritas.  A este se guardarán los li que clickemos

let favouritesAnime = [];
