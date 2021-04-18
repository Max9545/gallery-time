import React, { useState, useEffect } from 'react';
import './Galleries.css';
import { galleriesSearch } from '../apiCalls.js';
import { denverGalleries } from '../MockData/MockData.js';
import  GalleryCard from '../GalleryCard/GalleryCard.js';
import Header from '../Header/Header.js'
import Loading from '../Loading/Loading';

const Galleries = ({ galleries }) => {

  // const [galleries, setGalleries] = useState();
  const [galleriesDisplay, setGalleriesDisplay] = useState();
  const [loading, setLoading] = useState()

  // useEffect(() => {
  //   setLoading(true)
  //   if (galleries === undefined) {
  //     galleriesSearch(geoLocation.location.lat, geoLocation.location.lng)
  //     .then(data => setGalleries(data))
  //   }
  //   setLoading(false)
  // }, [])

  // useEffect(() => {
  //   if (galleries === undefined) {
  //     setGalleries(denverGalleries);
  //   }
  // }, [])

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
  }, [])

  // makeGalleriesDisplay


  return (
    <section className="galleries-page" data-cy="galleries-page">
      <Header />
      {loading && <Loading/>}
      {!loading && galleriesDisplay && galleriesDisplay}
    </section>
  )
}

export default Galleries;
