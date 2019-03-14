import Card from './card';
import {rand} from './utils';
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

/**
 * Получить карточку с фильмом
 * @return {Card} карточка с фильмом
 */
export const getCard = () => {
  let description = ``;
  const count = rand(1, 3);
  for (let i = 0; i <= count; i++) {
    description += `${description.length > 0 ? ` ` : ``}${descriptions[rand(0, descriptions.length - 1)]}`;
  }
  const momentDuration = moment.duration(rand(30, 180), `minutes`);
  const durationHours = momentDuration.hours();
  const durationMinutes = momentDuration.minutes();
  const duration = `${durationHours > 0 ? `${durationHours}h` : ``}${durationHours > 0 && durationMinutes > 0 ? `&nbsp;` : ``}${durationMinutes > 0 ? `${durationMinutes}m` : ``}`;
  return new Card(
      titles[rand(0, titles.length - 1)],
      `${rand(2, 8)}.${rand(0, 9)}`,
      rand(1920, 2019),
      duration,
      genres[rand(0, genres.length - 1)],
      `${posters[rand(0, posters.length - 1)]}`,
      description,
      rand(0, 100)
  );
};

