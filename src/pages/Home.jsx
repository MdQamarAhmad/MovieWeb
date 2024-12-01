import React, { useState, createContext, useEffect, useRef } from 'react';
import logo from './assets/logo.png';
import user from './assets/user.png';
import { useNavigate } from 'react-router-dom';
import wallpaper1 from './assets/wallpaper1.jpg';
import wallpaper2 from './assets/wallpaper2.jpg';
import wallpaper3 from './assets/wallpaper3.jpg';
import wallpaper4 from './assets/wallpaper4.jpg';
import './App.css';

export default function Home() {
  const navigate = useNavigate();
  const itemsRef = useRef(null);
  const [value,setValue] = useState(' ');
  const [maxScroll,setMaxScroll] = useState(''); 
  const items = document.querySelector('.items');
  const item = document.querySelectorAll('.item')
  const handleRef = useRef();
  // Navigation function for the search icon
  const handleHeader = () => {
    navigate('/header',{state:{searchText : value,hero : "ajay"}});
  };
  const handleLeft = ()=>{
    if(handleRef.current.scrollLeft > 0){
      handleRef.current.scrollBy({
      left:-100,
      behavior:'smooth'
    })
  }
}
const handleRight = ()=>{
  if(handleRef.current.scrollLeft < maxScroll){
    handleRef.current.scrollBy({
      left:100,
      behavior:'smooth'
    })
  }
}
useEffect(()=>{
      const maxScroll1 = handleRef.current.scrollWidth - handleRef.current.clientWidth;
      setMaxScroll(maxScroll1);
    },[])

  return (
    <div>
      {/* Navigation bar */}

      <nav className="bg-yellow-10" style={{ display: 'flex', justifyContent: 'space-between', padding:'1%', alignItems: 'center',zIndex:'200',position:'sticky',top:'0',backgroundColor: 'rgba(0, 0, 0, 0.5)',  
       boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'}}> 
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
        <div style={{ marginRight: '8%', display: 'flex', alignItems: 'center'}}>
          {/* Search input */}
          <input
          onChange={(e)=>{ setValue(e.target.value)}}
            style={{border:'1px solid black'}}
            id="search"
            type="text"
            placeholder="Search here..."
            className="bg-transparent px-4 py-1  mr-3"
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

<div className="container1" ref={handleRef}>
<div className="part"   style={{ backgroundImage: `url(${wallpaper1})`,backgroundPosition:'center',backgroundRepeat:'no-repeat' ,color:'white'}}>
<button type="button" onClick={handleLeft} className="btn btn-light" style={{position:'absolute',top:'60%',left:'1%',transform:'translate(0,-60%'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/>
</svg></button>
<button type="button" onClick={handleRight} className="btn btn-light" style={{position:'absolute',top:'60%',right:'1%',transform:'translate(-0%,-60%'}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
</svg></button>
    <div className='section'>
    <h1 className='headline'>HOUSE OF THE DRAGON</h1>
    <p className='paragraph'>Set centuries before the events of Game of Thrones, House of the Dragon tells the story of House Targaryen, the legendary family who ruled the Seven Kingdoms of Westeros. The series follows the Targaryen's journey from their beginnings as the last family of dragonlords to their eventual downfall, leading up to the events of George R.R. Martin's book "Fire & Blood".</p>
    <div style={{width:'200px',display:'flex',justifyContent:'space-between',marginTop:'5px',marginBottom:'5px'}}>
    <div className="1">Rating : 6.7+</div>
    <div>|</div>
    <div className="2">View : 2450</div>
    </div>
    <button type="button" className="btn btn-light">Play Now</button>

    </div>
      </div>

  <div className="part" style={{ backgroundImage: `url(${wallpaper2})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',color:'white' }}>    <div className='section'>
    <h1 className='headline'>TRANSFORMERS ONE</h1>
    <p className='paragraph'>Set centuries before the events of Game of Thrones, House of the Dragon tells the story of House Targaryen, the legendary family who ruled the Seven Kingdoms of Westeros. The series follows the Targaryen's journey from their beginnings as the last family of dragonlords to their eventual downfall, leading up to the events of George R.R. Martin's book "Fire & Blood".</p>
    <div style={{width:'200px',display:'flex',justifyContent:'space-between',marginTop:'5px',marginBottom:'5px'}}>
    <div className="1">Rating : 6.7+</div>
    <div>|</div>
    <div className="2">View : 2450</div>
    </div>
    <button type="button" className="btn btn-light">Play Now</button>

    </div></div>
  <div className="part" style={{ backgroundImage: `url(${wallpaper3})`,backgroundPosition:'center',backgroundRepeat:'no-repeat',color:'white' }}>
  <div className='section'>
    <h1 className='headline'>MONEY HIEST</h1>
    <p className='paragraph'>Set centuries before the events of Game of Thrones, House of the Dragon tells the story of House Targaryen, the legendary family who ruled the Seven Kingdoms of Westeros. The series follows the Targaryen's journey from their beginnings as the last family of dragonlords to their eventual downfall, leading up to the events of George R.R. Martin's book "Fire & Blood".</p>
    <div style={{width:'200px',display:'flex',justifyContent:'space-between',marginTop:'5px',marginBottom:'5px'}}>
    <div className="1">Rating : 6.7+</div>
    <div>|</div>
    <div className="2">View : 2450</div>
    </div>
    <button type="button" className="btn btn-light">Play Now</button>

    </div>
  </div>
  <div className="part" style={{ backgroundImage: `url(${wallpaper4})`,backgroundPosition:'top',backgroundRepeat:'no-repeat',color:'white' }}>
  <div className='section'>
    <h1 className='headline'>HOUSE OF THE DRAGON</h1>
    <p className='paragraph'>Set centuries before the events of Game of Thrones, House of the Dragon tells the story of House Targaryen, the legendary family who ruled the Seven Kingdoms of Westeros. The series follows the Targaryen's journey from their beginnings as the last family of dragonlords to their eventual downfall, leading up to the events of George R.R. Martin's book "Fire & Blood".</p>
    <div style={{width:'200px',display:'flex',justifyContent:'space-between',marginTop:'5px',marginBottom:'5px'}}>
    <div className="1">Rating : 6.7+</div>
    <div>|</div>
    <div className="2">View : 2450</div>
    </div>
    <button type="button" className="btn btn-light">Play Now</button>

    </div>
  </div>

  </div>

    </div>
  );
}
