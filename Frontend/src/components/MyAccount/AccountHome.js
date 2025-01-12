import React from 'react'
import AccountLeft from './AccountLeft'

export default function AccountHome() {
  return (
    <>
     <section className="sptb">

<div className="container">

  <div className="row">

    <div className="col-xl-3 col-lg-12 col-md-12">

      <div className="card">
     <AccountLeft/>
      </div>





    </div>





    <div className="col-lg-9">

      <div className="card">

        <div className="card-body">

          <div className="wideget-user">

            <div className="row">

              <div className="col-lg-8 col-md-12">

                <div className="wideget-user-desc">

                  <div className="wideget-user-img">

                    {/* <?php

                     if (@$udetail[0]['custimg'] == '') {

                     ?> */}

                      <img className="brround" src="<?php echo base_url(); ?>images/user.jpg" alt="user"/>

                    {/* <?php

                     } else {

                     ?> */}

                      <img className="brround" src="<?php echo base_url(); ?>uploads/users/<?php echo @$udetail[0]['custimg']; ?>" height="150" width="150" alt="user"/>

                    {/* <?php } ?> */}

                  </div>

                  <div className="user-wrap wideget-user-info"> <a href="#" className="text-dark">

                      <h4 className="font-weight-semibold"></h4>

                    </a>

                    <h6 className="text-muted mb-3"><span className="text-dark">Member Since : </span></h6>

                    <div className="wideget-user-rating"> <a href="#"><i className="fa fa-star text-warning"></i></a> <a href="#"><i className="fa fa-star text-warning"></i></a> <a href="#"><i className="fa fa-star text-warning"></i></a> <a href="#"><i className="fa fa-star text-warning"></i></a> <a href="#"><i className="fa fa-star-o text-warning mr-1"></i></a> <span>5 (Reviews)</span> </div>

                  </div>

                </div>

              </div>

              <div className="col-lg-4 col-md-12">

                <div className="wideget-user-info widget-info-right mt-5 ">

                  <div className="wideget-user-btn">



                    <a href="https://web.whatsapp.com:/send?phone=+91<?php echo @$udetail[0]['custphone']; ?>&text=<?php echo base_url(); ?>ads/view/<?php echo @$udetail[0]['ad_id'] . '/' . str_replace(' ', '-', @$udetail[0]['ad_title']) . '.html'; ?>" className="btn btn-whatsapp icons btn-sm"><i className="fa fa-whatsapp mr-1"></i> Contact in Whatsapp</a>

                  </div>

                  <div className="wideget-user-icons mt-2">



                    {/* <?php if (@$udetail[0]['weblink'] != '') { ?> */}

                      <a href="<?php echo @$udetail[0]['weblink']; ?>" target="_blank" className="web-bg mt-0"><i className="fa fa-chrome"></i></a>

                    {/* <?php } ?> */}

                    {/* <?php if (@$udetail[0]['fblink'] != '') { ?> */}

                      <a href="<?php echo @$udetail[0]['fblink']; ?>" target="_blank" className=" facebook-bg mt-0"><i className="fa fa-facebook"></i></a>

                    {/* // <?php } ?> */}

                    {/* <?php if (@$udetail[0]['instalink'] != '') { ?> */}

                      <a href="<?php echo @$udetail[0]['instalink']; ?>" target="_blank" className=" instagram-bg"><i className="fa fa-instagram"></i></a>
{/* 
                    // <?php } ?> */}

                    {/* <?php if (@$udetail[0]['googlelink'] != '') { ?> */}

                      <a href="<?php echo @$udetail[0]['googlelink']; ?>" target="_blank" className=" google-bg"><i className="fa fa-google"></i></a>

                    {/* // <?php } ?> */}

                    {/* <?php if (@$udetail[0]['twitterlink'] != '') { ?> */}

                      <a href="<?php echo @$udetail[0]['twitterlink']; ?>" target="_blank" className=" twitter-bg"><i className="fa fa-twitter"></i></a>

                    {/* <?php } ?> */}

                    {/* <?php if (@$udetail[0]['youtubelink'] != '') { ?> */}

                      <a href="<?php echo @$udetail[0]['youtubelink']; ?>" target="_blank" className=" google-bg"><i className="fa fa-youtube"></i></a>

                    {/* // <?php } ?> */}

                    {/* <?php if (@$udetail[0]['pinlink'] != '') { ?> */}

                      <a href="<?php echo @$udetail[0]['pinlink']; ?>" target="_blank" className=" pintrest-bg"><i className="fa fa-pintrest"></i></a>

                    {/* // <?php } ?> */}



                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>



      </div>

      <div className="card mb-0">

        <div className="card-body">

          <div className="border-0">

            <div className="tab-content">

              <div className="tab-pane active" id="tab-5">

                <div className="profile-log-switch">

                  <div className="media-heading">

                    <h3 className="card-title mb-3 font-weight-bold">Personal Details</h3>

                  </div>

                  <ul className="usertab-list mb-0">

                    {/* <li><a href="#" className="text-dark"><span className="font-weight-semibold">Full Name :</span> <?php echo @$udetail[0]['custname']; ?></a></li> */}
{/* 
                    <li><a href="#" className="text-dark"><span className="font-weight-semibold">Location :</span> India</a></li>

                    <li><a href="#" className="text-dark"><span className="font-weight-semibold">Email :</span> <?php echo @$udetail[0]['custemail']; ?></a></li>

                    <li><a href="#" className="text-dark"><span className="font-weight-semibold">Phone :</span> <?php echo @$udetail[0]['custphone']; ?> </a></li>

                    <li><a href="#" className="text-dark"><span className="font-weight-semibold">Address :</span> <?php echo @$udetail[0]['custaddress']; ?></a></li> */}



                  </ul>

                  <div className="row profie-img">

                    <div className="col-md-12">

                      <div className="media-heading">

                        <h3 className="card-title mb-3 font-weight-bold">About Me</h3>

                      </div>

                      {/* <p><?php echo @$udetail[0]['aboutme']; ?></p> */}



                    </div>

                  </div>







                </div>

              </div>









            </div>

          </div>

        </div>

      </div>

    </div>







  </div>

</div>

</section>
      
    </>
  )
}
