import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import {Route, Switch} from 'react-router-dom';
import Galleries from '../Galleries/Galleries.js';
import FavoriteGalleries from '../FavoriteGalleries/FavoriteGalleries.js'
import { useState, useEffect } from 'react';
import { geoLocatePost,citySearch, photoSearch, galleriesSearch } from '../apiCalls.js';
import { denverGeoLocation } from '../MockData/MockData.js';
import GalleryDetail from '../GalleryDetail/GalleryDetail.js';
require('dotenv').config();

function App() {

  const [geoLocation, setGeoLocation] = useState();
  const [favorites, setFavorites] = useState([])
  const [city, setCity] = useState()
  const [photo, setPhoto] = useState()
  const [galleries, setGalleries] = useState();

  // useEffect(() => {
  //  if(geoLocation === undefined)
  //   geoLocatePost()
  //   .then(data => citySearch(data.location.lat, data.location.lng))
  //   .then(city => setCity(city))
  //   // .then(data => setGeoLocation(data))
  // }, [])


  useEffect(() => {
    if(city === undefined)
     geoLocatePost()
     .then(data => citySearch(data.location.lat, data.location.lng))
     .then(city => setCity(city))
     .then(console.log(city))
     // .then(data => setGeoLocation(data))
   }, [])

   useEffect(() => {
     console.log(city)
    if (city !== undefined) {
      photoSearch(city.results[0].photos[0].photo_reference)
      .then(photo => setPhoto(photo))
    }
  },[city])

  useEffect(() => {
    geoLocatePost()
    .then(data => galleriesSearch(data.location.lat, data.location.lng))
    .then(latestGalleries => setGalleries(latestGalleries))
  }, [city])

  const addToFavorites = newGalleryID => {
    if(!favorites.includes(newGalleryID)) {
      setFavorites([...favorites, newGalleryID])
    }
  }

  // useEffect(() => {
  //   setGeoLocation(denverGeoLocation);
  // }, [])

  return (
      <Switch className='app'>
        {photo && <Route exact path='/' render={() => <LandingPage city={city} photo={photo}/>}/>}
        <Route exact path='/favorites' render={() => <FavoriteGalleries favorites={favorites} />}/>
        <Route exact path='/city/:city' render={({ match }) => <Galleries galleries={galleries} geoLocation={geoLocation} city={match.params.city}/>}/>
        <Route exact path='/gallery/:gallery' render={({ match }) => <GalleryDetail id={ match.params.gallery } addToFavorites={addToFavorites}/>}/>
      </Switch>
  );
}


export default App;
