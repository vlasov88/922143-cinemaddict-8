export default class FilmCard {

  /**
   * @param {Card} card карточка с фильмом
   * @param {boolean} isExtra true если карточка для дополнительного раздела
   */
  constructor(card, isExtra = false) {
    this._card = {...card};
    this._isExtra = isExtra;
  }

  /**
   * Получить новый элемент карточки с фильмом
   * @return {string} элемент карточки
   */
  get _template() {
    return `
      <article class="film-card${this._isExtra ? ` film-card--no-controls` : ``}">
        <h3 class="film-card__title">${this.card.title}</h3>
        <p class="film-card__rating">${this.card.rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${this.card.year}</span>
          <span class="film-card__duration">${this.card.duration}</span>
          <span class="film-card__genre">${this.card.genre}</span>
        </p>
        <img src="${this.card.poster}" alt="" class="film-card__poster">
        ${this.isExtra ? `` : `<p class="film-card__description">${this.card.description}</p>`}
        <button class="film-card__comments">${this.card.comments}</button>
        ${this.isExtra ? `` :
            `<form class="film-card__controls">
              <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
              <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
              <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
            </form>`}
      </article>`.trim();
  }

}

