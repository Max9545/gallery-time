import './LandingPage.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import React, { useState } from 'react';
import OffLine from '../OffLine/OffLine';
import PropTypes from 'prop-types';

function LandingPage ({ city, photo, setUserCity }) {

  const [cityToSelect, setCityToSelect] = useState() 

  const handleChange = event => {
    setCityToSelect(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setUserCity(cityToSelect)
  }

  return (
    <section className='landing' data-cy="landing">
    <Header />
    {!photo && <OffLine />}
    <article className='city-container'>
      <p className='city-name'data-cy="city-name">You are currently in {city.name}, time for culture!</p>
    </article>
    <form>
      Select Your Own City
      <input type='text' value={cityToSelect} onChange={e => handleChange(e)} name='city-select' data-cy='city-select'/>
      <input type='submit' value='Change City'  onClick={e => handleSubmit(e)}/>
    </form>
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
