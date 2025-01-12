import React from 'react'

export default function AdOwner() {
  return (
    <>
      <div className="col-xl-4 col-lg-4 col-md-12">

<div className="card">

  <div className="card-header">

    <h3 className="card-title">Posted By</h3>

  </div>

  <div className="card-body  item-user">

    <div className="profile-pic mb-0">
{/* <!-- 
      <?php if (@$ad_details[0]['custimg'] != '') { ?>

        <img src="<?php echo base_url(); ?>uploads/users/<?php echo @$ad_details[0]['custimg']; ?>" className="brround avatar-xxl" alt="user">

      <?php } else { ?>

        <img src="<?php echo base_url(); ?>images/user.jpg" className="brround avatar-xxl" alt="user">

      <?php } ?> -->

      <div> <a href="<?php echo base_url(); ?>profile/<?php echo @$ad_details[0]['opid']; ?>" className="text-dark">

          <h4 className="mt-3 mb-1 font-weight-semibold"><?php echo @$ad_details[0]['custname']; ?></h4>

        </a> <span className="text-muted">Member Since

          <!-- <?php

          $date = new DateTime(@$ad_details[0]['created_date']);

          $new_date_format = $date->format('d-M-Y');

          echo $new_date_format;

          ?> -->

        </span> */}

        <h6 className="mt-2 mb-0"><a href="<?php echo base_url(); ?>profile/user/<?php echo @$ad_details[0]['opid']; ?>" className="btn btn-primary btn-sm">See All Ads</a></h6>

      </div>

    </div>

  </div>

  <div className="card-body item-user">

    <h4 className="mb-4">Contact Info</h4>

    <div>

      {/* <h6><span className="font-weight-semibold"><i className="fa fa-envelope mr-3 mb-2"></i></span><a href="#" className="text-body"> <?php echo @$ad_details[0]['custemail']; ?></a></h6> */}

      {/* <h6><span className="font-weight-semibold"><i className="fa fa-phone mr-3  mb-2"></i></span><a href="#" className="text-primary"> <?php echo @$ad_details[0]['custphone']; ?></a></h6> */}

    </div>

    <div className=" item-user-icons mt-4">
{/* 
      <?php if (@$ad_details[0]['weblink'] != '') { ?>

        <a href="<?php echo @$ad_details[0]['weblink']; ?>" target="_blank" className="web-bg mt-0"><i className="fa fa-chrome"></i></a>

      <?php } ?>

      <?php if (@$ad_details[0]['fblink'] != '') { ?>

        <a href="<?php echo @$ad_details[0]['fblink']; ?>" target="_blank"" className=" facebook-bg mt-0"><i className="fa fa-facebook"></i></a>

      <?php } ?>

      <?php if (@$ad_details[0]['instalink'] != '') { ?>

        <a href="<?php echo @$ad_details[0]['instalink']; ?>" target="_blank"" className=" instagram-bg"><i className="fa fa-instagram"></i></a>

      <?php } ?>

      <?php if (@$ad_details[0]['googlelink'] != '') { ?>

        <a href="<?php echo @$ad_details[0]['googlelink']; ?>" target="_blank"" className=" google-bg"><i className="fa fa-google"></i></a>

      <?php } ?>

      <?php if (@$ad_details[0]['twitterlink'] != '') { ?>

        <a href="<?php echo @$ad_details[0]['twitterlink']; ?>" target="_blank"" className=" twitter-bg"><i className="fa fa-twitter"></i></a>

      <?php } ?>

      <?php if (@$ad_details[0]['youtubelink'] != '') { ?>

        <a href="<?php echo @$ad_details[0]['youtubelink']; ?>" target="_blank"" className=" google-bg"><i className="fa fa-youtube"></i></a>

      <?php } ?>

      <?php if (@$ad_details[0]['pinlink'] != '') { ?>

        <a href="<?php echo @$ad_details[0]['pinlink']; ?>" target="_blank"" className=" pintrest-bg"><i className="fa fa-pintrest"></i></a>

      <?php } ?> */}

    </div>

  </div>

  <div className="card-footer">

    <div className="text-left"> <a href="#" className="btn  btn-info"><i className="fa fa-envelope"></i> Chat</a> <a href="#" className="btn btn-primary" data-toggle="modal" data-target="#contact"><i className="fa fa-user"></i> Contact Me</a> </div>

  </div>

</div>

<div className="card mb-0">

  <div className="card-header">

    <h3 className="card-title">Safety Tips For Buyers</h3>

  </div>

  <div className="card-body">

    <ul className="list-unstyled widget-spec  mb-0">

      <li> <i className="fa fa-check text-success" aria-hidden="true"></i> Meet Seller at public Place </li>

      <li> <i className="fa fa-check text-success" aria-hidden="true"></i> Check item before you buy </li>

      <li> <i className="fa fa-check text-success" aria-hidden="true"></i> Pay only after collecting item </li>

    </ul>

  </div>

</div>

<div className="card">

  <div className="card-header">

    <h3 className="card-title">Benefits Of Premium Ad</h3>

  </div>

  <div className="card-body pb-2">

    <ul className="list-unstyled widget-spec vertical-scroll mb-0" style="overflow-y: hidden; height: 124px;">

      <li style="overflow: hidden; height: 20.9948px; padding-top: 0px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 7.99803px;" className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show in Google results </li>

      <li style="" className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium Ads Active </li>

      <li style="" className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads are displayed on top </li>

      <li style="" className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show in Google results </li>

      <li style="overflow: hidden; height: 0.0158645px; padding-top: 0px; margin-top: 0px; padding-bottom: 0px; margin-bottom: 0.00604361px;"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium Ads Active </li>

      <li style="display: none;"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads are displayed on top </li>

      <li style="display: none;"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show in Google results </li>

      <li style="display: none;"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium Ads Active </li>

      <li style="display: none;"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads are displayed on top </li>

      <li style="display: none;"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show in Google results </li>

      <li style="display: none;"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium Ads Active </li>

      <li style="display: none;"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads are displayed on top </li>

      <li style="display: none;"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show in Google results </li>

      <li style="display: none;"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium Ads Active </li>

      <li style="display: none;"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads are displayed on top </li>

      <li style="display: none;"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show in Google results </li>

    </ul>

  </div>

</div>
    </>
  )
}
