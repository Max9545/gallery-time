import './LandingPage.css'
import { geoLocatePost } from '../apiCalls'
import { useEffect, useState } from 'react';


function LandingPage () {


  const [city, setCity] = useState()
  const [latLon, setLatLon] = useState()

  useEffect(() => {
    geoLocatePost()
    .then(data => setLatLon(data.location))
  })

  return (
    <p>HI</p>
  )

}

export default LandingPage