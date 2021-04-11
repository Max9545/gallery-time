import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import {Route, Switch} from 'react-router-dom';
import MapView from '../MapView/MapView.js';
import { useState, useEffect } from 'react';
import {geoLocatePost} from '../apiCalls.js'

function App() {
  const [geoLocation, setGeoLocation] = useState();

  // useEffect(() => {
  //   geoLocatePost()
  //   .then(data => setGeoLocation(data))
  // })


  return (
    <Switch className='app'>
      <Route exact path='/' render={() => <LandingPage geoLocation={geoLocation}/>}/>
      <Route exact path='/:city' render={({ match }) => <MapView geoLocation={geoLocation} city={match.params.city}/>}/>
    </Switch>
  );
}


export default App;
