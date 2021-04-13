import React from 'react';
import { Link } from 'react-router-dom';
import './GalleryCard.css';

function GalleryCard({ name, rating, id }) {
  return(
    <Link className="gallery-card" data-cy="gallery-card" to={`/gallery/${id}`}>
      <h1 className="name">{name}</h1>
      <p className="rating">{`Rating ${rating}`}</p>
    </Link>
  )
}

export default GalleryCard;
