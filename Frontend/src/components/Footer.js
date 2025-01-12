import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white">

    

<div className="bg-dark text-white p-0 border-top">

  <div className="container">

    <div className="p-2 text-center footer-links"> 

        <a href="<?php echo base_url(); ?>" className="btn btn-link">Home</a>

        <a href="<?php echo base_url(); ?>about" className="btn btn-link">About Us</a>

        <a href="<?php echo base_url(); ?>terms" className="btn btn-link">Terms Of Use</a>

        <a href="<?php echo base_url(); ?>privacy" className="btn btn-link">Privacy And Policy</a>

        <a href="<?php echo base_url(); ?>faq" className="btn btn-link">Faq</a>

        {/* <!--<a href="#" className="btn btn-link">Privacy Policy</a>--> */}

    </div>

  </div>

</div>



<div className="bg-dark text-white p-0 border-top">

  <div className="container">

    <div className="row d-flex">

      <div className="col-lg-8 col-sm-12  mt-2 mb-2 text-left "> Copyright © 2020 <a href="#" className="fs-14 text-primary">Buynsale</a>. Designed by <a href="#" className="fs-14 text-primary">Buynsale</a> All rights reserved. </div>

      <div className="col-lg-4 col-sm-12 ml-auto mb-2 mt-2">

        <ul className="social mb-0">

          <li> <a className="social-icon" href="https://www.facebook.com/buynsaleofficial" target="_blank"><i className="fa fa-facebook"></i></a> </li>

          <li> <a className="social-icon" href="https://twitter.com/buyn_sale" target="_blank"><i className="fa fa-twitter"></i></a> </li>

          <li> <a className="social-icon" href="https://www.instagram.com/buynsale_official/" target="_blank"><i className="fa fa-instagram"></i></a> </li>

          <li> <a className="social-icon" href="https://www.youtube.com/channel/UC9ws_9_IeJuV4rYWyFcMfIQ" target="_blank"><i className="fa fa-youtube"></i></a> </li>

        </ul>

      </div>

    </div>

  </div>

</div>



</footer>
    </>
  )
}
