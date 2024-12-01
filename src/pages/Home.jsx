import React, { useState, createContext, useEffect, useRef } from 'react';
import logo from './assets/logo.png';
import user from './assets/user.png';
import { useNavigate } from 'react-router-dom';
import './App.css';

export const GlobalInfo = createContext();

export default function Home() {
  const navigate = useNavigate();
  const itemsRef = useRef(null);
  const oneRef = useRef(null);
  const scrollRef  = useRef(null);
  const items = document.querySelector('.items');
  const item = document.querySelectorAll('.item');
  
    
  function handleLeft(){
   items.appendChild(items.children[0]);
  }

  function handleRight(){
    items.prepend(items.children[item.length - 1]);


  }


    
 

  // Navigation function for the search icon
  const handleHeader = () => {
    navigate('/header');
  };

  return (
    <div>
      {/* Navigation bar */}
      <nav className="bg-yellow-10" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2%', alignItems: 'center' }}>
        <ul className="list-none" style={{ display: 'flex', marginLeft: '8%', alignItems: 'center' }}>
          {/* Logo */}
          <li style={{ marginRight: '22px', cursor: 'pointer' }}>
            <img src={logo} alt="logo" style={{ width: '200px', height: '50px', objectFit: 'contain' }} />
          </li>
          {/* Navigation links */}
          <li style={{ marginRight: '22px', cursor: 'pointer' }}>TV Shows</li>
          <li style={{ cursor: 'pointer' }}>Movies</li>
        </ul>

        {/* Search input and user icon */}
        <div style={{ marginRight: '8%', display: 'flex', alignItems: 'center' }}>
          {/* Search input */}
          <input
            id="search"
            type="text"
            placeholder="Search here..."
            className="bg-transparent px-4 py-1 border-none mr-3"
          />

          {/* Search icon */}
          <label htmlFor="search" className="cursor-pointer" onClick={handleHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </label>

          {/* User icon */}
          <img src={user} alt="user" style={{ width: '6vw', height: '6vh', objectFit: 'contain', cursor: 'pointer' }} />
        </div>
      </nav>

<div className="container"></div>

      <button id="left" onClick={handleLeft}>Left</button>
      <button id="right" onClick={handleRight}>Right</button>

      <GlobalInfo.Provider value={{ appColor: "testExample" }}>
        {/* Add components inside the provider if needed */}
      </GlobalInfo.Provider>
    </div>
  );
}
