/**
 * Получить новый элемент фильтра
 * @param {string} link          ссылка
 * @param {string} caption       название
 * @param {number} amount        количество
 * @param {boolean} isAdditional true если элемент дополнительный
 * @return {string} новый элемент фильтра
 */
export default (link, caption, amount = null, isAdditional = false) => `<a
  href="${link}"
  class="main-navigation__item${isAdditional ? ` main-navigation__item--additional` : ``}">
    ${caption}${amount ? ` <span class="main-navigation__item-count">${amount}</span>` : ``}
  </a>`;
