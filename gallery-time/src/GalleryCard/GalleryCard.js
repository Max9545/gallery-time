import React from 'react';
import { Link } from 'react-router-dom';

function GalleryCard({ name, openNow, rating, id }) {
  return(
    <Link data-cy="gallery-card" to={`/gallery/${id}`}>
      <h1>{name}</h1>
      <p>{openNow}</p>
      <p>{rating}</p>
    </Link>
  )
}

export default GalleryCard;
