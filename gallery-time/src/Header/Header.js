import './Header.css'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <Link className='header' to='/'>
      <div className='header-container'>
        <img className='logo' src='https://static.thenounproject.com/png/2381701-200.png'/> 
        <h1>GalleryTime</h1>
      </div>
      <p className='git-link'>📧</p>
    </Link>
  )
}
export default Header

//image from https://thenounproject.com/search/?q=art+gallery&i=2381701

//check Copy Rights
