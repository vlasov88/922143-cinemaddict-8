import makeFilmCard from './make-film-card';
import makeFilter from './make-filter';
import {getCard} from './mock';
import {rand} from './utils';

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
 * @param {Card[]} cards карточки
 */
const addFilmCards = (cards) => {
  addCardsToContainer(cardsContainer, cards);
};

/**
 * Добавить карточки с фильмами в раздел "Топ рейтинга"
 * @param {Card[]} cards карточки
 */
const addTopRatedCards = (cards) => {
  addCardsToContainer(cardsTopRatedContainer, cards);
};

/**
 * Добавить карточки с фильмами в раздел "Наиболее комментируемые"
 * @param {Card[]} cards карточки
 */
const addMostCommentedCards = (cards) => {
  addCardsToContainer(cardsMostCommentedContainer, cards);
};

/**
 * Добавить карточки с фильмами в контейнер
 * @param {Element} container контейнер
 * @param {Card[]} cards      карточки
 */
const addCardsToContainer = (container, cards) => {
  container.insertAdjacentHTML(`beforeend`, cards.reduce((acc, curr) => acc + makeFilmCard(curr), ``));
};

/**
 * Обработчик смены фильтра
 * @param {Event} evt событие
 */
const filterHandler = (evt) => {
  if (!evt.target.classList.contains(`main-navigation__item`) && !evt.target.classList.contains(`main-navigation__item-count`)) {
    return;
  }
  cardsContainer.innerHTML = ``;
  const count = rand(1, 8);
  addFilmCards([...Array(count)].map(() => getCard()));
};

addFilter(`#all`, `All movies`);
addFilter(`#watchlist`, `Watchlist`, 13);
addFilter(`#history`, `History`, 4);
addFilter(`#favorites`, `Favorites`, 8);
// addFilter(`#stats`, `Stats`, null, true);

filterContainer.addEventListener(`click`, filterHandler);

addFilmCards([...Array(7)].map(() => getCard()));
addTopRatedCards([...Array(2)].map(() => getCard()));
addMostCommentedCards([...Array(2)].map(() => getCard()));
