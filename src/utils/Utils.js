import { SHORTMOVIE_DURATION } from "./Constants";

// обработчик поиска
// function handleSearch(movies, searchKeyword) {
//   let searchResult = [];
//   movies.forEach((movie) => {
//     if (movie.nameRU.indexOf(searchKeyword) !== -1) {
//       return searchResult.push(movie);
//     }
//   });
//   return searchResult;
// }

function handleSearch(movies, searchKeyword) {
  let searchResult = [];
  const searchKeywordNormalize = searchKeyword.toLowerCase().trim();
  movies.forEach((movie) => {
    const movieRuNormalize = String(movie.nameRU).toLowerCase().trim();
    const movieEnNormalize = String(movie.nameEN).toLowerCase().trim();
    if (
      movieRuNormalize.indexOf(searchKeywordNormalize) !== -1 ||
      movieEnNormalize.indexOf(searchKeywordNormalize) !== -1
    ) {
      return searchResult.push(movie);
    }
  });
  return searchResult;
}

function handleFilterShortMovies(movies) {
  return movies.filter((movie) => movie.duration < SHORTMOVIE_DURATION);
}

function filterMovies(movies, searchKeyword, shortMoviesChecked) {
  const searchResult = handleSearch(movies, searchKeyword);
  if (shortMoviesChecked) {
    console.log(shortMoviesChecked);
    return handleFilterShortMovies(searchResult);
  } else {
    return searchResult;
  }
}

// получение ссылки для карточки фильма
function getImage(movie) {
  if (movie.thumbnail) {
    return movie.thumbnail;
  } else {
    return `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`;
  }
}

export { filterMovies, getImage };
