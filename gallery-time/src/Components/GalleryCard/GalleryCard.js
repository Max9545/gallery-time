import React from 'react';
import { Link } from 'react-router-dom';
import './GalleryCard.css';
import PropTypes from 'prop-types';

function GalleryCard({ name, rating, id, addToDetails }) {
  return(
    <Link onClick={() => addToDetails(id)} className="gallery-card" data-cy="gallery-card" to={`/gallery/${id}`}>
      <h1 className="name">{name}</h1>
      <p className="rating">{`Rating ${rating}`}</p>
    </Link>
  )
}

export default GalleryCard;

GalleryCard.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.string,
  id: PropTypes.number,
  addToDetails: PropTypes.func
};
