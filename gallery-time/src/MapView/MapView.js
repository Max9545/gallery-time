import React, { useState, useEffect } from 'react';
import './MapView.css';
import { galleriesSearch } from '../apiCalls.js';
import { denverGalleries } from '../MockData/MockData.js'

const MapView = ({ geoLocation }) => {
  const [galleries, setGalleries] = useState();

  // useEffect(() => {
  //   if (galleries === undefined) {
  //     galleriesSearch(geoLocation.location.lat, geoLocation.location.lng)
  //     .then(data => setGalleries(data))
  //   }
  // }, [])
  useEffect(() => {
    if (galleries === undefined) {
      setGalleries(denverGalleries);
    }
  }, [])

  return (
    <h1>test</h1>
  )
}

export default MapView;
