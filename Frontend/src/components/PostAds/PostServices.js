import React from 'react'

export default function Services() {
  return (
    <>
      <section class="sptb">

        <div class="container">

          <div class="row ">

            <div class="col-lg-8 col-md-12 col-md-12">

              <div class="card mb-lg-0">

                <div class="card-header ">

                  <h3 class="card-title">List Your Service Classifieds </h3>

                </div>


                <div class="alert alert-warning">

                  <i class="icon-warning"></i> You have selected Invalid File type ! Allowd file type : JPEG,JPG,GIF,PNG

                </div>





                <div class="alert alert-info">

                  You have Already created ads with this title your ads is pending wait 24 hour your ads will be live in 24 hour.

                </div>


                <form class="form-horizontal" enctype="multipart/form-data" method="post" name="frm" onsubmit="return chakval(frm);" action="<?php echo base_url(); ?>ads/createad">

                  <div class="card-body">

                    <div class="form-group">

                      <label class="form-label text-dark">Ad Title</label>

                      <input type="text" class="form-control" id="txtadtitle" name="txtadtitle" required placeholder="Ad title"/>

                    </div>

                    <div class="row">



                      <div class="form-group col-sm-4 col-md-4">

                        <label class="form-label text-dark">Category</label>

                        <select name="txtcategory" id="txtcategory" required class="category form-control custom-select1">

                          <option value="" selected="selected"> Select a category...</option>

                          <option value="">  </option>

                        </select>

                      </div>

                      <div class="form-group col-sm-4 col-md-4">

                        <label class="form-label text-dark">Sub Category</label>

                        <select name="txtsub_category" id="txtsub_category" required class="subcategory form-control custom-select1" >

                          <option value="" selected="selected"> Select Subcategory...</option>

                        </select>

                      </div>



                      <div class="form-group col-sm-4 col-md-4">

                        <label class="form-label text-dark">Service Fees</label>

                        <input type="text" class="form-control" id="txtprice" required name="txtprice" placeholder="Service Fees"/>

                      </div>

                    </div>







                    <div class="form-group">

                      <label class="form-label text-dark">Description</label>

                      <textarea class="form-control" name="ad_desc" id="ad_desc" rows="6" placeholder="text here.." required></textarea>

                    </div>



                    <div class="form-group">

                      <div class="custom-file">





                        <center>
                          <p class="help-block">Allowd file type : JPEG,JPG,GIF,PNG</p>
                        </center>

                        <div class="form-group">

                          <label class="col-md-3 control-label" for="textarea"> Picture <suv>*</suv></label>

                          <div class="col-md-8">

                            <div class="mb10">

                              <input id="input-upload-img1" placeholder="Main Image" required name="txtimage1" type="file" class="file" data-preview-file-type="text"/>

                            </div>

                            <div class="mb10">

                              <input id="input-upload-img2" name="txtimage2" type="file" class="file" data-preview-file-type="text"/>

                            </div>

                            <div class="mb10">

                              <input id="input-upload-img3" name="txtimage3" type="file" class="file" data-preview-file-type="text"/>

                            </div>

                            <div class="mb10">

                              <input id="input-upload-img4" name="txtimage4" type="file" class="file" data-preview-file-type="text"/>

                            </div>

                            <div class="mb10">

                              <input id="input-upload-img5" name="txtimage5" type="file" class="file" data-preview-file-type="text"/>

                            </div>

                            <div class="mb10">

                              <input id="input-upload-img6" name="txtimage6" type="file" class="file" data-preview-file-type="text"/>

                            </div>

                            <p class="help-block">Add up to 6 photos. Use a real image of your product, not catalogs.</p>

                          </div>

                        </div>

                      </div>

                    </div>

                    <div class="card-header ">

                      <h3 class="card-title">Location</h3>

                    </div>

                    <div class="row">

                      <input type="hidden" name="txtad-custname" value="<?php echo @$userdetail[0]['custname']; ?>"/>

                        <input type="hidden" name="txtad-cusphone" value="<?php echo @$userdetail[0]['custphone']; ?>"/>

                          <input type="hidden" name="ad_type" value="service"/>

                            <div class="form-group col-sm-4 col-md-4">

                              <label class="form-label text-dark">Country</label>

                              <select class="form-control custom-select1" required>

                                <option value="0">India</option>

                              </select>

                            </div>

                            <div class="form-group col-sm-4 col-md-4">

                              <label class="form-label text-dark">State</label>

                              <select id="txtstate" name="txtstate" class="form-control custom-select1 state" required>

                                <option value="">Select State</option>

                                <option value="<?php echo @$statelist[$sicat]['state_id']; ?>">  </option>



                              </select>

                            </div>

                            <div class="form-group col-sm-4 col-md-4">

                              <label class="form-label text-dark">City</label>

                              <select id="txtcity" name="txtcity" class="form-control custom-select1 city" required>

                                <option value="">Select City</option>



                              </select>

                            </div>





                          </div>



                        </div>

                        <div class="card-footer ">
                          <div class="col-md-8"><input type="submit" name="txtserviceadd" value="Submit Ads" class="btn btn-secondary"/></div>
                        </div>

                      </form>

                    </div>

                  </div>

                  <div class="col-lg-4 col-md-12">

                    <div class="card">

                      <div class="card-header">

                        <h3 class="card-title">Terms And Conditions</h3>

                      </div>

                      <div class="card-body">

                        <ul class="list-unstyled widget-spec  mb-0">

                          <li> <i class="fa fa-check text-success" aria-hidden="true"></i>Money Not Refundable </li>

                          <li> <i class="fa fa-check text-success" aria-hidden="true"></i>You can renew your Premium ad after experted. </li>

                          <li> <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads are active for depend on package. </li>

                          <li class="ml-5 mb-0"> <a href="tips.html"> View more..</a> </li>

                        </ul>

                      </div>

                    </div>

                    <div class="card">

                      <div class="card-header">

                        <h3 class="card-title">Benefits Of Premium Ad</h3>

                      </div>

                      <div class="card-body pb-2">

                        <ul class="list-unstyled widget-spec vertical-scroll mb-0" style={{ overflow: "hidden", height: "124px" }}>

                          <li style={{overflow: "hidden" , height: "20.5598px" , paddingTop: "0px" , marginTop: "0px" , paddingBottom: "0px" , marginBottom: "7.83229px"}} class="undefined"> <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads are displayed on top </li>

                          <li class="undefined"> <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show in Google results </li>

                          <li class="undefined"> <i class="fa fa-check text-success" aria-hidden="true"></i>Premium Ads Active </li>

                          <li class="undefined"> <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads are displayed on top </li>

                          <li style={{overflow: "hidden" , height: "0.593122px" , paddingTop: "0px" , marginTop: "0px" , paddingBottom: "0px", marginBottom: "0.225951px"}} class="undefined"> <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show in Google results </li>

                          <li class="undefined"> <i class="fa fa-check text-success" aria-hidden="true"></i>Premium Ads Active </li>

                          <li class="undefined"> <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads are displayed on top </li>

                          <li class="undefined"> <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show in Google results </li>

                          <li class="undefined"> <i class="fa fa-check text-success" aria-hidden="true"></i>Premium Ads Active </li>

                          <li class="undefined"> <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads are displayed on top </li>

                          <li class="undefined"> <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show in Google results </li>

                          <li class="undefined"> <i class="fa fa-check text-success" aria-hidden="true"></i>Premium Ads Active </li>

                          <li class="undefined"> <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads are displayed on top </li>

                          <li class="undefined"> <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show in Google results </li>

                          <li class="undefined"> <i class="fa fa-check text-success" aria-hidden="true"></i>Premium Ads Active </li>

                          <li class="undefined"> <i class="fa fa-check text-success" aria-hidden="true"></i>Premium ads are displayed on top </li>

                        </ul>

                      </div>

                    </div>

                    <div class="card mb-0">

                      <div class="card-header">

                        <h3 class="card-title">Safety Tips For Buyers</h3>

                      </div>

                      <div class="card-body">

                        <ul class="list-unstyled widget-spec  mb-0">

                          <li> <i class="fa fa-check text-success" aria-hidden="true"></i> Meet Seller at public Place </li>

                          <li> <i class="fa fa-check text-success" aria-hidden="true"></i> Check item before you buy </li>

                          <li> <i class="fa fa-check text-success" aria-hidden="true"></i> Pay only after collecting item </li>

                          <li class="ml-5 mb-0"> <a href="tips.html"> View more..</a> </li>

                        </ul>

                      </div>

                    </div>

                  </div>

              </div>

            </div>

          </section>

        </>
        )
}
