import { useState } from 'react';
import Home from './pages/Home';
import Header from './pages/header';
import Movie from './pages/movie.jsx';
import MovieMovie from './pages/moviemovie.jsx';
import SearchPage from './pages/SearchPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home /> } />
       <Route path="/search" element={<SearchPage />} />
       <Route path="/header" element={<Header />} />
       <Route path="/movie" element={<Movie />} />
       <Route path="/moviemovie" element={<MovieMovie />} />
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
