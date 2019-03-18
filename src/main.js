import FilmCard from './film-card';
import Filter from './filter';


/** Контейнер для фильтров */
const filterContainer = document.querySelector(`.main-navigation`);

/** Контейнер для карточек фильмов */
const cardsContainer = document.querySelector(`.films-list .films-list__container`);

/** Контейнер для карточек раздела "Топ рейтинга" */
const cardsTopRatedContainer = document.querySelector(`.films-list--top-rated .films-list__container`);

/** Контейнер для карточек раздела "Наиболее комментируемые" */
const cardsMostCommentedContainer = document.querySelector(`.films-list--most-commented .films-list__container`);

/**
 * Обработчик смены фильтра
 * @param {Event} evt событие
 */
const filterHandler = (evt) => {
  if (!evt.target.classList.contains(`main-navigation__item`) && !evt.target.classList.contains(`main-navigation__item-count`)) {
    return;
  }
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

