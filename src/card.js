/**
 * Карточка фильма
 * @param {string} title       название
 * @param {string} rating      рейтинг
 * @param {number} year        год
 * @param {string} duration    продолжительность
 * @param {string} genre       жанр
 * @param {string} poster      постер
 * @param {string} description описание
 * @param {number} comments    количество комментариев
 */
export default function Card(title, rating, year, duration, genre, poster, description, comments = 0) {
  this.title = title;
  this.rating = rating;
  this.year = year;
  this.duration = duration;
  this.genre = genre;
  this.poster = poster;
  this.description = description;
  this.comments = comments;
}
