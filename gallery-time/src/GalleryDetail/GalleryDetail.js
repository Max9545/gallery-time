import './GalleryDetail.css';
import React, { useEffect, useState } from 'react';
import { detailsSearch } from '../apiCalls.js';
import { rockyMountainCollegeOfArt } from '../MockData/MockData.js'

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
    <section data-cy="detail-gallery">
      <h1>GalleryDetail</h1>
    </section>
  )
}

export default GalleryDetail;
