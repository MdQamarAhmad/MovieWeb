import React from "react";
import { useNavigate } from "react-router-dom";
useNavigate;

export default function MovieCard({ movieData }) {
  const navigate = useNavigate();

  const handleMovieClick = (movieData) => {
    navigate("/movieinfo", { state: { movieData } });
  };

  return (
    <div
      className="card hover:border-red-500"
      style={{ padding: "16px" }}
      onClick={() => handleMovieClick(movieData)}>
      <h1>{movieData.Title}</h1>
      <img
        style={{ width: "100%", height: "auto", objectFit: "cover" }}
        src={movieData.Poster}
        alt={movieData.Title}
      />
    </div>
  );
}
