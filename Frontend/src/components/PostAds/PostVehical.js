import React from 'react'

export default function Vehical() {
  return (
    <>
      <section className="sptb">

        <div className="container">

          <div className="row ">

            <div className="col-lg-8 col-md-12 col-md-12">

              <div className="card mb-lg-0">

                <div className="card-header ">

                  <h3 className="card-title">List Vehicle For Sale</h3>

                </div>




                <div className="alert alert-info">

                  You have Already created ads with this title your ads is pending wait 24 hour your ads will be live in 24
                  hour.

                </div>

                <form className="form-horizontal" enctype="multipart/form-data" method="post" name="frm"
                  onsubmit="return chakval(frm);" action="<?php echo base_url(); ?>ads/createad">

                  <div className="card-body">

                    <div className="form-group">

                      <label className="form-label text-dark">Ad Title</label>

                      <input type="text" className="form-control" id="txtadtitle" name="txtadtitle" placeholder="Ad title"
                        required />

                    </div>

                    <div className="row">

                      <div className="form-group col-sm-4 col-md-4">

                        <label className="form-label text-dark">Category</label>

                        <select name="txtcategory" id="txtcategory" required className="category form-control custom-select1"
                        >

                          <option value="" selected="selected"> Select a category...</option>

                          <option value=""> </option>

                        </select>

                      </div>

                      <div className="form-group col-sm-4 col-md-4">

                        <label className="form-label text-dark">Sub Category</label>

                        <select name="txtsub_category" id="txtsub_category" required
                          className="subcategory form-control custom-select1" >

                          <option value="" selected="selected"> Select Subcategory...</option>

                        </select>

                      </div>

                      <div className="form-group col-sm-4 col-md-4">

                        <label className="form-label text-dark">Vehicle Price</label>

                        <input type="text" className="form-control" id="txtprice" required name="txtprice"
                          placeholder="Vehicle Price" />

                      </div>

                    </div>



                    <div className="row">



                      <div className="form-group col-sm-4 col-md-4">

                        <label className="form-label text-dark">Make Company Name</label>

                        <input type="text" id="txtmake" name="txtmake" className="form-control" placeholder="Company Name"
                          required />

                      </div>

                      <div className="form-group col-sm-4 col-md-4">

                        <label className="form-label text-dark">Model</label>

                        <input type="text" id="txtmodel" name="txtmodel" className="form-control" placeholder="Model" required />

                      </div>

                      <div className="form-group col-sm-4 col-md-4">

                        <label className="form-label text-dark">Year</label>

                        <select className="form-control custom-select1" id="txtyear" name="txtyear" required>

                          <option value="">Select Year</option>

                          <option value="2021">2021</option>

                          <option value="2020">2020</option>

                          <option value="2019">2019</option>

                          <option value="2018">2018</option>

                          <option value="2017">2017</option>

                          <option value="2016">2016</option>

                          <option value="2015">2015</option>

                          <option value="2014">2014</option>

                          <option value="2013">2013</option>

                          <option value="2012">2012</option>

                          <option value="2011">2011</option>

                          <option value="2010">2010</option>

                          <option value="2009">2009</option>

                          <option value="2008">2008</option>

                          <option value="2007">2007</option>

                          <option value="2006">2006</option>

                          <option value="2005">2005</option>

                          <option value="2004">2004</option>

                          <option value="2003">2003</option>

                          <option value="2002">2002</option>

                          <option value="2001">2001</option>

                          <option value="2000">2000</option>

                          <option value="1999">1999</option>

                          <option value="1998">1998</option>

                          <option value="1997">1997</option>

                          <option value="1996">1996</option>

                          <option value="1995">1995</option>

                          <option value="1994">1994</option>

                          <option value="1993">1993</option>

                          <option value="1992">1992</option>

                          <option value="1991">1991</option>

                          <option value="1990">1990</option>

                        </select>

                      </div>

                      <div className="form-group col-sm-4 col-md-4">

                        <label className="form-label text-dark">Version</label>

                        <select className="form-control custom-select1" id="txtversion" name="txtversion" required>

                          <option value="">Select Version</option>

                          <option value="Automatic">Automatic</option>

                          <option value="Manual">Manual</option>

                        </select>

                      </div>

                      <div className="form-group col-sm-4 col-md-4">

                        <label className="form-label text-dark">Fuel</label>

                        <select className="form-control custom-select1" id="txtfuel" name="txtfuel" required>

                          <option value="">Select Fuel</option>

                          <option value="Petrol">Petrol</option>

                          <option value="Diesel">Diesel</option>

                          <option value="Petrol-CNG">Petrol-CNG</option>

                          <option value="Petrol-LPG">Petrol-LPG</option>

                          <option value="Electric">Electric</option>

                        </select>

                      </div>

                      <div className="form-group col-sm-4 col-md-4">

                        <label className="form-label text-dark">Color</label>

                        <input type="text" id="txtcolor" name="txtcolor" className="form-control" placeholder="Color" required />

                      </div>

                      <div className="form-group col-sm-4 col-md-4">

                        <label className="form-label text-dark">Owner</label>

                        <select className="form-control custom-select1" id="txtowner" name="txtowner" required>

                          <option value="">Select Owner</option>

                          <option value="1">1</option>

                          <option value="2">2</option>

                          <option value="3">3</option>

                          <option value="4">4</option>

                          <option value="5">5</option>

                          <option value="morethan5">More Than 5</option>



                        </select>

                      </div>

                      <div className="form-group col-sm-4 col-md-4">

                        <label className="form-label text-dark">Insurance</label>

                        <select className="form-control custom-select1" id="txtinsurance" name="txtinsurance" required>

                          <option value="">Select Insurance</option>

                          <option value="Full">Full</option>

                          <option value="Third Party">Third Party</option>

                          <option value="Nill">Nill</option>

                        </select>

                      </div>

                      <div className="form-group col-sm-4 col-md-4">

                        <label className="form-label text-dark">KM Driven</label>

                        <input type="text" id="txtkmdriven" name="txtkmdriven" className="form-control" placeholder="Km's Driven"
                          required />

                      </div>

                    </div>











                    <div className="form-group">

                      <label className="form-label text-dark">Type of Condition</label>

                      <div className="d-md-flex ad-post-details">

                        <select className="form-control custom-select1" id="txtcondition" name="txtcondition" required>

                          <option value="OLD Item">Used Item</option>

                          <option value="New Item">New Item</option>

                        </select>

                      </div>

                    </div>

                    <div className="form-group">

                      <label className="form-label text-dark">Description</label>

                      <textarea className="form-control" name="ad_desc" id="ad_desc" rows="6" placeholder="text here.."
                        required></textarea>

                    </div>


                    <div className="form-group">

                      <div className="custom-file">


                        <center>
                          <p className="help-block">Allowd file type : JPEG,JPG,GIF,PNG</p>
                        </center>

                        <div className="form-group">

                          <label className="col-md-3 control-label" for="textarea"> Picture <suv>*</suv></label>

                          <div className="col-md-8">

                            <div className="mb10">

                              <input id="input-upload-img1" placeholder="Main Image" required name="txtimage1" type="file"
                                className="file" data-preview-file-type="text" />

                            </div>

                            <div className="mb10">

                              <input id="input-upload-img2" name="txtimage2" type="file" className="file"
                                data-preview-file-type="text" />

                            </div>

                            <div className="mb10">

                              <input id="input-upload-img3" name="txtimage3" type="file" className="file"
                                data-preview-file-type="text" />

                            </div>

                            <div className="mb10">

                              <input id="input-upload-img4" name="txtimage4" type="file" className="file"
                                data-preview-file-type="text" />

                            </div>

                            <div className="mb10">

                              <input id="input-upload-img5" name="txtimage5" type="file" className="file"
                                data-preview-file-type="text" />

                            </div>

                            <div className="mb10">

                              <input id="input-upload-img6" name="txtimage6" type="file" className="file"
                                data-preview-file-type="text" />

                            </div>

                            <p className="help-block">Add up to 6 photos. Use a real image of your product, not catalogs.</p>

                          </div>

                        </div>

                      </div>

                    </div>



                    <div className="card-header ">

                      <h3 className="card-title">Location</h3>

                    </div>



                    <div className="row">


                      <input type="hidden" name="txtad-custname" value="<?php echo @$userdetail[0]['custname']; ?>" />

                      <input type="hidden" name="txtad-cusphone" value="<?php echo @$userdetail[0]['custphone']; ?>" />

                      <input type="hidden" name="ad_type" value="vehicle" />

                      <div className="form-group col-sm-4 col-md-4">

                        <label className="form-label text-dark">Country</label>

                        <select className="form-control custom-select1" required>

                          <option value="0">India</option>

                        </select>

                      </div>

                      <div className="form-group col-sm-4 col-md-4">

                        <label className="form-label text-dark">State</label>

                        <select id="txtstate" name="txtstate" className="form-control custom-select1 state" required>

                          <option value="">Select State</option>

                          <option value=""> </option>


                        </select>

                      </div>

                      <div className="form-group col-sm-4 col-md-4">

                        <label className="form-label text-dark">City</label>

                        <select id="txtcity" name="txtcity" className="form-control custom-select1 city" required>

                          <option value="">Select City</option>



                        </select>

                      </div>





                    </div>

                  </div>



                  <div className="card-footer ">
                    <div className="col-md-8"><input type="submit" name="txtvehicleadd" value="Submit Ads"
                      className="btn btn-secondary" /></div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">

              <div className="card">

                <div className="card-header">

                  <h3 className="card-title">Terms And Conditions</h3>

                </div>

                <div className="card-body">

                  <ul className="list-unstyled widget-spec  mb-0">

                    <li> <i className="fa fa-check text-success" aria-hidden="true"></i>Money Not Refundable </li>

                    <li> <i className="fa fa-check text-success" aria-hidden="true"></i>You can renew your Premium ad after
                      experted. </li>

                    <li> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads are active for depend on
                      package. </li>

                    <li className="ml-5 mb-0"> <a href="tips.html"> View more..</a> </li>

                  </ul>

                </div>

              </div>

              <div className="card">

                <div className="card-header">

                  <h3 className="card-title">Benefits Of Premium Ad</h3>

                </div>

                <div className="card-body pb-2">

                  <ul className="list-unstyled widget-spec vertical-scroll mb-0" style={{ overflow: "hidden", height: "124px;" }}>

                    <li className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads are
                      displayed on top </li>

                    <li className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show
                      in Google results </li>

                    <li className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium Ads Active </li>

                    <li className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads are
                      displayed on top </li>

                    <li className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show
                      in Google results </li>

                    <li className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium Ads Active </li>

                    <li className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads are
                      displayed on top </li>

                    <li className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show
                      in Google results </li>

                    <li className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium Ads Active </li>

                    <li className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads are
                      displayed on top </li>

                    <li className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show
                      in Google results </li>

                    <li className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium Ads Active </li>

                    <li className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads are
                      displayed on top </li>

                    <li className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads will be Show
                      in Google results </li>

                    <li className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium Ads Active </li>

                    <li className="undefined"> <i className="fa fa-check text-success" aria-hidden="true"></i>Premium ads are
                      displayed on top </li>

                  </ul>

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

                    <li className="ml-5 mb-0"> <a href="tips.html"> View more..</a> </li>

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
