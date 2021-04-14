import './LandingPage.css'
import { citySearch, geoLocatePost, photoSearch } from '../apiCalls'
import { useEffect, useState } from 'react';
import { denverNearbySearch, denverImg}  from '../MockData/MockData.js'
import { Link } from 'react-router-dom';

function LandingPage ({ geoLocation }) {

  const [city, setCity] = useState()
  const [photo, setPhoto] = useState()

  useEffect(() => {
    setCity(denverNearbySearch.results[0]);
  }, [])

  useEffect(() => {
    setPhoto(denverImg);
  },[city])


  // useEffect(() => {
  //   console.log(geoLocation)
  //   if (city === undefined) {
  //    citySearch(geoLocation.location.lat, geoLocation.location.lng)
  //    .then(city => setCity(city.results[0]))
  //   }
  // }, [])

  // useEffect(() => {
  //   if (city !== undefined) {
  //     photoSearch(city.photos[0].photo_reference)
  //     .then(data => setPhoto(data))
  //   }
  // },[city])

  return (
    <article className='landing' data-cy="landing">
      {city && <p className='city-name'data-cy="city-name">You are currently in {city.name}, time for culture!</p>}
      {photo && <img className='city-img'data-cy="city-img"src={photo}/>}
      {city && <Link data-cy="to-galleries"className='to-galleries' to={`/city/${city.name}`}>See Galleries</Link>}
    </article>
  )

}

export default LandingPage
