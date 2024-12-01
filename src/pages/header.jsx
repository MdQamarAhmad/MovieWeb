import React, { useEffect, useState, useContext } from 'react';
import logo from './assets/logo.png';
import user from './assets/user.png';
import { useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  console.log(location.state.hero);
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState(location.state.searchText);
  const [value, setValue] = useState("");

  const dataHandler = async () => {
    try {
      const response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=de15ef2f&s=${search}`);
      const data = await response.json();
      setMovie(data.Search);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    dataHandler();
  }, [search]);

  return (
    <div>
      <nav
        className='bg-yellow-10'
          style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '2%',
          alignItems: 'center',
        }}
      >
        <ul className='list-none' style={{ display: 'flex', marginLeft: '8%', alignItems: 'center' }}>
          <li style={{ marginRight: '22px', cursor: 'pointer' }}>
            <img src={logo} alt="logo" style={{ width: '200px', height: '50px', objectFit: 'contain' }} />
          </li>
          <li style={{ marginRight: '22px', cursor: 'pointer' }}>TV Shows</li>
          <li style={{ cursor: 'pointer' }}>Movies</li>
        </ul>

        <div style={{ marginRight: '8%', display: 'flex', alignItems: 'center' }}>
          <input
            id='search'
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder='Search here...'
            className='bg-transparent px-4 py-1 border-none mr-3'
          />
          <label
            htmlFor="search"
            className='cursor-pointer'
            onClick={() => setSearch(value)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </label>
          <img src={user} alt="user" style={{ width: '6vw', height: '6vh', objectFit: 'contain', cursor: 'pointer' }} />
        </div>
      </nav>

      {/* Movie Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '12px' }}>
        {movie.map((data, index) => (
          <div key={index} className="card" style={{ padding: '16px' }}>
            <h1>{data.Title}</h1>
            <img style={{ width: '100%', height: 'auto', objectFit: 'cover' }} src={data.Poster} alt="Movie Poster" />
          </div>
        ))}
      </div>
    </div>
  );
}
