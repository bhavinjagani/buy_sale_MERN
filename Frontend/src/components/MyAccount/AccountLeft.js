import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import '../../styles/MyAccount.css'

export default function AccountLeft() {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <div className="card-header">
        <h3 className="card-title">My Dashboard</h3>
      </div>

      <div className="card-body text-center item-user">
        <div className="profile-pic">
          <div className="profile-pic-img">
            <span className="bg-success dots" data-toggle="tooltip" data-placement="top" title="online"></span>
            <img
              className="brround"
              src={user?.custimg ? `http://localhost:8000/uploads/users/${user.custimg}` : '/images/user.jpg'}
              alt="user"
            />
          </div>
          <a href="#" className="text-dark">
            <h4 className="mt-3 mb-0 font-weight-semibold">{user?.custname}</h4>
          </a>
        </div>
      </div>

      <aside className="app-sidebar doc-sidebar my-dash">
        <div className="app-sidebar__user clearfix">
          <ul className="side-menu">
            <li className="slide">
              <Link className="side-menu__item " to="/myaccount/edit">
                <i className="side-menu__icon si si-user"></i>
                <span className="side-menu__label">Edit Profile</span>
              </Link>
            </li>
            <li className="slide">
              <Link className="side-menu__item" to="/myaccount/myads">
                <i className="side-menu__icon si si-diamond"></i>
                <span className="side-menu__label">My Ads</span>
              </Link>
            </li>
            <li className="slide">
              <Link className="side-menu__item" to="/myaccount/pending">
                <i className="side-menu__icon si si-diamond"></i>
                <span className="side-menu__label">Pending Approval</span>
              </Link>
            </li>
            <li className="slide">
              <Link className="side-menu__item" to="/myaccount/favorites">
                <i className="side-menu__icon si si-heart"></i>
                <span className="side-menu__label">My Favorite</span>
              </Link>
            </li>
            <li>
              <Link className="side-menu__item" to="/myaccount/privacy">
                <i className="side-menu__icon si si-power"></i>
                <span className="side-menu__label">Privacy</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
