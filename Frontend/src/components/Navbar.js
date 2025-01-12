import React, { useState } from 'react'
import {
  Link, useLocation
} from "react-router-dom";
import logoImg from '../img/bnslogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUser, faHouseChimney, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'
const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  let navigate = useNavigate()
  const handleLogout = () => {
    localStorage.removeItem("token");
    props.handlelogInlogOut(false)
    navigate("/")
  }
  
  const postFreeAd = () => {
    
    if (props.isLoggedIn) {
      navigate("/postads")
    }
    else {
      navigate("/login")
    }
  }
  return (
    <>
      <nav className="navbar  navbar-expand-lg header">
        <div className="container-fluid">
          <div className='mx-2 w-2/3'>
            <div className='header-logo-wrapper w-1/3'>
              <Link to="/"><img src={logoImg} style={{ height: "120px" }} alt="My Logo" /></Link>
            </div>
          </div>
          <div className='d-flex w-1/3 justify-center'>
            {!props.isLoggedIn ? <form className="d-flex" role="search">
              <Link to="login" className="btn-login"><FontAwesomeIcon icon={faSignInAlt} style={{ color: "#000000", marginRight: "0.25rem" }} /><span>Login</span></Link>
              <Link to="signup" className='btn-login'><FontAwesomeIcon icon={faUser} style={{ color: "#000000", marginRight: "0.25rem" }} /> <span>Register</span> </Link></form> :
              <form>
                <ul className="horizontalMenu-list"> <li onClick={toggleDropdown}><span className="horizontalMenu-click">
                  <i className="horizontalMenu-arrow fa fa-angle-down"></i></span>
                  <span className="horizontalMenu-click"><i className="horizontalMenu-arrow fa fa-angle-down"></i></span><Link to="#" className="btn-login"><FontAwesomeIcon icon={faHouseChimney} style={{ color: "#000000", }} /><span> My Dashboard</span> <FontAwesomeIcon icon={faCaretDown} style={{ color: "#000000", }} /></Link>
                  {isOpen && <ul className="sub-menu">
                    <li ><Link to="myaccount">My Profile</Link></li>
                    <li ><Link to="<?php echo base_url(); ?>myads">My Ads</Link></li>
                    <li ><Link to="<?php echo base_url(); ?>pending">Pending Approval</Link></li>
                    <li ><Link to="<?php echo base_url(); ?>mysponsor">Sponsor Ads</Link></li>
                    <li ><Link role="button" onClick={handleLogout}>Logout</Link></li>
                  </ul>}
                </li> </ul>
              </form>}
            <button  className="btn btn-secondary mx-2" style={{ fontSize: "1.3rem" }} role="button" onClick={postFreeAd}>Post Free Ad</button>

          </div>
        </div>
      </nav>
    </>
  )

}
export default Navbar;
