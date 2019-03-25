import {getRandomValue, getRandomValues, getRandomInteger} from "./randomizes";
import moment from 'moment';

/** Список заголовков */
const titles = [
  `The Shawshank Redemption`,
  `The Green Mile`,
  `Forrest Gump`,
  `Schindler's List`,
  `Intouchables`,
  `Léon`,
  `Inception`,
  `The Lion King`,
  `Fight Club`,
  `Иван Васильевич меняет профессию`,
  `La vita è bella`,
  `Knockin' on Heaven's Door`,
  `The Godfather`,
  `Pulp Fiction`,
  `The Prestige`
];

/** Имена файлов постеров */
const posters = [
  `accused.jpg`,
  `blackmail.jpg`,
  `blue-blazes.jpg`,
  `fuga-da-new-york.jpg`,
  `moonrise.jpg`,
  `three-friends.jpg`
];

/** Заготовки для описания */
const descriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

/** Жанры фильмов */
const genres = [
  `Action`,
  `Adventure`,
  `Comedy`,
  `Classic`,
  `Drama`,
  `Fantasy`,
  `Horror`,
  `Science Fiction`,
  `Westerns`
];

const actors = [`Samuel L. Jackson`, `Catherine Keener`, `Sophia Bush`];
const ages = [0, 13, 18];
const countries = [`USA`, `France`, `Canada`];
const directors = [`Brad Bird`];
const writers = [`Brad Bird`];

export const getRandomTitle = () =>
  getRandomValue(titles);

export const getRandomRating = () =>
  `${getRandomInteger(2, 8)}.${getRandomInteger(0, 9)}`;

export const getRandomYear = () =>
  getRandomInteger(1920, 2019);

export const getRandomDuration = () => {
  const momentDuration = moment.duration(getRandomInteger(30, 180), `minutes`);
  const durationHours = momentDuration.hours();
  const durationMinutes = momentDuration.minutes();
  return `${durationHours > 0 ? `${durationHours}h` : ``}${durationHours > 0 && durationMinutes > 0 ? `&nbsp;` : ``}${durationMinutes > 0 ? `${durationMinutes}m` : ``}`;
};

export const getRandomGenres = () =>
  getRandomValues(genres, getRandomInteger(1, 3));

export const getRandomPoster = () =>
  `images/posters/${getRandomValue(posters)}`;

export const getRandomDescription = () =>
  getRandomValues(descriptions, getRandomInteger(1, 3)).join(` `);

export const getRandomComments = () =>
  getRandomInteger(0, 100);

export const getRandomActors = () =>
  getRandomValues(actors, getRandomInteger(1, 3));

export const getRandomAge = () =>
  getRandomValue(ages);

export const getRandomCountry = () =>
  getRandomValue(countries);

export const getRandomDirector = () =>
  getRandomValue(directors);

export const getRandomTitleOriginal = () =>
  getRandomValue(titles);

export const getRandomWriter = () =>
  getRandomValue(writers);

