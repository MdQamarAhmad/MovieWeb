import React, { useState } from "react";
import YouTube from "react-youtube";
import { useLocation } from "react-router-dom";

export default function MovieInfo() {
  const location = useLocation();
  const movieData = location.state.movieData;
  const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    movieData.Title + " trailer"
  )}`;
  const [trailerKey, setTrailerKey] = useState("");

  return (
    <>
      <h1>movieData.Title</h1>
      <img src={movieData.Poster} alt="" />
      <a
        className="border border-gray-200 px-4 py-2 mt-4 hover:bg-gray-200 inline-block"
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer">
        Watch Trailer on YouTube
      </a>
    </>
  );
}
