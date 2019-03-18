/**
 * Фильм
 * @param {string} title         название
 * @param {string} rating        рейтинг
 * @param {number} year          год
 * @param {string} duration      продолжительность
 * @param {string[]} genres      жанр
 * @param {string} poster        постер
 * @param {string} description   описание
 * @param {number} comments      количество комментариев
 * @param {string[]} actors      список актеров
 * @param {number} age           возрастные ограничения
 * @param {string} country       страна производства
 * @param {string} director      режисер
 * @param {string} titleOriginal оригинальное название
 * @param {string} writer        сценарист
 */
export default function Film({
  title, rating, year, duration, genres, poster, description, comments = 0,
  actors, age, country, director, titleOriginal, writer
} = {}) {
  this.title = title;
  this.rating = rating;
  this.year = year;
  this.duration = duration;
  this.genres = genres;
  this.poster = poster;
  this.description = description;
  this.comments = comments;
  this.actors = actors;
  this.age = age;
  this.country = country;
  this.director = director;
  this.titleOriginal = titleOriginal;
  this.writer = writer;
}
