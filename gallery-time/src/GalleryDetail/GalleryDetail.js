import './GalleryDetail.css';
import React, { useEffect, useState } from 'react';
import { detailsSearch } from '../apiCalls.js';
import { rockyMountainCollegeOfArt } from '../MockData/MockData.js';
import Header from '../Header/Header.js';

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
      <article>
      </article>
    </section>
  )
}

export default GalleryDetail;
