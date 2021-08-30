import './Header.css'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <section className='header' data-cy='header-box'>
      <Link className='header-link' data-cy='landing-link' to='/home'>
        <img className='logo' alt="logo" src='https://static.thenounproject.com/png/2381701-200.png'/>
      </Link>
      <article className='header-container'>
        <div>
          <h1 className='site-name'>Gallery Time</h1>
        </div>
        <div>
          <Link to="/contact" className='git-link' data-cy="contact-button">📧</Link>
        </div>
      </article>
    </section>
  )
}
export default Header
