import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import {Route, Switch} from 'react-router-dom';
import Galleries from '../Galleries/Galleries.js';
import FavoriteGalleries from '../FavoriteGalleries/FavoriteGalleries.js'
import { useState, useEffect } from 'react';
import { geoLocatePost } from '../apiCalls.js';
import { denverGeoLocation } from '../MockData/MockData.js';
import GalleryDetail from '../GalleryDetail/GalleryDetail.js';
require('dotenv').config();

function App() {

  const [geoLocation, setGeoLocation] = useState();
  const [favorites, setFavorites] = useState([])

  // useEffect(() => {
  //  if(geoLocation === undefined)
  //   geoLocatePost()
  //   .then(data => setGeoLocation(data))
  // }, [])

  const addToFavorites = newGalleryID => {
    if(!favorites.includes(newGalleryID)) {
      setFavorites([...favorites, newGalleryID])
    }
  }

  useEffect(() => {
    setGeoLocation(denverGeoLocation);
  }, [])

  return (
    <>
      <Switch className='app'>
        {geoLocation && <Route exact path='/' render={() => <LandingPage geoLocation={geoLocation}/>}/>}
        <Route exact path='/favorites' render={() => <FavoriteGalleries favorites={favorites} />}/>
        <Route exact path='/city/:city' render={({ match }) => <Galleries geoLocation={geoLocation} city={match.params.city}/>}/>
        <Route exact path='/gallery/:gallery' render={({ match }) => <GalleryDetail id={ match.params.gallery } addToFavorites={addToFavorites}/>}/>
      </Switch>
    </>
  );
}


export default App;
