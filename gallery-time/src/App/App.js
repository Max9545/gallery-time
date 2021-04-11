import './App.css';
import LandingPage from '../LandingPage/LandingPage';
import {Route, Switch} from 'react-router-dom';
import MapView from '../MapView/MapView.js';

function App() {

  return (
    <Switch className='app'>
      <Route exact path='/' component={ LandingPage } />
      <Route exact path='/:city' render={({ match }) => <MapView city={match.params.city}/>}/>
    </Switch>
  );
}


    // <Switch>
    //   <Route exact path="/contact" component={ ContactPage }/>
    //   <Route exact path="/" component={ HomePage }/>
    //   <Route exact path="/:id" render={({ match }) =>
    //   <MovieSnapShot id={match.params.id}/>}/>
    // </Switch>

export default App;
