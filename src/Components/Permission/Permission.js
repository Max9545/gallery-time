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
    <div className='permission-layout'>
      <div className='logo-card'>
        <img className='permission-logo' alt="logo" src='https://static.thenounproject.com/png/2381701-200.png'/>
      </div>
      <article className='permission-card'>
        <div>
          <h3>Allow us use your device's location to locate nearby galleries?</h3>
          <Link to='/home' className='yes-to-permission'onClick={() => handlePermission()}>Yes</Link>
        </div>
        <div>
          <h3>No thank you I will type in the city of my choice:</h3>
          <input type='text' className='permission-text'value={cityToSearch} onChange={e => handleChange(e)}/>
          <input type='submit' className='no-to-permission' value='Find Galleries In...' onClick={() => handleSubmit()}/>
        </div>
      </article>
    </div>
  )
}

export default Permission