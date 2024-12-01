import { useState } from 'react';
import Home from './pages/Home';
import Header from './pages/header';
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
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
