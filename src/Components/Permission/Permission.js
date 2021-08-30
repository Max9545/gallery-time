import React from 'react' 
import { useState, } from 'react';
import { Link, useHistory } from 'react-router-dom'
import './Permission.css';
import PropTypes from 'prop-types';

function Permission({ setUserCity, setPermission }) {

    const [cityToSearch, setCityToSearch] = useState()
    let history = useHistory()

    const handleChange = (event) => {
      setCityToSearch(event.target.value)
    }

    const handleSubmit = () => {
      setUserCity(cityToSearch)
      history.push('/home')
    }

    const handlePermission = () => {
      setPermission(true)
    }

  return(
    <article>
      <h3>Allow us use your device's location to locate nearby galleries?</h3>
      <Link to='/home' onClick={() => handlePermission()}>Yes</Link>
      <h3>No thank you I will type in the city of my choice</h3>
      <input type='text' value={cityToSearch} onChange={e => handleChange(e)}/>
      <input type='submit' value='Find Galleries In...' onClick={() => handleSubmit()}/>
    </article>
  )
}

export default Permission