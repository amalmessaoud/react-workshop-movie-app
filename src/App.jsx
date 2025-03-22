// App.js
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        console.log(data)
        setMovies(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div className="loading">Loading movies...</div>;
  if (error) return <div className="loading">Error: {error}</div>;

  return (
    <div className="container">
      <h1 className="title">Movie Collection</h1>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;