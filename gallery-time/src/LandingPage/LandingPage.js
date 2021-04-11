import './LandingPage.css'
import { geoLocatePost, citySearch, photoSearch } from '../apiCalls'
import { useEffect, useState } from 'react';


function LandingPage () {


  const [city, setCity] = useState()
  const [latLon, setLatLon] = useState()
  const [photo, setPhoto] = useState()
 
  useEffect(() => {
    geoLocatePost()
    .then(geoData => citySearch(geoData.location.lat, geoData.location.lng))
    .then(city => setCity(city.results[0]))
  }, [])

  useEffect(() => {
    if (city !== undefined) {
      console.log('in city', city.photos[0].photo_reference)
      photoSearch(city.photos[0].photo_reference)
      .then(data => setPhoto(data))
      
    }
  },[city])

  return (
    <>
    {city && <p>{city.name}</p>}
    {photo && <img src={photo}/>}
    </>
  )

}

export default LandingPage