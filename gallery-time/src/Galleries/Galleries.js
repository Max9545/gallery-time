import React, { useState, useEffect } from 'react';
import './Galleries.css';
import { galleriesSearch } from '../apiCalls.js';
import { denverGalleries } from '../MockData/MockData.js';
import  GalleryCard from '../GalleryCard/GalleryCard.js';
import Header from '../Header/Header.js'

const Galleries = ({ geoLocation }) => {
  
  const [galleries, setGalleries] = useState();
  const [galleriesDisplay, setGalleriesDisplay] = useState();

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

  useEffect(() => {
    if(galleries) {
      const galleriesList = galleries.results.map(gallery => {
        return (
          <GalleryCard
            key={gallery.place_id}
            id={gallery.place_id}
            name={gallery.name}
            rating={gallery.rating}
          />
        )
      })
      setGalleriesDisplay(galleriesList);
    }
  }, [galleries])


  return (
    <section className="galleries-page" data-cy="galleries-page">
      <Header />
      {galleriesDisplay}
    </section>
  )
}

export default Galleries;
