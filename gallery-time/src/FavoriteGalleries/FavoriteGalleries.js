import { useEffect, useState } from 'react';
import  GalleryCard from '../GalleryCard/GalleryCard.js';

function FavoriteGalleries ({ favorites }) {


  const [galleries, setGalleries] = useState();
  const [galleriesDisplay, setGalleriesDisplay] = useState();


  useEffect(() => {
    if (galleries === undefined) {
      setGalleries(favorites);
    }
  },[])

  useEffect(() => {
    if(galleries) {
      console.log(galleries)
      const galleriesList = galleries.map(gallery => {
        return (
          <GalleryCard
            key={gallery.place_id}
            id={gallery.place_id}
            name={gallery.name}
            rating={gallery.rating}
          />
        )
      })
      setGalleriesDisplay(galleriesList);
    }
  }, [galleries])

  return (
    <p>{galleriesDisplay && galleriesDisplay}</p>
  )
}
export default FavoriteGalleries