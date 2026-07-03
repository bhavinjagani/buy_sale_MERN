import { useState } from 'react'
import { Link } from "react-router-dom";
import logoImg from '../img/bnslogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUser, faHouseChimney, faCaretDown, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import '../styles/Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    closeMobileMenu();
  };

  const postFreeAd = () => {
    closeMobileMenu();
    if (isLoggedIn) {
      navigate("/postads");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <nav className="navbar header">
        <div className="navbar-inner container-fluid">

          {/* Logo */}
          <div className="navbar-brand">
            <Link to="/" onClick={closeMobileMenu}>
              <img src={logoImg} className="navbar-logo" alt="Buynsale Logo" />
            </Link>
          </div>

          {/* Desktop actions */}
          <div className="navbar-desktop-actions">
            {!isLoggedIn ? (
              <>
                <Link to="login" className="btn-login">
                  <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: "0.25rem" }} />
                  <span>Login</span>
                </Link>
                <Link to="signup" className="btn-login">
                  <FontAwesomeIcon icon={faUser} style={{ marginRight: "0.25rem" }} />
                  <span>Register</span>
                </Link>
              </>
            ) : (
              <div className="nav-dashboard-wrap">
                <button className="btn-login nav-dashboard-btn" onClick={toggleDropdown}>
                  <FontAwesomeIcon icon={faHouseChimney} style={{ marginRight: "0.35rem" }} />
                  <span>My Dashboard</span>
                  <FontAwesomeIcon icon={faCaretDown} style={{ marginLeft: "0.3rem" }} />
                </button>
                {isOpen && (
                  <ul className="sub-menu">
                    <li><Link to="/myaccount" onClick={() => setIsOpen(false)}>My Profile</Link></li>
                    <li><Link to="/myaccount/myads" onClick={() => setIsOpen(false)}>My Ads</Link></li>
                    <li><Link to="/myaccount/pending" onClick={() => setIsOpen(false)}>Pending Approval</Link></li>
                    <li><button className="sub-menu-btn" onClick={handleLogout}>Logout</button></li>
                  </ul>
                )}
              </div>
            )}
            <button className="btn btn-secondary navbar-post-btn" onClick={postFreeAd}>
              Post Free Ad
            </button>
          </div>

          {/* Hamburger toggle (mobile only) */}
          <button className="navbar-hamburger" onClick={toggleMobileMenu} aria-label="Toggle menu">
            <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="navbar-mobile-menu">
            {!isLoggedIn ? (
              <>
                <Link to="login" className="mobile-nav-link" onClick={closeMobileMenu}>
                  <FontAwesomeIcon icon={faSignInAlt} style={{ marginRight: "0.5rem" }} />Login
                </Link>
                <Link to="signup" className="mobile-nav-link" onClick={closeMobileMenu}>
                  <FontAwesomeIcon icon={faUser} style={{ marginRight: "0.5rem" }} />Register
                </Link>
              </>
            ) : (
              <>
                <Link to="/myaccount" className="mobile-nav-link" onClick={closeMobileMenu}>My Profile</Link>
                <Link to="/myaccount/myads" className="mobile-nav-link" onClick={closeMobileMenu}>My Ads</Link>
                <Link to="/myaccount/pending" className="mobile-nav-link" onClick={closeMobileMenu}>Pending Approval</Link>
                <button className="mobile-nav-link mobile-nav-logout" onClick={handleLogout}>Logout</button>
              </>
            )}
            <button className="btn btn-secondary mobile-nav-post-btn" onClick={postFreeAd}>
              Post Free Ad
            </button>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
