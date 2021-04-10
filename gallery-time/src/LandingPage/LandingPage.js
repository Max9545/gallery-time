import './LandingPage.css'
import { geoLocatePost, citySearch } from '../apiCalls'
import { useEffect, useState } from 'react';


function LandingPage () {


  const [city, setCity] = useState()
  const [latLon, setLatLon] = useState()

  useEffect(() => {
    geoLocatePost()
    .then(geoData => citySearch(geoData.location.lat, geoData.location.lng))
    .then(data => setCity(data.results[0].name))
  })

  return (
    <p>{city}</p>
  )

}

export default LandingPage