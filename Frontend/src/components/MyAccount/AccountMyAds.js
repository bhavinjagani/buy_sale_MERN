import React from 'react'

export default function AccountMyAds() {
    return (
        <>
            <section className="sptb">

                <div className="container">

                    <div className="row">

                        <div className="col-xl-3 col-lg-12 col-md-12">

                            <div className="card">





                                {/* <?php include("profile-left.php"); ?> */}

                            </div>





                        </div>

                        <div className="col-xl-9 col-lg-12 col-md-12">

                            <div className="card mb-0">

                                <div className="card-header">

                                    <h3 className="card-title">My Ads</h3>

                                </div>

                                <div className="card-body">

                                    <div className="ads-tabs">

                                        <div className="tabs-menus">

                                            <ul className="nav panel-tabs">

                                                <li className=""><a href="#tab1" className="active" data-toggle="tab">Published</a></li>

                                                <li><a href="#tab2" data-toggle="tab">Sold</a></li>

                                                <li><a href="#tab3" data-toggle="tab">Trash</a></li>

                                            </ul>

                                        </div>

                                        <div className="tab-content">

                                            <div className="tab-pane active table-responsive border-top userprof-tab" id="tab1">

                                                <table className="table table-bordered table-hover mb-0 text-nowrap">

                                                    <thead>

                                                        <tr>

                                                            <th></th>

                                                            <th>Item</th>

                                                            <th>Category</th>

                                                            <th>Price</th>

                                                            <th>Ad Status</th>

                                                            <th>Action</th>

                                                        </tr>

                                                    </thead>

                                                    <tbody>


                                                        {/* 
                  <?php 

                    $alladcnt = count($allads);

                    //$alladcnt = 12;

                    for($allad=0;$allad<$alladcnt;$allad++)

                    { 

                        $alladimgtot = explode(',',@$allads[$allad]['ad_image']); 

                    ?> */}

                                                        <tr>

                                                            <td><label className="custom-control custom-checkbox">

                                                                <input type="checkbox" className="custom-control-input" name="checkbox" value="checkbox" />

                                                                <span className="custom-control-label"></span> </label></td>

                                                            <td><div className="media mt-0 mb-0">

                                                                <div className="card-aside-img">

                                                                    <a href="<?php echo base_url(); ?>ads/view/<?php echo @$allads[$allad]['ad_id'].'/'.str_replace(' ','-',@$allads[$allad]['ad_title']).'.html'; ?>"></a>

                                                                    {/* <?php

                      if(@$alladimgtot[0] == '') { $imagename = base_url().'images/no_image.jpg'; }else{

                        $imagename = 'uploads/small/'.@$alladimgtot[0]; }

                   ?> */}

                                                                    <img src="<?php echo base_url().@$imagename; ?>" alt="<?php echo @$allads[$allad]['ad_title']; ?>" className="cover-image" />

                                                                </div>

                                                                <div className="media-body">

                                                                    <div className="card-item-desc ml-4 p-0 mt-2">

                                                                        <a target="new" href="<?php echo base_url(); ?>ads/view/<?php echo @$allads[$allad]['ad_id'].'/'.str_replace(' ','-',@$allads[$allad]['ad_title']).'.html'; ?>" className="text-dark">

                                                                            <h4 className="font-weight-semibold mt-1 protitle acc-adtitle"></h4>

                                                                        </a>

                                                                        <i className="fa fa-tag me-1"></i> <br/>

                                                                            <i className="fa fa-clock-o me-1"></i> Visitors : <br/>

                                                                                {/* <i className="fa fa-calendar-o text-muted mr-1"></i> <?php $date = new DateTime(@$allads[$allad]['adcreated_date']); echo @$date->format('d M-Y'); ?> */}


                                                                            </div>

                                                                    </div>

                                                                </div>





                                                            </td>

                                                            {/* <td><?php echo @$allads[$allad]['cat_name']; ?></td> */}

                                                            {/* <td className="font-weight-semibold fs-16">&#8377; <?php echo @$allads[$allad]['price']; ?></td>

                                                            <td><a href="#" className="badge badge-success"><?php echo @$allads[$allad]['status']; ?></a></td> */}

                                                            <td>


{/* 
                                                                <?php if(@$allads[$allad]['ad_type'] == 'item'){ ?> */}

                      

                      <a className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit" href="<?php echo base_url(); ?>ads/updateitem/<?php echo @$allads[$allad]['ad_id']; ?>"><i className="fa fa-pencil"></i></a> 

                      {/* <? php } ?> */}



                                                                {/* <?php if(@$allads[$allad]['ad_type'] == 'vehicle'){ ?> */}

                      

                      <a className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit" href="<?php echo base_url(); ?>ads/updatevehicle/<?php echo @$allads[$allad]['ad_id']; ?>"><i className="fa fa-pencil"></i></a> 

                      {/* <? php } ?> */}

                                                                {/* <?php if(@$allads[$allad]['ad_type'] == 'property'){ ?> */}

                      

                      <a className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit" href="<?php echo base_url(); ?>ads/updateproperty/<?php echo @$allads[$allad]['ad_id']; ?>"><i className="fa fa-pencil"></i></a> 

                    {/* //   <? php } ?> */}

                                                                {/* // <?php if(@$allads[$allad]['ad_type'] == 'service'){ ?> */}

                      

                      <a className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit" href="<?php echo base_url(); ?>ads/updateservice/<?php echo @$allads[$allad]['ad_id']; ?>"><i className="fa fa-pencil"></i></a> 

                    {/* //   <? php } ?> */}







                                                                <a onClick="return del();" href="<?php echo base_url(); ?>ads/adstrash/<?php echo @$allads[$allad]['ad_id']; ?>" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i className="fa fa-trash-o"></i></a>

                                                                <a onClick="return soldout();" href="<?php echo base_url(); ?>ads/adsold/<?php echo @$allads[$allad]['ad_id']; ?>" className="btn btn-info btn-sm text-white" data-toggle="tooltip" data-original-title="Save to Wishlist"><i className="fa fa-circle"></i></a>

                                                                <a target="new" href="<?php echo base_url(); ?>ads/view/<?php echo @$allads[$allad]['ad_id'].'/'.str_replace(' ','-',@$allads[$allad]['ad_title']).'.html'; ?>" className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i className="fa fa-eye"></i></a></td>

                                                        </tr>

                                                        {/* // <?php } ?> */}





                                                    </tbody>

                                                </table>

                                            </div>

                                            <div className="tab-pane  table-responsive border-top userprof-tab" id="tab2">

                                                <table className="table table-bordered table-hover mb-0 text-nowrap">

                                                    <thead>

                                                        <tr>

                                                            <th></th>

                                                            <th>Item</th>

                                                            <th>Category</th>

                                                            <th>Price</th>

                                                            <th>Ad Status</th>

                                                            <th>Action</th>

                                                        </tr>

                                                    </thead>

                                                    <tbody>

                                                        {/* <?php

                                                        $alladcnt = count($users_soldads);

                                                        //$alladcnt = 12;

                                                        for($allad=0;$allad<$alladcnt;$allad++)

                                                        {

                                                            $alladimgtot = explode(',', @$users_soldads[$allad]['ad_image']); 

                    ?> */}

                                                        <tr>

                                                            <td><label className="custom-control custom-checkbox">

                                                                <input type="checkbox" className="custom-control-input" name="checkbox" value="checkbox"/>

                                                                    <span className="custom-control-label"></span> </label></td>

                                                            <td><div className="media mt-0 mb-0">

                                                                <div className="card-aside-img">

                                                                    {/* <?php

                                                                    if(@$alladimgtot[0] == '') {$imagename = base_url().'images/no_image.jpg'; }else{

                                                                        $imagename = 'uploads/small/'.@$alladimgtot[0]; }

                                                                    ?> */}

                                                                    <img src="<?php echo base_url().@$imagename; ?>" alt="<?php echo @$users_soldads[$allad]['ad_title']; ?>" className="cover-image"/>

                                                                </div>

                                                                <div className="media-body">

                                                                    <div className="card-item-desc ml-4 p-0 mt-2">

                                                                        <a target="new" href="<?php echo base_url(); ?>ads/view/<?php echo @$users_soldads[$allad]['ad_id'].'/'.str_replace(' ','-',@$users_soldads[$allad]['ad_title']).'.html'; ?>" className="text-dark">

                                                                            {/* <h4 className="font-weight-semibold mt-1 protitle"><?php echo @$users_soldads[$allad]['ad_title']; ?>  </h4> */}

                                                                        </a>

                                                                        {/* <i className="fa fa-clock-o mr-1"></i> <?php echo @$users_soldads[$allad]['ad_type']; ?> */}

                                                                        {/* <p>Visitors : <?php echo @$users_soldads[$allad]['views']; ?></p> */}

                                                                    </div>

                                                                </div>

                                                            </div></td>

                                                            {/* <td><?php echo @$users_soldads[$allad]['cat_name']; ?></td> */}

                                                            {/* <td className="font-weight-semibold fs-16">&#8377; <?php echo @$users_soldads[$allad]['price']; ?></td>

                                                            <td><a href="#" className="badge badge-success"><?php echo @$users_soldads[$allad]['status']; ?></a></td> */}

                                                            <td>

                                                                <a href="<?php echo base_url(); ?>ads/adstock/<?php echo @$users_soldads[$allad]['ad_id']; ?>" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i className="fa fa-circle"></i></a>

                                                                <a onClick="return del();" href="<?php echo base_url(); ?>ads/adstrash/<?php echo @$users_soldads[$allad]['ad_id']; ?>" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i className="fa fa-trash-o"></i></a>

                                                                <a className="btn btn-primary btn-sm text-white" data-toggle="tooltip" data-original-title="View"><i className="fa fa-eye"></i></a></td>

                                                        </tr>



                                                        {/* <?php } ?> */}

                                                    </tbody>

                                                </table>

                                            </div>

                                            <div className="tab-pane  table-responsive border-top userprof-tab" id="tab3">

                                                <table className="table table-bordered table-hover  text-nowrap mb-0">

                                                    <thead>

                                                        <tr>

                                                            <th></th>

                                                            <th>Item</th>

                                                            <th>Category</th>

                                                            <th>Price</th>

                                                            <th>Ad Status</th>

                                                            <th>Action</th>

                                                        </tr>

                                                    </thead>

                                                    <tbody>

                                                        {/* <?php

                                                        $alladcnt = count($users_trashads);

                                                        //$alladcnt = 12;

                                                        for($allad=0;$allad<$alladcnt;$allad++)

                                                        {

                                                            $alladimgtot = explode(',', @$users_trashads[$allad]['ad_image']); 

                                                         ?> */}

                                                        <tr>

                                                            <td><label className="custom-control custom-checkbox">

                                                                <input type="checkbox" className="custom-control-input" name="checkbox" value="checkbox"/>

                                                                    <span className="custom-control-label"></span> </label></td>

                                                            <td><div className="media mt-0 mb-0">

                                                                <div className="card-aside-img">

                                                                    {/* <?php

                                                                    if(@$alladimgtot[0] == '') {$imagename = base_url().'images/no_image.jpg'; }else{

                                                                        $imagename = 'uploads/small/'.@$alladimgtot[0]; }

                                                                      ?> */}

                                                                    <img src="<?php echo base_url().@$imagename; ?>" alt="<?php echo @$users_trashads[$allad]['ad_title']; ?>" className="cover-image"/>

                                                                </div>

                                                                <div className="media-body">

                                                                    <div className="card-item-desc ml-4 p-0 mt-2">


                                                                        <a target="new" href="<?php echo base_url(); ?>ads/view/<?php echo @$users_trashads[$allad]['ad_id'].'/'.str_replace(' ','-',@$users_trashads[$allad]['ad_title']).'.html'; ?>" className="text-dark">

                                                                            {/* <h4 className="font-weight-semibold mt-1 protitle"><?php echo @$users_trashads[$allad]['ad_title']; ?>  </h4> */}

                                                                        </a>
{/* 
                                                                        <i className="fa fa-clock-o mr-1"></i> <?php echo @$users_trashads[$allad]['ad_type']; ?>

                                                                        <p>Visitors : <?php echo @$users_trashads[$allad]['views']; ?></p> */}

                                                                    </div>

                                                                </div>

                                                            </div></td>

                                                            {/* <td><?php echo @$users_trashads[$allad]['cat_name']; ?></td> */}

                                                            {/* <td className="font-weight-semibold fs-16">&#8377; <?php echo @$users_trashads[$allad]['price']; ?></td> */}

                                                            {/* <td><a href="#" className="badge badge-success"><?php echo @$users_trashads[$allad]['status']; ?></a></td> */}

                                                            <td>

                                                                <a href="<?php echo base_url(); ?>ads/adstock/<?php echo @$users_trashads[$allad]['ad_id']; ?>" className="btn btn-success btn-sm text-white" data-toggle="tooltip" data-original-title="Edit"><i className="fa fa-circle"></i></a>

                                                                <a onClick="return delper();" href="<?php echo base_url(); ?>ads/addel/<?php echo @$users_trashads[$allad]['ad_id']; ?>" className="btn btn-danger btn-sm text-white" data-toggle="tooltip" data-original-title="Delete"><i className="fa fa-trash-o"></i></a>
                                                            </td>


                                                        </tr>

                                                        {/* <?php } ?> */}







                                                    </tbody>

                                                </table>

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
