import makeFilmCard from './make-film-card';
import makeFilter from './make-filter';
import Card from './card';

/** Контейнер для фильтров */
const filterContainer = document.querySelector(`.main-navigation`);

/** Контейнер для карточек фильмов */
const cardsContainer = document.querySelector(`.films-list .films-list__container`);

/** Контейнер для карточек раздела "Топ рейтинга" */
const cardsTopRatedContainer = document.querySelector(`.films-list--top-rated .films-list__container`);

/** Контейнер для карточек раздела "Наиболее комментируемые" */
const cardsMostCommentedContainer = document.querySelector(`.films-list--most-commented .films-list__container`);

/**
 * Добавить новый элемент фильтра
 * @param {string} link          ссылка
 * @param {string} caption       название
 * @param {number} amount        количество
 * @param {boolean} isAdditional true если элемент дополнительный
 */
const addFilter = (link, caption, amount = null, isAdditional = false) => {
  filterContainer.insertAdjacentHTML(`beforeend`, makeFilter(link, caption, amount, isAdditional));
};

/**
 * Добавить карточки с фильмами
 * @param {string} cards карточки
 */
const addFilmCards = (cards) => {
  cardsContainer.insertAdjacentHTML(`beforeend`, cards);
};

/**
 * Добавить карточки с фильмами в раздел "Топ рейтинга"
 * @param {string} cards карточки
 */
const addTopRatedCards = (cards) => {
  cardsTopRatedContainer.insertAdjacentHTML(`beforeend`, cards);
};

/**
 * Добавить карточки с фильмами в раздел "Наиболее комментируемые"
 * @param {string} cards карточки
 */
const addMostCommentedCards = (cards) => {
  cardsMostCommentedContainer.insertAdjacentHTML(`beforeend`, cards);
};

const generateCard = () => new Card(
    `The Assassination Of Jessie James By The Coward Robert Ford`,
    `9.8`,
    2018,
    `1h&nbsp;13m`,
    `Comedy`,
    `three-friends.jpg`,
    `A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun.`,
    13
);

/**
 * Обработчик смены фильтра
 * @param {Event} evt событие
 */
const filterHandler = (evt) => {
  if (!evt.target.classList.contains(`main-navigation__item`) && !evt.target.classList.contains(`main-navigation__item-count`)) {
    return;
  }
  cardsContainer.innerHTML = ``;
  const card = makeFilmCard(generateCard());
  const cards = Array(rand(1, 8)).fill(card).join(``);
  addFilmCards(cards);
};

/**
 * Генератор случайного числа
 * @param {number} min минимальное значение
 * @param {number} max максимальное значение
 * @return {number} случайное число из интервала
 */
const rand = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

addFilter(`#all`, `All movies`);
addFilter(`#watchlist`, `Watchlist`, 13);
addFilter(`#history`, `History`, 4);
addFilter(`#favorites`, `Favorites`, 8);
// addFilter(`#stats`, `Stats`, null, true);

filterContainer.addEventListener(`click`, filterHandler);

let card = makeFilmCard(generateCard());
let cards = Array(7).fill(card).join(``);
addFilmCards(cards);
card = makeFilmCard(generateCard(), true);
cards = Array(2).fill(card).join(``);
addTopRatedCards(cards);
addMostCommentedCards(cards);
