import { useEffect, useState } from 'react';
import Header from '../Header/Header'
import  GalleryCard from '../GalleryCard/GalleryCard.js';
import './FavoriteGalleries.css'
import { Link } from 'react-router-dom'

function FavoriteGalleries ({ favorites }) {


  const [galleries, setGalleries] = useState();
  const [galleriesDisplay, setGalleriesDisplay] = useState([]);


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
    <section className="favorites-page" data-cy="favorites-page">
      <Header/>
      <p className='favorites-header'>Favorite Galleries so far</p>
      {galleriesDisplay}
      {!galleriesDisplay.length && <p className='no-favorites'>You have no favorites yet, checkout your beautiful city!</p>}
      <Link to='/'>Start Again</Link>
    </section>
  )
}
export default FavoriteGalleries