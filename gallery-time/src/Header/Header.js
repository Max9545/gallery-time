import './Header.css'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <Link to='/'>
      <h1>GalleryTime</h1>
      <img src='https://static.thenounproject.com/png/2381701-200.png'/> 
    </Link>
  )
}
export default Header
