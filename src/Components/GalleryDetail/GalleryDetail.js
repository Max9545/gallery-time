
import './GalleryDetail.css';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';
import OffLine from '../OffLine/OffLine.js'
import PropTypes from 'prop-types';
import { photoSearch } from '../../apiCalls';
import defaultImage from '../../img/abstract_painting.jpeg'

function GalleryDetail({ addToFavorites, galleryDetail, city }) {


  const [galleryPhoto, setGalleryPhoto] = useState()

  useEffect(() => {
    if (galleryDetail.result.photos !== undefined) {
      photoSearch(galleryDetail.result.photos[0].photo_reference)
      .then(data => setGalleryPhoto(data))
    } else {
      setGalleryPhoto(defaultImage)
    }
  }, [galleryDetail])

  return (
    <section className='detail-gallery' data-cy='detail-gallery'>
      <Header />
        {!galleryDetail && <OffLine />}
        {galleryDetail &&
        <>
          <article className='styling-container' data-cy='styling-container'>
            <h1 className='gallery-name' data-cy='gallery-name'>{galleryDetail.result.name && galleryDetail.result.name}</h1>
            <div>
             {galleryPhoto && <img className='gallery-photo' data-cy='gallery-photo' aly='Photo of gallery outside or inside' src={galleryPhoto}/>}
            </div>
            <p className='phone'>{`Phone Number`}</p>
            <a className='phone' href={galleryDetail && `${galleryDetail.result.international_phone_number}`}>{galleryDetail && galleryDetail.result.international_phone_number}</a>
          </article>
          <Link className='detail-to-galleries' to={`/city/${city}`}>Back To Galleries</Link>
          <article className='styling-container hours'>
            {!galleryDetail.result.opening_hours && <p>The hours for this gallery are not available at this time.</p>}
            {galleryDetail.result.opening_hours &&
            <>
              <h2 className='hours-title'>Hours</h2>
              <p className='day-time'>{galleryDetail.result.opening_hours.weekday_text[0]}</p>
              <p className='day-time'>{galleryDetail.result.opening_hours.weekday_text[1]}</p>
              <p className='day-time'>{galleryDetail.result.opening_hours.weekday_text[2]}</p>
              <p className='day-time'>{galleryDetail.result.opening_hours.weekday_text[3]}</p>
              <p className='day-time'>{galleryDetail.result.opening_hours.weekday_text[4]}</p>
              <p className='day-time'>{galleryDetail.result.opening_hours.weekday_text[5]}</p>
              <p className='day-time'>{galleryDetail.result.opening_hours.weekday_text[6]}</p>
            </>}
            </article>
          <article className='styling-container'>
            <p className='bottom-card' data-cy='rating-card'>{galleryDetail && `Average rating ${galleryDetail.result.rating} from ${galleryDetail.result.user_ratings_total} people.`}</p>
            <a href={galleryDetail.result.url} className='bottom-card'>Link to Google map.</a>
          </article>
          <article className='styling-container' data-cy='fav-box'>
            <button className='add-favorite-button'
            data-cy='fav-button-card' onClick={() => addToFavorites(galleryDetail.result)}>Favorite This Gallery</button>
            <Link to='/favorites' className='see-favorites-galleryDetail' data-cy='see-favorites-galleryDetail'>See Favorites</Link>
          </article>
        </>}
    </section>
  )
}

export default GalleryDetail;

GalleryDetail.propTypes = {
  name: PropTypes.string,
  rating: PropTypes.number,
  id: PropTypes.string,
  addToDetails: PropTypes.func
};
