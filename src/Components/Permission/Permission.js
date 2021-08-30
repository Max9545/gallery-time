import React from 'react' 
import { Link } from 'react-router-dom'
import './Permission.css';
import PropTypes from 'prop-types';

function Permission() {
  return(
    <article>
      <h3>Allow us use your device's location to locate nearby galleries?</h3>
      <Link to='/home'>Yes</Link>
    </article>
  )
}

export default Permission