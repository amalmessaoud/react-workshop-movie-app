// MovieCard.js
import React, { useState } from 'react';
import heartFilled from '../public/heart-solid.svg'; 
import heartOutline from '../public/heart-regular.svg';

const MovieCard = ({ movie }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    console.log(isLiked)
  };

  return (
    <div className="movie-card">
      <img 
        src={movie.Poster} 
        alt={movie.Title}
        className="movie-poster"
      />
      <div className="movie-info">
        <h2 className="movie-title">{movie.Title}</h2>
        <div className="movie-details">
          <p className="movie-year">📅 {movie.Year}</p>
          <p className="movie-runtime">⏱️ {movie.Runtime}</p>
        </div>
        <button onClick={handleLike} className="like-btn">
          <img 
            src={isLiked ? heartFilled : heartOutline} 
            alt={isLiked ? "Liked" : "Not Liked"}
            className="heart-icon"
          />
        </button>
      </div>
    </div>
  );
};

export default MovieCard;