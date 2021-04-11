import './LandingPage.css'
import { citySearch, photoSearch } from '../apiCalls'
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


//   useEffect(() => {
//     if (city === undefined) {
//      citySearch(geoLocation.location.lat, geoLocation.location.lng)
//      .then(city => setCity(city.results[0]))
//     }
//   }, [])
//
//   useEffect(() => {
//     if (city !== undefined) {
//       photoSearch(city.photos[0].photo_reference)
//       .then(data => setPhoto(data))
//     }
//   },[city])

  return (
    <>
      {city && <p>{city.name}</p>}
      {photo && <img src={photo}/>}
      {city && <Link className='to-galleries' to={`/${city.name}`}>See Galleries</Link>}
    </>
  )

}

export default LandingPage
