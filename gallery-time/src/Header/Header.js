import './Header.css'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <section className='header'>
      <Link className='header-link' data-cy='header' to='/'>
        <img className='logo' alt="logo" src='https://static.thenounproject.com/png/2381701-200.png'/>
      </Link>
      <article className='header-container'>
        <div>
          <h1 className='site-name'>Gallery Time</h1>
        </div>
        <div>
          <p className='git-link'>📧</p>
        </div>
      </article>
    </section>
  )
}
export default Header

//image from https://thenounproject.com/search/?q=art+gallery&i=2381701

//check Copy Rights
