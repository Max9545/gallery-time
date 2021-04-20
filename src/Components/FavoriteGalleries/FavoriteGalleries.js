import { useEffect, useState } from 'react';
import Header from '../Header/Header';
import  GalleryCard from '../GalleryCard/GalleryCard.js';
import './FavoriteGalleries.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function FavoriteGalleries ({ favorites, addToDetails, removeFromFavorites }) {

  // const [galleriesDisplay, setGalleriesDisplay] = useState([]);
  const favoritesDisplay = favorites.map(gallery => {
    return (
      <>
        <GalleryCard
          key={gallery.place_id}
          id={gallery.place_id}
          name={gallery.name}
          rating={gallery.rating}
          addToDetails={addToDetails}
        />
        <button onClick={() => removeFromFavorites(gallery.place_id)}>Remove</button> 
        </>
        )
      })
  {/* useEffect(() => {
    if(favorites) {
      const galleriesList = favorites.map(gallery => {
        return (
          <>
            <GalleryCard
              key={gallery.place_id}
              id={gallery.place_id}
              name={gallery.name}
              rating={gallery.rating}
              addToDetails={addToDetails}
            />
            <button onClick={() => removeFromFavorites(gallery.place_id)}>Remove</button>
          </>
        )
      })
      setGalleriesDisplay(galleriesList)
    }
  }, []) */}

  return (
    <section className="favorites-page" data-cy="favorites-page">
      <Header/>
      <p className='favorites-header' data-cy='favorites-header'>Favorite Galleries so far</p>
      {/* {galleriesDisplay && galleriesDisplay} */}
      {favoritesDisplay && favoritesDisplay}
      {/* {!galleriesDisplay.length && <p className='no-favorites'>You have no favorites yet, checkout your beautiful city!</p>} */}
      <Link to='/' className='fav-to-home'
      data-cy='fav-to-home'>Start Again</Link>
    </section>
  )
}
export default FavoriteGalleries

FavoriteGalleries.propTypes = {
  favorites: PropTypes.array,
  addToDetails: PropTypes.func
};
