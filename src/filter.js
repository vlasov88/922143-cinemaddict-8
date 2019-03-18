export default class Filter {

  constructor(link, caption, amount = null, isAdditional = false) {
    this._link = link;
    this._caption = caption;
    this._amount = amount;
    this._isAdditional = isAdditional;
  }

  /**
   * Получить новый элемент фильтра
   * @return {string} новый элемент фильтра
   */
  get template() {
    return `
    <a href="${this._link}"
      class="main-navigation__item${this._isAdditional ? ` main-navigation__item--additional` : ``}">
      ${this._caption}${this._amount ? ` <span class="main-navigation__item-count">${this._amount}</span>` : ``}
    </a>`.trim();
  }

}

