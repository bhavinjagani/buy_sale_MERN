import React from 'react'
import  '../../styles/MyAccount.css'

export default function AccountLeft() {
  return (
    <>
    <div className="card-header">

<h3 className="card-title">My Dashboard</h3>

</div>

<div className="card-body text-center item-user">

<div className="profile-pic">

  <div className="profile-pic-img"> <span className="bg-success dots" data-toggle="tooltip" data-placement="top" title="" data-original-title="online"></span>

  {/* <?php 

          if(@$udetail[0]['custimg'] == '' ){

            ?> */}

                <img className="brround" src="<?php echo base_url(); ?>images/user.jpg" alt="user"/>
{/* 
            <?php     	

            }else{

                ?> */}

                    <img className="brround" src="<?php echo base_url(); ?>uploads/users/<?php echo @$udetail[0]['custimg']; ?>" alt="user"/>	

        {/* <?php } ?> */}

   </div>

  <a href="#" className="text-dark">

  

 

  

  {/* <h4 className="mt-3 mb-0 font-weight-semibold"><?php echo @$udetail[0]['custname']; ?></h4> */}

  </a> </div>

</div>

<aside className="app-sidebar doc-sidebar my-dash">

<div className="app-sidebar__user clearfix">

  <ul className="side-menu">

    <li className="slide"> <a className="side-menu__item active" data-toggle="slide" href="<?php echo base_url(); ?>profileupdate"><i className="side-menu__icon si si-user"></i><span className="side-menu__label">Edit Profile</span><i className="angle fa fa-angle-right"></i></a>

      

    </li>

    <li className="slide"> <a className="side-menu__item" data-toggle="slide" href="<?php echo base_url(); ?>myads"><i className="side-menu__icon si si-diamond"></i><span className="side-menu__label"> My Ads</span><i className="angle fa fa-angle-right"></i></a>

      

    </li>

    <li className="slide"> <a className="side-menu__item" data-toggle="slide" href="<?php echo base_url(); ?>mysponsor"><i className="side-menu__icon si si-diamond"></i><span className="side-menu__label"> Sponsor Ads</span><i className="angle fa fa-angle-right"></i></a>

      

    </li>

    <li className="slide"> <a className="side-menu__item" data-toggle="slide" href="<?php echo base_url(); ?>pending"><i className="side-menu__icon si si-diamond"></i><span className="side-menu__label"> Pending Approval</span><i className="angle fa fa-angle-right"></i></a>

      

    </li>

    <li className="slide"> <a className="side-menu__item" data-toggle="slide" href="<?php echo base_url(); ?>favorite"><i className="side-menu__icon si si-heart"></i><span className="side-menu__label"> My Favorite</span><i className="angle fa fa-angle-right"></i></a>

      

    </li>

{/* <!--<li className="slide"> <a className="side-menu__item" data-toggle="slide" href="#"><i className="side-menu__icon si si-folder-alt"></i><span className="side-menu__label">Managed Ads</span><i className="angle fa fa-angle-right"></i></a>

      

    </li>

    <li> <a className="side-menu__item" href="payments.html"><i className="side-menu__icon si si-credit-card"></i><span className="side-menu__label">Payments</span></a> </li>--> */}

    <li className="slide"> <a className="side-menu__item" data-toggle="slide" href="<?php echo base_url(); ?>settings"><i className="side-menu__icon si si-settings"></i><span className="side-menu__label"> Settings </span><i className="angle fa fa-angle-right"></i></a>

      <ul className="slide-menu">

        <li><a className="slide-item" href="settings.html">Settings-1</a></li>

        <li><a className="slide-item" href="settings.html">Settings-2</a></li>

      </ul>

    </li>

    <li> <a className="side-menu__item" href="<?php echo base_url(); ?>myaccount/changepass"><i className="side-menu__icon si si-power"></i><span className="side-menu__label">Privacy</span></a> </li>

    <li> <a className="side-menu__item" href="<?php echo base_url(); ?>account/logout"><i className="side-menu__icon si si-power"></i><span className="side-menu__label">Logout</span></a> </li>

  </ul>

</div>

</aside>
      
    </>
  )
}
