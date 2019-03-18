import Film from '../film';
import {
  getRandomTitle,
  getRandomRating,
  getRandomYear,
  getRandomDuration,
  getRandomGenres,
  getRandomPoster,
  getRandomDescription,
  getRandomComments,
  getRandomActors,
  getRandomAge,
  getRandomCountry,
  getRandomDirector,
  getRandomTitleOriginal,
  getRandomWriter
} from './data-film';

/**
 * Фабрика для фильма
 * @return {Film} фильм
 */
export const getFilm = () =>
  new Film({
    title: getRandomTitle(),
    rating: getRandomRating(),
    year: getRandomYear(),
    duration: getRandomDuration(),
    genres: getRandomGenres(),
    poster: getRandomPoster(),
    description: getRandomDescription(),
    comments: getRandomComments(),
    actors: getRandomActors(),
    age: getRandomAge(),
    country: getRandomCountry(),
    director: getRandomDirector(),
    titleOriginal: getRandomTitleOriginal(),
    writer: getRandomWriter(),
  });
