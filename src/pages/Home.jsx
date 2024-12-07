import React, { useState, useEffect, useRef } from 'react';

import logo from './assets/logo.png';
import user from './assets/user.png';
import { useNavigate } from 'react-router-dom';
import wallpaper1 from './assets/wallpaper1.jpg';
import wallpaper2 from './assets/wallpaper2.jpg';
import wallpaper3 from './assets/wallpaper3.jpg';
import wallpaper4 from './assets/wallpaper4.jpg';
import wallpaper5 from './assets/wallpaper5.jpg';
import wallpaper6 from './assets/wallpaper6.jpg';
import wallpaper7 from './assets/wallpaper7.jpg';
import wallpaper8 from './assets/wallpaper8.jpg';
import wallpaper9 from './assets/wallpaper9.jpg';
import wallpaper10 from './assets/wallpaper10.jpg';
import wallpaper11 from './assets/wallpaper11.jpg';
import wallpaper12 from './assets/wallpaper12.jpg';
import wallpaper13 from './assets/wallpaper13.jpg';
import wallpaper14 from './assets/wallpaper14.jpg';
import wallpaper15 from './assets/wallpaper15.jpg';
import wallpaper16 from './assets/wallpaper16.jpg';
import wallpaper17 from './assets/wallpaper17.jpg';
import wallpaper18 from './assets/wallpaper18.jpg';

import './App.css';

export default function Home() {
  const navigate = useNavigate();
const imgCollection = [{imgUrl:wallpaper5,name:'JOKER'},{imgUrl:wallpaper6,name:'DRACULA'},{imgUrl:wallpaper7,name:'300'},{imgUrl:wallpaper8,name:'AFTER EARTH'},{imgUrl:wallpaper9,name:'JURASSIC WORLD'},{imgUrl:wallpaper10,name:'WAkanda FOREVER'},{imgUrl:wallpaper1,name:'IMAGINE DRAGON'},{imgUrl:wallpaper2,name:'TRANSFORMER'}];
const imgCollection1 = [{imgUrl:wallpaper11,name:'JOKER'},{imgUrl:wallpaper12,name:'DRACULA'},{imgUrl:wallpaper13,name:'300'},{imgUrl:wallpaper14,name:'AFTER EARTH'},{imgUrl:wallpaper15,name:'JURASSIC WORLD'},{imgUrl:wallpaper16,name:'WAkanda FOREVER'},{imgUrl:wallpaper17,name:'IMAGINE DRAGON'},{imgUrl:wallpaper18,name:'TRANSFORMER'}];
const imgCollection2 = [{imgUrl:wallpaper9,name:'JURASSIC WORLD'},{imgUrl:wallpaper10,name:'WAkanda FOREVER'},{imgUrl:wallpaper1,name:'IMAGINE DRAGON'},{imgUrl:wallpaper2,name:'TRANSFORMER'},{imgUrl:wallpaper5,name:'JOKER'},{imgUrl:wallpaper6,name:'DRACULA'},{imgUrl:wallpaper7,name:'300'},{imgUrl:wallpaper8,name:'AFTER EARTH'}]
const imgCollection3 = [{imgUrl:wallpaper15,name:'JURASSIC WORLD'},{imgUrl:wallpaper16,name:'WAkanda FOREVER'},{imgUrl:wallpaper17,name:'IMAGINE DRAGON'},{imgUrl:wallpaper18,name:'TRANSFORMER'},{imgUrl:wallpaper11,name:'JOKER'},{imgUrl:wallpaper12,name:'DRACULA'},{imgUrl:wallpaper13,name:'300'},{imgUrl:wallpaper14,name:'AFTER EARTH'}];
  const [value,setValue] = useState('');
  const [maxScroll,setMaxScroll] = useState('');
  const [maxMove,setMaxMove] = useState('');
  const imgCollectionRef = useRef(null);
  const singleImgRef = useRef(null)
  const handleRef = useRef();

const handleMovie = ()=>{
  navigate('/moviemovie')
}

const handleTvShow = () => {
  navigate('/movie',{state:{tvShow : "TV SHOW"}});
}

  const handleHeader = () => {
    navigate('/header',{state:{searchText : value}});
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
const handleLeft1 = ()=>{
  const singleImg = singleImgRef.current.clientWidth;
  const singleImg1 = singleImg + 34;  
  imgCollectionRef.current.scrollBy({
      left: -singleImg1,
      behavior: 'smooth',
    });
  
}
const handleRight1 = ()=>{
  const singleImg = singleImgRef.current.clientWidth;
  const singleImg1 = singleImg+34;
  imgCollectionRef.current.scrollBy({
      left: singleImg1,
      behavior: 'smooth',
    });
  
  }



useEffect(()=>{
  const maxScroll1 = handleRef.current.scrollWidth - handleRef.current.clientWidth;
  const maxScroll2 = imgCollectionRef.current.scrollWidth-imgCollectionRef.current.clientWidth; 
  setMaxScroll(maxScroll1);
  setMaxMove(maxScroll2);
    },[])

  return (
    <div>

      <nav className="bg-yellow-10" style={{ display: 'flex', justifyContent: 'space-between', padding:'1%', alignItems: 'center',zIndex:'200',position:'sticky',top:'0',  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',backgroundColor:'black',opacity:'0.9'
       }}> 
        <ul className="list-none" style={{ display: 'flex', marginLeft: '8%', alignItems: 'center' }}>
          {/* Logo */}
          <li style={{ marginRight: '22px', cursor: 'pointer' }}>
            <img src={logo} alt="logo" style={{ width: '200px', height: '50px', objectFit: 'contain' }} />
          </li>
          {/* Navigation links */}
          <li style={{ marginRight: '22px', cursor: 'pointer' }} onClick={handleTvShow}>TV Shows</li>
          <li style={{ cursor: 'pointer' }} onClick={handleMovie}>Movies</li>
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

  </div><h2 style={{position:'relative',left:'2.5%',paddingBottom:'10px',paddingTop:'10px',fontWeight:'bolder'}}>Trending</h2>
  <div style={{display:'flex',justifyContent:'space-between',height:'1px'}}>
<div style={{width:'25px',height:'25px',backgroundColor:'black',color:'white',position:'relative',top:'10rem',left:'1.5rem',borderRadius:'20px',display:'grid',placeItems:'center'}} onClick={handleLeft1}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg></div>

<div style={{width:'25px',height:'25px',backgroundColor:'black',color:'white',position:'relative',top:'10rem',right:'1.5rem',borderRadius:'20px',display:'grid',placeItems:'center'}} onClick={handleRight1}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg></div>
</div>

  <div className='item1' ref={imgCollectionRef}>
  {imgCollection.map((e,ind)=>{
  return <div key={ind} className='imgCollection' ref={singleImgRef}>
   <img style={{width:'230px',height:'240px',objectFit:'cover'}} src={e.imgUrl} alt="error" />
   <h2>{e.name}</h2>
   <div style={{display:'flex',justifyContent:'space-between'}}>
    <div style={{width:'40%'}}>March 20th 2024</div>
    <div style={{width:'40%'}}>Rating :7.2</div>
    </div>
    </div>
})}
  </div>

  <h1 style={{position:'relative',left:'2.5%',paddingBottom:'10px',paddingTop:'10px',fontWeight:'bolder'}}>Now Playing</h1>
<div style={{display:'flex',justifyContent:'space-between',height:'1px'}}>
  <div style={{width:'25px',height:'25px',backgroundColor:'black',color:'white',position:'relative',top:'10rem',left:'1.5rem',borderRadius:'20px',display:'grid',placeItems:'center'}} onClick={handleLeft1}><svg  width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg></div>

<div style={{width:'25px',height:'25px',backgroundColor:'black',color:'white',position:'relative',top:'10rem',right:'1.5rem',borderRadius:'20px',display:'grid',placeItems:'center'}} onClick={handleRight1}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg></div>
</div>
  <div className='item1' ref={imgCollectionRef}>
{imgCollection3.map((e,ind)=>{
  return <div key={ind} className='imgCollection' ref={singleImgRef}>
   <img style={{width:'230px',height:'240px',objectFit:'cover'}} src={e.imgUrl} alt="error" />
   <h2>{e.name}</h2>
   <div style={{display:'flex',justifyContent:'space-between'}}>
    <div style={{width:'40%'}}>March 20th 2024</div>
    <div style={{width:'40%'}}>Rating :7.2</div>
    </div>
    </div>
})}
  </div>

  <h2 style={{position:'relative',left:'2.5%',paddingBottom:'10px',paddingTop:'10px',fontWeight:'bolder'}}>Top Rated Movies</h2>
  <div style={{display:'flex',justifyContent:'space-between',height:'1px'}}>
<div style={{width:'25px',height:'25px',backgroundColor:'black',color:'white',position:'relative',top:'10rem',left:'1.5rem',borderRadius:'20px',display:'grid',placeItems:'center'}} onClick={handleLeft1}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg></div>

<div style={{width:'25px',height:'25px',backgroundColor:'black',color:'white',position:'relative',top:'10rem',right:'1.5rem',borderRadius:'20px',display:'grid',placeItems:'center'}} onClick={handleRight1}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg></div>
</div>

  <div className='item1' ref={imgCollectionRef}>
  {imgCollection1.map((e,ind)=>{
  return <div key={ind} className='imgCollection' ref={singleImgRef}>
   <img style={{width:'230px',height:'240px',objectFit:'cover'}} src={e.imgUrl} alt="error" />
   <h2>{e.name}</h2>
   <div style={{display:'flex',justifyContent:'space-between'}}>
    <div style={{width:'40%'}}>March 20th 2024</div>
    <div style={{width:'40%'}}>Rating :7.2</div>
    </div>
    </div>
})}
  </div>

  <h2 style={{position:'relative',left:'2.5%',paddingBottom:'10px',paddingTop:'10px',fontWeight:'bolder'}}>Popular TV Show</h2>
  <div style={{display:'flex',justifyContent:'space-between',height:'1px'}}>
<div style={{width:'25px',height:'25px',backgroundColor:'black',color:'white',position:'relative',top:'10rem',left:'1.5rem',borderRadius:'20px',display:'grid',placeItems:'center'}} onClick={handleLeft1}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"/>
</svg></div>

<div style={{width:'25px',height:'25px',backgroundColor:'black',color:'white',position:'relative',top:'10rem',right:'1.5rem',borderRadius:'20px',display:'grid',placeItems:'center'}} onClick={handleRight1}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg></div>
</div>

  <div className='item1' ref={imgCollectionRef}>
  {imgCollection2.map((e,ind)=>{
  return <div key={ind} className='imgCollection' ref={singleImgRef}>
   <img style={{width:'230px',height:'240px',objectFit:'cover'}} src={e.imgUrl} alt="error" />
   <h2>{e.name}</h2>
   <div style={{display:'flex',justifyContent:'space-between'}}>
    <div style={{width:'40%'}}>March 20th 2024</div>
    <div style={{width:'40%'}}>Rating :7.2</div>
    </div>
    </div>
})}
  </div><br /><br /><br />
  <a href="https://www.youtube.com/embed/x85ZonVTero" target='frame'>Click OnMe</a>
    <iframe name='frame' title='Embedded code' width="400" height="400" allowFullScreen ></iframe>
    <br /><br /><br />
    </div>

  );
}
