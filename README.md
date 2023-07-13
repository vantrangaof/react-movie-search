## This is a simple react project to search for movies using movie API
Coach: JS Mastery

API source: http://www.omdbapi.com?apikey=YOUR_API_KEY<br>
To fetch movies: `${MOVIE_API}&s=${title}`

## Notes:
- React hooks used: useState, useEffect
- MovieCard need a unique key, you can use movie.imdbID as your key in this case
- With target blank, you shall add a rel="noopener noreferrer" to JS window.opener exploiter.<br>
```window.opener.location = 'http://gotcha.badstuff';```<br>
Read more: [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel/noreferrer)

