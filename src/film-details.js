import {RatingSection} from "./film-details/rating-section";

export default class FilmDetails {

  constructor(film) {
    this._film = {...film};
    this._tableData = [
      {term: `Director`, cell: this._film.director},
      {term: `Writers`, cell: this._film.writer},
      {term: `Actors`, cell: this._film.actors.join(`, `)},
      {term: `Release Date`, cell: `15 June 2018 (USA)`},
      {term: `Runtime`, cell: this._film.duration},
      {term: `Country`, cell: this._film.country},
      {term: `Genres`, cell: this._film.genres.reduce((acc, cur) => acc + `<span class="film-details__genre">${cur}</span>`, ``)}
    ];
  }

  get _template() {
    return `
      <section class="film-details">
        <form class="film-details__inner" action="" method="get">
          <div class="film-details__close">
            <button class="film-details__close-btn" type="button">close</button>
          </div>
          <div class="film-details__info-wrap">
            <div class="film-details__poster">
              <img class="film-details__poster-img" src="${this._film.poster}" alt="${this._film.title}">

              <p class="film-details__age">${this._film.age}+</p>
            </div>

            <div class="film-details__info">
              <div class="film-details__info-head">
                <div class="film-details__title-wrap">
                  <h3 class="film-details__title">${this._film.title}</h3>
                  <p class="film-details__title-original">Original: ${this._film.titleOriginal}</p>
                </div>

                <div class="film-details__rating">
                  <p class="film-details__total-rating">${this._film.rating}</p>
                  <p class="film-details__user-rating">Your rate 8</p>
                </div>
              </div>

              ${this._getDetailsTableTemplate(this._tableData)}

              <p class="film-details__film-description">
                ${this._film.description}
              </p>
            </div>
          </div>

          <section class="film-details__controls">
            <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist">
            <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" checked>
            <label for="watched" class="film-details__control-label film-details__control-label--watched">Already watched</label>

            <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite">
            <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
          </section>

          <section class="film-details__comments-wrap">
            <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${this._film.comments}</span></h3>

            <ul class="film-details__comments-list">
              <li class="film-details__comment">
                <span class="film-details__comment-emoji">😴</span>
                <div>
                  <p class="film-details__comment-text">So long-long story, boring!</p>
                  <p class="film-details__comment-info">
                    <span class="film-details__comment-author">Tim Macoveev</span>
                    <span class="film-details__comment-day">3 days ago</span>
                  </p>
                </div>
              </li>
            </ul>

            <div class="film-details__new-comment">
              <div>
                <label for="add-emoji" class="film-details__add-emoji-label">😐</label>
                <input type="checkbox" class="film-details__add-emoji visually-hidden" id="add-emoji">

                <div class="film-details__emoji-list">
                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-sleeping" value="sleeping">
                  <label class="film-details__emoji-label" for="emoji-sleeping">😴</label>

                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-neutral-face" value="neutral-face" checked>
                  <label class="film-details__emoji-label" for="emoji-neutral-face">😐</label>

                  <input class="film-details__emoji-item visually-hidden" name="comment-emoji" type="radio" id="emoji-grinning" value="grinning">
                  <label class="film-details__emoji-label" for="emoji-grinning">😀</label>
                </div>
              </div>
              <label class="film-details__comment-label">
                <textarea class="film-details__comment-input" placeholder="← Select reaction, add comment here" name="comment"></textarea>
              </label>
            </div>
          </section>

          ${new RatingSection(this._film.title, this._film.poster).template}

        </form>
      </section>`.trim();
  }

  _getDetailsTableTemplate(tableData) {
    return `
      <table class="film-details__table">
        ${tableData.reduce((acc, {term, cell}) => acc + this._getDetailsRow(term, cell), ``)}
      </table>
    `;
  }

  _getDetailsRow(term, cell) {
    return `
      <tr class="film-details__row">
        <td class="film-details__term">${term}</td>
        <td class="film-details__cell">${cell}</td>
      </tr>`.trim();
  }

}
