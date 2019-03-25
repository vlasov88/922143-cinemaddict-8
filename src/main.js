import FilmCard from './film-card';
import FilmDetails from './film-details';
import {getFilm} from './mock/data';
import Filter from './filter';

const body = document.querySelector(`body`);

/** Контейнер для фильтров */
const filterContainer = document.querySelector(`.main-navigation`);

/** Контейнер для карточек фильмов */
const cardsContainer = document.querySelector(`.films-list .films-list__container`);

/** Контейнер для карточек раздела "Топ рейтинга" */
const cardsTopRatedContainer = document.querySelector(`.films-list--top-rated .films-list__container`);

/** Контейнер для карточек раздела "Наиболее комментируемые" */
const cardsMostCommentedContainer = document.querySelector(`.films-list--most-commented .films-list__container`);

const renderElements = (container, element) => {
  container.innerHTML = element;
};

let renderedCards = [];

const renderFilmCards = (container, num = 8) => [...Array(num)]
.forEach(() => {
  const film = getFilm();
  const filmCard = new FilmCard(film, container !== cardsContainer);
  const filmDetails = new FilmDetails(film);
  filmCard.onClick = () => {
    body.appendChild(filmDetails.render());
  };

  filmDetails.onClick = () => {
    filmDetails.unrender();
  };
  container.appendChild(filmCard.render());
  renderedCards.push(filmCard);
});

/**
 * Обработчик смены фильтра
 * @param {Event} evt событие
 */
const filterHandler = (evt) => {
  if (!evt.target.classList.contains(`main-navigation__item`) && !evt.target.classList.contains(`main-navigation__item-count`)) {
    return;
  }
  renderedCards.forEach((card) => card.unrender());
  renderedCards = [];
  renderFilmCards(cardsContainer);
};

const generateFilters = () => [
  {link: `#all`, caption: `All movies`},
  {link: `#watchlist`, caption: `Watchlist`, amount: 13},
  {link: `#history`, caption: `History`, amount: 4},
  {link: `#favorites`, caption: `Favorites`, amount: 8},
  {link: `#stats`, caption: `Stats`, isAdditional: true}
]
  .reduce((acc, {link, caption, amount, isAdditional}) =>
    acc + new Filter(link, caption, amount, isAdditional).template, ``);


filterContainer.addEventListener(`click`, filterHandler);

renderElements(filterContainer, generateFilters());
renderFilmCards(cardsContainer);
renderFilmCards(cardsMostCommentedContainer, 2);
renderFilmCards(cardsTopRatedContainer, 2);

