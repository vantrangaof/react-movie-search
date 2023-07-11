import { useEffect, useState } from 'react'
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard'

const MOVIE_API = "http://www.omdbapi.com?apikey=b6003d8a";


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")

  // fetch movie objects
  const fetchMovies = async (title) => {
    const res = await fetch(`${MOVIE_API}&s=${title}`)
    const data = await res.json()
    setMovies(data.Search)
  }

  useEffect(() => {
    fetchMovies('Spider')
  },[])

  return (
    <div className="app">
      {/* App title */}
        <span className="title">TMDb</span>
        <h1> Movie World </h1>
      {/* Search bar */}
      <div className="search">
        <input
          placeholder='Movie title'
          value={searchTerm}
          onChange={
            (e) =>  setSearchTerm(e.target.value)
          }
          onKeyPress={(e) => {
              if (e.key === "Enter") {
                fetchMovies(searchTerm)
              }
            }
          }
        />
        <img
          src={SearchIcon}
          alt="search logo"
          onClick={() => fetchMovies(searchTerm)}
        />
      </div>
        {
          movies?.length > 0 ?
          (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard  key={movie.imdbID} movie={movie} />
              ))}
            </div>
           ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
           )
        }

    </div>
  );
}

export default App;
