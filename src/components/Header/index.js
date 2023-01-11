// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav_header">
    <div className="nav_container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="nav_website_logo"
      />
      <ul className="nav_menu">
        <li>
          <Link to="/" className="nav_link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav_link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav_link">
            Cart
          </Link>
        </li>
      </ul>
      <button type="button" className="logout_desktop_btn">
        Logout
      </button>
      <button type="button" className="logout_mobile_btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="logout icon"
          className="logout_icon"
        />
      </button>
    </div>
  </nav>
)

export default Header
