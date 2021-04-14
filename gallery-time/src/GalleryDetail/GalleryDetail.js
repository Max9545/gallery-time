import './GalleryDetail.css';
import React, { useEffect, useState } from 'react';
import { detailsSearch } from '../apiCalls.js';
import { rockyMountainCollegeOfArt } from '../MockData/MockData.js';
import Header from '../Header/Header.js';
import { Link } from 'react-router-dom';

function GalleryDetail({ id }) {
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
    <section data-cy='detail-gallery'>
      <Header />
      <h1>{detail && detail.result.name}</h1>
      <p>Phone Number</p>
      <p>{detail && detail.result.international_phone_number}</p>
      <article>
        <h2>Hours</h2>
        <p>{detail && detail.result.opening_hours.weekday_text[0]}</p>
        <p>{detail && detail.result.opening_hours.weekday_text[1]}</p>
        <p>{detail && detail.result.opening_hours.weekday_text[2]}</p>
        <p>{detail && detail.result.opening_hours.weekday_text[3]}</p>
        <p>{detail && detail.result.opening_hours.weekday_text[4]}</p>
        <p>{detail && detail.result.opening_hours.weekday_text[5]}</p>
        <p>{detail && detail.result.opening_hours.weekday_text[6]}</p>
      </article>
      <article>
        <p>{detail && `Average rating ${detail.result.rating} from ${detail.result.user_ratings_total} people.`}</p>
      </article>
      <article>
        <p>Link to Google map.</p>
        <Link>{detail && detail.result.url}</Link>
      </article>
      <button>Favorite</button>
    </section>
  )

}

export default GalleryDetail;
