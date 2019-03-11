/**
 * Получить новый элемент карточки с фильмом
 * @param {Card} card       карточка с фильмом
 * @param {boolean} isExtra true если карточка для дополнительного раздела
 * @return {string} элемент карточки
 */
export default (card, isExtra = false) =>
  `<article class="film-card${isExtra ? ` film-card--no-controls` : ``}">
    <h3 class="film-card__title">${card.title}</h3>
    <p class="film-card__rating">${card.rating}</p>
    <p class="film-card__info">
      <span class="film-card__year">${card.year}</span>
      <span class="film-card__duration">${card.duration}</span>
      <span class="film-card__genre">${card.genre}</span>
    </p>
    <img src="./images/posters/${card.poster}" alt="" class="film-card__poster">
    ${isExtra ? `` : `<p class="film-card__description">${card.description}</p>`}
    <button class="film-card__comments">${card.comments}</button>
    ${isExtra ? `` :
    `<form class="film-card__controls">
      <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
      <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
      <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
    </form>`}
  </article>`;
