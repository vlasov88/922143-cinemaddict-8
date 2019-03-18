export class RatingSection {

  constructor(title, poster, userRating = 5) {
    this._title = title;
    this._poster = poster;
    this._userRating = userRating;
  }

  get template() {
    return `
      <section class="film-details__user-rating-wrap">
        <div class="film-details__user-rating-controls">
          <span class="film-details__watched-status film-details__watched-status--active">Already watched</span>
          <button class="film-details__watched-reset" type="button">undo</button>
        </div>

        <div class="film-details__user-score">
          <div class="film-details__user-rating-poster">
            <img src="${this._poster}" alt="film-poster" class="film-details__user-rating-img">
          </div>

          <section class="film-details__user-rating-inner">
            <h3 class="film-details__user-rating-title">${this._title}</h3>

            <p class="film-details__user-rating-feelings">How you feel it?</p>

            <div class="film-details__user-rating-score">
              ${Array.from({length: 9}, (_, i) => this._getRatingElement(i + 1, this._userRating === i + 1)).join(``)}
            </div>
          </section>
        </div>
      </section>`.trim();
  }

  _getRatingElement(index, checked = false) {
    return `
      <input type="radio" name="score" class="film-details__user-rating-input visually-hidden"
        value="${index}" id="rating-${index}"${checked ? `checked` : ``}>
      <label class="film-details__user-rating-label" for="rating-${index}">${index}</label>
    `.trim();
  }

}

