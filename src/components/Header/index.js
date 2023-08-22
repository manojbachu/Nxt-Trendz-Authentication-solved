// Write your JS code here
import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="nav-container">
      <img
        className="header-website-logo"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <img
        className="nav-logout-image"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
      />

      <ul className="nav-elements-container">
        <li className="nav-item">Home</li>
        <li className="nav-item">Products</li>
        <li className="nav-item">Cart</li>
        <li className="nav-item">
          <button type="button" className="logout-button">
            Logout
          </button>
        </li>
      </ul>
    </div>
    <ul className="nav-elements-icon-container">
      <li className="nav-icon-item">
        <img
          className="nav-icon-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
        />
      </li>
      <li className="nav-icon-item">
        <img
          className="nav-icon-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
        />
      </li>
      <li className="nav-icon-item">
        <img
          className="nav-icon-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
        />
      </li>
    </ul>
  </div>
)

export default Header
