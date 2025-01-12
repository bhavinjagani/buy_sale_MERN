import React, { useEffect, useState, useContext } from 'react'
import contextValue from '../../context/categories/categoriesContext'
import { useParams } from 'react-router-dom';
export default function SearchResult() {
    
    return (
        <>
            <section class="sptb1">

                <div class="container">

                    <div class="row1">

                        <div class="col-xl-12 col-lg-8 col-md-12">

                            <div class="card mb-lg-0">

                                <div class="card-header">

                                    <h3 class="card-title"><i class="fa fa-building mr-1"></i> Categories</h3>

                                </div>

                                <div class="card-body">

                                    <ul class="list-unstyled widget-spec p-1 catbox">

                                        {/* <?php

                                        $catlistcnt = count($catlist);

              //echo "<pre>"; print_r($catlist);

                                            for($catl=0;$catl<$catlistcnt;$catl++)

                                            { ?> */}

                                        <li class=""> <a href="<?php echo base_url(); ?>searchdata/bycategory/<?php echo str_replace(' ','-',@$catlist[$catl]['cat_name']); ?>" class="text-dark"><i class="fa fa-caret-right text-primary"></i> 1234</a> </li>

                                        {/* // <? php } ?> */}

                                    </ul>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section class="sptb">

                <div class="container">

                    <div class="row">
                        <div class="col-xl-9 col-lg-8 col-md-12">
                            <div class="card mb-lg-0">

                                <div class="card-body">

                                    <div class="item2-gl ">

                                        <div class="item2-gl-nav d-flex">

                                            <div class="item-search-menu1">

                                                <ul class="nav">

                                                    <li><a href="#tab2" data-toggle="tab" class="btn btn-secondary">All ads </a></li> {/* (<?php echo count(@$allads); ?>) */}

                                                    <li><a href="#tab3" data-toggle="tab" class="btn btn-secondary">New Item Ads </a></li>

                                                    <li><a href="#tab4" data-toggle="tab" class="btn btn-secondary">Used Item Ads </a></li>

                                                </ul>

                                            </div>
                                            <ul class="nav item2-gl-menu ml-auto">

                                                <li class=""><a href="#tab-11" class="show active" data-toggle="tab" title="List style"><i class="fa fa-list"></i></a></li>

                                            </ul>

                                        </div>
                                        <div class="tab-content">
                                            <div class="tab-pane active" id="tab-11">

                                                <div class="row">

                                                    <div class="col-xl-12 col-lg-12 col-md-12 d-block mx-auto">

                                                        <div class="item-search-tabs1 classifieds-content">

                                                            <div class="tab-content" style={{ backgroundColor: "none" }}>

                                                                <div class="tab-pane active" id="tab2">

                                                                    <div class="form row" id="allads">

                                                                        {/* <?php

                      $alladcnt = count($allads);

                      //$alladcnt = 12;

                      //echo "<pre>"; print_r($allads); exit;

                      for ($allad = 0; $allad < $alladcnt; $allad++) {

                        $alladimgtot = explode(',', @$allads[$allad]['ad_image']);

                      ?> */}

                                                                        <div class="card overflow-hidden search-list">

                                                                            <div class="d-md-flex">

                                                                                <div class="item-card9-img col-md-4">

                                                                                    <div class="arrow-ribbon bg-primary">123</div> {/* <?php echo @$allads[$allad]['item_condition']; ?>*/}

                                                                                    <div class="item-card9-imgs"> <a href="<?php echo base_url(); ?>ads/view/<?php echo @$allads[$allad]['ad_id'] . '/' . str_replace(' ', '-', @$allads[$allad]['ad_title']) . '.html'; ?>"></a>

                                                                                        {/* <?php

                                if (@$alladimgtot[0] == '') {
                                  $imagename = 'images/no_image.jpg';
                                } else {

                                  $imagename = 'uploads/small/' . @$alladimgtot[0];
                                }

                                ?> */}

                                                                                        <img src="<?php echo base_url() . @$imagename; ?>" alt="<?php echo @$allads[$allad]['ad_title']; ?>" class="cover-image" />
                                                                                    </div>



                                                                                </div>

                                                                                <div class="card border-0 mb-0">

                                                                                    <div class="card-body ">

                                                                                        <div class="item-card9"><a href="<?php echo base_url(); ?>ads/view/<?php echo @$allads[$allad]['ad_id'] . '/' . str_replace(' ', '-', @$allads[$allad]['ad_title']) . '.html'; ?>" class="text-dark">

                                                                                            {/* <h4 class="font-weight-semibold mt-1 protitle"><?php echo @$allads[$allad]['ad_title']; ?> </h4> */}

                                                                                        </a>

                                                                                            {/* <p class="mb-0 leading-tight descline"><?php echo @$allads[$allad]['ad_description']; ?></p> */}

                                                                                        </div>

                                                                                    </div>

                                                                                    <div class="card-footer pt-4 pb-4">

                                                                                        <div class="item-card9-footer d-flex">

                                                                                            <div class="item-card9-cost">

                                                                                                <h4 class="text-dark font-weight-semibold mb-0 mt-0">&#8377; </h4> {/* <?php echo @$allads[$allad]['price']; ?> */}

                                                                                            </div>

                                                                                            <div class="ml-auto">

                                                                                                <div class="item-card9-desc">

                                                                                                    <span class=""><i class="fa fa-calendar-o text-muted mr-1"></i> </span>

                                                                                                    <span class=""><i class="fa fa-map-marker text-muted mr-1"></i></span>

                                                                                                </div>

                                                                                            </div>

                                                                                        </div>

                                                                                    </div>

                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                    <div id="allmorebtn">

                                                                        <input type="hidden" name="allstartval" id="allstartval" value="12" />

                                                                        <input type="hidden" name="allendval" id="allendval" />

                                                                        <center><input name="allbtnloadmore" id="allbtnloadmore" class="btn btn-post btn-secondary" onClick="allgetmoredata('allresults_more_subcat');" type="submit" value="View More Ads" /> </center>

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
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
