import React, { useState, useEffect } from 'react';
import './Galleries.css';
import  GalleryCard from '../GalleryCard/GalleryCard.js';
import Header from '../Header/Header.js'
import OffLine from '../OffLine/OffLine'


const Galleries = ({ galleries, addToDetails }) => {

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

  return (

    <section className="galleries-page" data-cy="galleries-page">
      <Header />
      {!galleries && <OffLine />}
      {galleries && galleriesList}
    </section>
  )
}

export default Galleries
