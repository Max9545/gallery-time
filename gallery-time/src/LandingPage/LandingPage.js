import './LandingPage.css'
import { citySearch, geoLocatePost, photoSearch } from '../apiCalls'
import { useEffect, useState } from 'react';
import { denverNearbySearch, denverImg}  from '../MockData/MockData.js'
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';

function LandingPage ({ geoLocation }) {

  const [city, setCity] = useState()
  const [photo, setPhoto] = useState()

  // useEffect(() => {
  //   setCity(denverNearbySearch.results[0]);
  // }, [])

  // useEffect(() => {
  //   setPhoto(denverImg);
  // },[city])

  useEffect(() => {
    if (city === undefined) {
      console.log(geoLocation)
     citySearch(geoLocation.location.lat, geoLocation.location.lng)
     .then(city => setCity(city.results[0]))
    }
  }, [])

  useEffect(() => {
    if (city !== undefined) {
      photoSearch(city.photos[0].photo_reference)
      .then(data => setPhoto(data))
    }
  },[city])

  return (
    <section className='landing' data-cy="landing">
      <Header />
      <article className='city-container'>
        {city && <p className='city-name'data-cy="city-name">You are currently in {city.name}, time for culture!</p>}
      </article>
      <article className='img-container'>
        {photo && <img className='city-img'data-cy="city-img"src={photo}/>}
      </article>
      <article className='galleries'>
        {city && <Link data-cy="to-galleries"className='to-galleries' to={`/city/${city.name}`}>See Galleries</Link>}
        <Link to='/favorites' className='see-favorites-landing' data-cy='see-favorites-landing'>See Favorites</Link>
      </article>
    </section>
  )

}

export default LandingPage
