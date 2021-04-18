import React, { useState, useEffect } from 'react';
import './Galleries.css';
import { denverGalleries } from '../MockData/MockData.js';
import  GalleryCard from '../GalleryCard/GalleryCard.js';
import Header from '../Header/Header.js'
import Loading from '../Loading/Loading';

const Galleries = ({ galleries, addToDetails }) => {

  const [galleriesDisplay, setGalleriesDisplay] = useState();
  const [loading, setLoading] = useState()

  
  useEffect(() => {
    if(galleries) {
      const galleriesList = galleries.results.map(gallery => {
        return (
          <GalleryCard
            key={gallery.place_id}
            id={gallery.place_id}
            name={gallery.name}
            rating={gallery.rating}

            addToDetails={addToDetails} 
          />
        )
      })
      setGalleriesDisplay(galleriesList);
    }
  }, [])

  return (
    <section className="galleries-page" data-cy="galleries-page">
      <Header />
      {loading && <Loading/>}
      {!loading && galleriesDisplay && galleriesDisplay}
    </section>
  )
}

export default Galleries;
