import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import {Route, Switch} from 'react-router-dom';
import Galleries from '../Galleries/Galleries.js';
import { useState, useEffect } from 'react';
import { geoLocatePost,citySearch, photoSearch, galleriesSearch, detailsSearch } from '../../apiCalls.js';
import GalleryDetail from '../GalleryDetail/GalleryDetail.js';
import Loading from '../Loading/Loading';
import FavoriteGalleries from '../FavoriteGalleries/FavoriteGalleries.js'
require('dotenv').config();

function App() {

  const [geoLocation, setGeoLocation] = useState();
  const [favorites, setFavorites] = useState([])
  const [city, setCity] = useState()
  const [photo, setPhoto] = useState()
  const [galleries, setGalleries] = useState();
  const [detailsVisited, setDetailsVisited] = useState([])

  useEffect(() => {
    if(city === undefined)
     geoLocatePost()
     .then(data => citySearch(data.location.lat, data.location.lng))
     .then(city => setCity(city))
   }, [])

   useEffect(() => {
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

  const addToDetails = newDetailID => {
      detailsSearch(newDetailID)
      .then(galleryDetail => setDetailsVisited([galleryDetail, ...detailsVisited]))
  }

  const findDetails = id => {
    const detailToShow = detailsVisited.find(detailVisited => detailVisited.result.place_id === id)
    return detailToShow 
  } 

  return (
      <Switch className='app'>
        {photo && <Route exact path='/' render={() => <LandingPage city={city.results[0]} photo={photo}/>}/>}
        <Route exact path='/favorites' render={() => <FavoriteGalleries favorites={favorites} addToDetails={addToDetails}/>}/>
        <Route exact path='/city/:city' render={({ match }) => <Galleries addToDetails={addToDetails} galleries={galleries} geoLocation={geoLocation} city={match.params.city}/>}/>
        <Route exact path='/gallery/:gallery' render={({ match }) => <GalleryDetail galleryDetail={findDetails(match.params.gallery)} id={ match.params.gallery } addToFavorites={addToFavorites}/>}/>
      </Switch>
  );
}


export default App;
