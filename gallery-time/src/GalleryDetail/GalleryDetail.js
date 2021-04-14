import './GalleryDetail.css';
import React, { useEffect, useState } from 'react';
import { detailsSearch } from '../apiCalls.js';
import { rockyMountainCollegeOfArt } from '../MockData/MockData.js';
import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';

function GalleryDetail({ id, addToFavorites }) {

  const [detail, setDetail] = useState();

  // useEffect(() => {
  //   if (detail === undefined) {
  //     detailsSearch(id)
  //     .then(data => setDetail(data.result))
  //   }
  // }, [])

  useEffect(() => {
    if (detail === undefined) {
      setDetail(rockyMountainCollegeOfArt)
    }
  }, [])

  return (
    <section className='detail-gallery' data-cy='detail-gallery'>
      <Header />
      <article className='styling-container'>
        <h1 className='gallery-name'>{detail && detail.result.name}</h1>
        <p className='phone'>{`Phone Number`}</p>
        <a className='phone' href={detail && `${detail.result.international_phone_number}`}>{detail && detail.result.international_phone_number}</a>
      </article>
      <article className='styling-container'>
        <h2 className='hours'>Hours</h2>
        <p className='day-time'>{detail && detail.result.opening_hours.weekday_text[0]}</p>
        <p className='day-time'>{detail && detail.result.opening_hours.weekday_text[1]}</p>
        <p className='day-time'>{detail && detail.result.opening_hours.weekday_text[2]}</p>
        <p className='day-time'>{detail && detail.result.opening_hours.weekday_text[3]}</p>
        <p className='day-time'>{detail && detail.result.opening_hours.weekday_text[4]}</p>
        <p className='day-time'>{detail && detail.result.opening_hours.weekday_text[5]}</p>
        <p className='day-time'>{detail && detail.result.opening_hours.weekday_text[6]}</p>
      </article>
      <article className='styling-container'>
        <p className='bottom-card'>{detail && `Average rating ${detail.result.rating} from ${detail.result.user_ratings_total} people.`}</p>
        <p className='bottom-card'>Link to Google map.</p>
        <Link className='bottom-card'>{detail && detail.result.url}</Link>
      </article>
      <article className='styling-container'>
        <button className='add-favorite-button' onClick={() => addToFavorites(detail.result)}>Favorite</button>
        <Link to='/favorites' className='see-favorites-button' data-cy='see-favorites-button'>See Favorites</Link>
      </article>
    </section>
  )
}

export default GalleryDetail;
