import './LandingPage.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import React from 'react';
import OffLine from '../OffLine/OffLine';
import PropTypes from 'prop-types';

function LandingPage ({ city, photo }) {

  return (
    <section className='landing' data-cy="landing">
    <Header />
    {!photo && <OffLine />}
    <article className='city-container'>
      <p className='city-name'data-cy="city-name">You are currently in {city.name}, time for culture!</p>
    </article>
    <article className='img-container'>
      <img className='city-img'data-cy="city-img" alt="The city you are in."src={photo}/>
    </article>
    <article className='galleries'>
      {city && <Link data-cy="to-galleries" className='landing-buttons' to={`/city/${city.name}`}>See Galleries</Link>}
      <Link to='/favorites' className='landing-buttons' data-cy='see-favorites-landing'>See Favorites</Link>
    </article>
  </section>
  )
}

export default LandingPage

LandingPage.propTypes = {
  city: PropTypes.object,
  photo: PropTypes.string
};
