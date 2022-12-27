"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const adv = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkBox = addForm.querySelector("[type='checkbox']");

  addForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const newFilm = addInput.value;
    const favorite = checkBox.checked;

    if (newFilm) {
      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
    }
    event.target.reset();
  });

  const deleteAdv = (arr) => {
    arr.forEach((item) => item.remove());
  };

  const makeChanges = (changeContent, changeImage) => {
    changeContent.textContent = "драма";

    changeImage.style.backgroundImage = "url('img/bg.jpg')";
  };

  const sortArr = (arr) => arr.sort();

  function createMovieList(films, parent) {
    parent.innerHTML = "";

    films.forEach((film, i) => {
      parent.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
        <div class="delete"></div>
     </li>
    `;
    });
  }

  deleteAdv(adv);
  makeChanges(genre, poster);
  sortArr(movieDB.movies);
  createMovieList(movieDB.movies, movieList);
});
