import React, { useState, useEffect } from 'react';
import './MapView.css';
import { galleriesSearch } from '../apiCalls.js';
import

const MapView = () => {
  const [galleries, setGalleries] = useState();

  useEffect(() => {
    if (galleries === undefined) {
      // galleriesSearch
    }
  }, [])

  return (
    <h1>test</h1>
  )
}

export default MapView;
