import React from 'react'
import { useSelector } from 'react-redux'

export default function AccountHome() {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <div className="card">
        <div className="card-body">
          <div className="wideget-user">
            <div className="row">

              <div className="col-lg-8 col-md-12">
                <div className="wideget-user-desc">
                  <div className="wideget-user-img">
                    <img
                      className="brround"
                      src={user?.custimg ? `http://localhost:8000/Images/uploads/users/${user.custimg}` : '/images/user.jpg'}
                      alt="user"
                      height="150"
                      width="150"
                    />
                  </div>
                  <div className="user-wrap wideget-user-info">
                    <h4 className="font-weight-semibold">{user?.custname}</h4>
                    <h6 className="text-muted mb-3">
                      <span className="text-dark">Email : </span>{user?.username}
                    </h6>
                    <div className="wideget-user-rating">
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star text-warning"></i>
                      <i className="fa fa-star-o text-warning mr-1"></i>
                      <span>5 (Reviews)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12">
                <div className="wideget-user-info widget-info-right mt-5">
                  <div className="wideget-user-btn">
                    {user?.custphone && (
                      <a
                        href={`https://web.whatsapp.com/send?phone=+91${user.custphone}`}
                        className="btn btn-whatsapp icons btn-sm"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="fa fa-whatsapp mr-1"></i> Contact on WhatsApp
                      </a>
                    )}
                  </div>
                  <div className="wideget-user-icons mt-2">
                    {user?.weblink && <a href={user.weblink} target="_blank" rel="noreferrer" className="web-bg mt-0"><i className="fa fa-chrome"></i></a>}
                    {user?.fblink && <a href={user.fblink} target="_blank" rel="noreferrer" className="facebook-bg mt-0"><i className="fa fa-facebook"></i></a>}
                    {user?.instalink && <a href={user.instalink} target="_blank" rel="noreferrer" className="instagram-bg"><i className="fa fa-instagram"></i></a>}
                    {user?.googlelink && <a href={user.googlelink} target="_blank" rel="noreferrer" className="google-bg"><i className="fa fa-google"></i></a>}
                    {user?.twitterlink && <a href={user.twitterlink} target="_blank" rel="noreferrer" className="twitter-bg"><i className="fa fa-twitter"></i></a>}
                    {user?.youtubelink && <a href={user.youtubelink} target="_blank" rel="noreferrer" className="google-bg"><i className="fa fa-youtube"></i></a>}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="card mb-0">
        <div className="card-body">
          <div className="media-heading">
            <h3 className="card-title mb-3 font-weight-bold">Personal Details</h3>
          </div>
          <ul className="usertab-list mb-0">
            <li><span className="font-weight-semibold">Full Name : </span>{user?.custname}</li>
            <li><span className="font-weight-semibold">Email : </span>{user?.username}</li>
            {user?.custphone && <li><span className="font-weight-semibold">Phone : </span>{user.custphone}</li>}
            {user?.custaddress && <li><span className="font-weight-semibold">Address : </span>{user.custaddress}</li>}
          </ul>
          {user?.aboutme && (
            <div className="mt-3">
              <h3 className="card-title mb-3 font-weight-bold">About Me</h3>
              <p>{user.aboutme}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
