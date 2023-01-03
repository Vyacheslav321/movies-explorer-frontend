module.exports.BASE_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://api.movies-explorer.dip.nomoredomains.icu';

module.exports.SOURCE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

// PATTERN="/[a-zа-яё-\s]+/gi"