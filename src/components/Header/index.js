// Write your code here
import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFil} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {
  console.log('header')
  return (
    <div>
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
        />
      </Link>
      <Popup
        trigger={
          <button type="button" data-testid="hamburgerIconButton">
            <GiHamburgerMenu />
          </button>
        }
      >
        {close => (
          <>
            <button
              onClick={() => close()}
              type="button"
              data-testid="closeButton"
            >
              <IoMdClose />
            </button>
            <ul>
              <li>
                <Link to="/">
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
                      alt="home"
                    />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
                      alt="about"
                    />
                  </div>
                </Link>
              </li>
            </ul>
          </>
        )}
      </Popup>
    </div>
  )
}
export default Header
