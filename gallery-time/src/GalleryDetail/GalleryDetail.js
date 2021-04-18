import './GalleryDetail.css';
import React, { useEffect, useState } from 'react';
import { galleryDetailsSearch } from '../apiCalls.js';
import { rockyMountainCollegeOfArt } from '../MockData/MockData.js';
import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';
import OffLine from '../OffLine/OffLine.js'
import Loading from '../Loading/Loading';

function GalleryDetail({ id, addToFavorites, galleryDetail }) {

  // const [galleryDetail, setgalleryDetail] = useState();
  const [loading, setLoading] = useState()

  // useEffect(() => {
  //   setLoading(true)
  //   if (galleryDetail === undefined) {
  //     galleryDetailsSearch(id)
  //     .then(data => setgalleryDetail(data))
  //   }
  //   setLoading(false)
  // }, [])

  // useEffect(() => {
  //   if (galleryDetail === undefined) {
  //     setgalleryDetail(rockyMountainCollegeOfArt)
  //   }
  // }, [])

  return (
    <section className='detail-gallery' data-cy='detail-gallery'>
      <Header />
        {!galleryDetail && loading && <Loading />}
        {!galleryDetail && !loading && <OffLine />}
        {galleryDetail && !loading &&
        <>
          <article className='styling-container'>
            <h1 className='gallery-name'>{galleryDetail.result.name && galleryDetail.result.name}</h1>
            <p className='phone'>{`Phone Number`}</p>
            <a className='phone' href={galleryDetail && `${galleryDetail.result.international_phone_number}`}>{galleryDetail && galleryDetail.result.international_phone_number}</a>
          </article>
          <article className='styling-container'>
            {!galleryDetail.result.opening_hours && <p>The hours for this gallery are not available at this time.</p>}
            {galleryDetail.result.opening_hours &&
            <>
              <h2 className='hours'>Hours</h2>
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
            <p className='bottom-card'>{galleryDetail && `Average rating ${galleryDetail.result.rating} from ${galleryDetail.result.user_ratings_total} people.`}</p>
            {/* <p className='bottom-card'></p> */}
            <a href={galleryDetail.result.url} className='bottom-card'>Link to Google map.</a>
          </article>
          <article className='styling-container'>
            <button className='add-favorite-button' onClick={() => addToFavorites(galleryDetail.result)}>Favorite This Gallery</button>
            <Link to='/favorites' className='see-favorites-galleryDetail' data-cy='see-favorites-galleryDetail'>See Favorites</Link>
          </article>
          </>}

    </section>
  )
}

export default GalleryDetail;
