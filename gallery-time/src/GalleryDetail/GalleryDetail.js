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
    <h1>GalleryDetail</h1>
  )
}

export default GalleryDetail;
