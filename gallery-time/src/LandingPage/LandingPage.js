import './LandingPage.css'
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import React from 'react'
import OffLine from '../OffLine/OffLine'
import Loading from '../Loading/Loading.js'

function LandingPage ({ city, photo }) {

  return ( 
    <section className='landing' data-cy="landing">
    <Header />
    <article className='city-container'>
      <p className='city-name'data-cy="city-name">You are currently in {city.name}, time for culture!</p>
    </article>
    <article className='img-container'>
      <img className='city-img'data-cy="city-img"src={photo}/>
    </article>
    <article className='galleries'>
      {city && <Link data-cy="to-galleries" className='landing-buttons' to={`/city/${city.name}`}>See Galleries</Link>}
      <Link to='/favorites' className='landing-buttons' data-cy='see-favorites-landing'>See Favorites</Link>
    </article>
  </section>
  )

}

export default LandingPage


