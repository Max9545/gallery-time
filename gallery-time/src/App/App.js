import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import Header from '../Header/Header.js'
import {Route, Switch} from 'react-router-dom';
import Galleries from '../Galleries/Galleries.js';
import { useState, useEffect } from 'react';
import { geoLocatePost } from '../apiCalls.js';
import { denverGeoLocation } from '../MockData/MockData.js';
import GalleryDetail from '../GalleryDetail/GalleryDetail.js';


function App() {
  const [geoLocation, setGeoLocation] = useState();

  // useEffect(() => {
  //  if(geoLocation === undefined)
  //   geoLocatePost()
  //   .then(data => setGeoLocation(data))
  // })

  useEffect(() => {
    setGeoLocation(denverGeoLocation);
  })

  return (
    
    <>
      <Header/>

      <Switch className='app'>
        <Route exact path='/' render={() => <LandingPage geoLocation={geoLocation}/>}/>
        <Route exact path='/city/:city' render={({ match }) => <Galleries geoLocation={geoLocation} city={match.params.city}/>}/>
        <Route exact path='/gallery/:gallery' render={({ match }) => <GalleryDetail id={ match.params.gallery }/>}/>
      </Switch>
    </>
  );
}


export default App;
