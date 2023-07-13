## This is a simple react project to search for movies using movie API

# API source: http://www.omdbapi.com?apikey=YOUR_API_KEY
To fetch movies: `${MOVIE_API}&s=${title}`

# Coach: JS Mastery

# Notes:
- React hooks used: useState, useEffect
- MovieCard need a unique key, you can use movie.imdbID as your key in this case
- With target blank, you shall add a rel="noopener noreferrer" to JS window.opener exploiter.
window.opener.location = 'http://gotcha.badstuff';
Read more (here)[https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/noreferrer]

