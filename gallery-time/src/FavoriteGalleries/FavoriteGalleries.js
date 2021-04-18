import { useEffect, useState } from 'react';
import Header from '../Header/Header'
import  GalleryCard from '../GalleryCard/GalleryCard.js';
import './FavoriteGalleries.css'
import { Link } from 'react-router-dom'
import Loading from '../Loading/Loading';

function FavoriteGalleries ({ favorites }) {


  const [galleries, setGalleries] = useState();
  const [galleriesDisplay, setGalleriesDisplay] = useState([]);
  const [loading, setLoading] = useState()

  useEffect(() => {
    setLoading(true)
    if (galleries === undefined) {
      setGalleries(favorites)
    }
    setLoading(false)
  },[])

  useEffect(() => {
    if(galleries) {
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
      setGalleriesDisplay(galleriesList)
     
    }
  }, [galleries])

  return (
    <section className="favorites-page" data-cy="favorites-page">
      <Header/>
      <p className='favorites-header'>Favorite Galleries so far</p>
      {loading && <Loading/>}
      {!loading && galleriesDisplay && galleriesDisplay}
      {!galleriesDisplay.length && <p className='no-favorites'>You have no favorites yet, checkout your beautiful city!</p>}
      <Link to='/' className='fav-to-home'>Start Again</Link>
    </section>
  )
}
export default FavoriteGalleries
