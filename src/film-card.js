import {createElement} from './create-element';

export default class FilmCard {

  /**
   * @param {Film} film фильм
   * @param {boolean} isExtra true если карточка для дополнительного раздела
   */
  constructor(film, isExtra = false) {
    this._film = {...film};
    this._isExtra = isExtra;
    this._element = null;
    this._onCommentButtonClick = this._onCommentButtonClick.bind(this);
  }

  /**
   * Получить новый элемент карточки с фильмом
   * @return {string} элемент карточки
   */
  get _template() {
    return `
      <article class="film-card${this._isExtra ? ` film-card--no-controls` : ``}">
        <h3 class="film-card__title">${this._film.title}</h3>
        <p class="film-card__rating">${this._film.rating}</p>
        <p class="film-card__info">
          <span class="film-card__year">${this._film.year}</span>
          <span class="film-card__duration">${this._film.duration}</span>
          <span class="film-card__genre">${this._film.genres[0]}</span>
        </p>
        <img src="${this._film.poster}" alt="" class="film-card__poster">
        ${this._isExtra ? `` : `<p class="film-card__description">${this._film.description}</p>`}
        <button class="film-card__comments">${this._film.comments}</button>
        ${this._isExtra ? `` :
            `<form class="film-card__controls">
              <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
              <button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
              <button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
            </form>`}
      </article>`.trim();
  }

  set onCommentClick(fn) {
    this._onCommentClick = fn;
  }

  get element() {
    return this._element;
  }

  render() {
    this._element = createElement(this._template);
    this._createListeners();
    return this._element;
  }

  unrender() {
    this._removeListeners();
    this._element.remove();
    this._element = null;
  }

  _createListeners() {
    this._element.querySelector(`.film-card__comments`)
    .addEventListener(`click`, this._onCommentButtonClick);
  }

  _removeListeners() {
    this._element.querySelector(`.film-card__comments`)
    .removeEventListener(`click`, this._onCommentButtonClick);
  }

  _onCommentButtonClick() {
    typeof this._onCommentClick === `function` && this._onCommentClick();
  }

}

