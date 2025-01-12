import React, { useEffect, useState, useContext } from 'react'
import contextValue from '../../context/categories/categoriesContext'
import { useParams } from 'react-router-dom';
import AllCategories from './AllCategories';
import '../../styles/Categories.css';
import '../../styles/buttons.css'
export default function AdsLists() {
    let { subCategory } = useParams();
    subCategory = subCategory.replace("-"," ");
    const context = useContext(contextValue)
    const { Ads,search,mainCategories} = context;
    let query ={
         category :"",
         itemCondition : null,
         queryText : "",
         location : null,
         start : null,
         end : null 
      }
    useEffect(() => {
        query.category = subCategory;
        search(query)
        mainCategories()
    }, []);
    return (
        <>
        {/* Template AdsLists */}
            <section className="sptb">

<div className="container">

  <div className="row">
            <AllCategories />

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
                                                        {Ads.map((element) => {
                                                            element.ad_image = element.ad_image ?element.ad_image :"no_image.jpg";
                                                            element.ad_description=element.ad_description ? element.ad_description.slice(0, 80)+"..." : ''
                                                            return  <div class="card overflow-hidden search-list">

                                                                <div class="d-md-flex">

                                                                    <div class="item-card9-img col-md-4">

                                                                        <div class="arrow-ribbon bg-primary1">{element.item_condition}</div> {/* <?php echo @$allads[$allad]['item_condition']; ?>*/}

                                                                        <div class="item-card9-imgs"> <a href={`/ads/view/${element.ad_id}`}>
                                                            
                                                                            <img src={`/Images/uploads/${element.ad_image.split(",")[0]}`  }/>
                                                                            </a>
                                                                        </div>



                                                                    </div>

                                                                    <div class="card border-0 mb-0">

                                                                        <div class="card-body ">

                                                                            <div class="item-card9"><a href="" class="text-dark">

                                                                                 <h4 class="font-weight-semibold mt-1 protitle">{element.ad_title} </h4> 

                                                                            </a>

                                                                                 <p class="mb-0 leading-tight descline">{element.ad_description}</p> 

                                                                            </div>

                                                                        </div>

                                                                        <div class="card-footer pt-4 pb-4">

                                                                            <div class="item-card9-footer d-flex">

                                                                                <div class="item-card9-cost">

                                                                                    <h4 class="text-dark font-weight-semibold mb-0 mt-0">&#8377;{element.price} </h4> 

                                                                                </div>

                                                                                <div class="ml-auto">

                                                                                    <div class="item-card9-desc">

                                                                                        <span class=""><i class="fa fa-calendar-o text-muted mr-1"></i> {element.adcreated_date}</span>

                                                                                        <span class=""><i class="fa fa-map-marker text-muted mr-1">{element.city},{element.state}</i></span>

                                                                                    </div>

                                                                                </div>

                                                                            </div>

                                                                        </div>

                                                                    </div>

                                                                </div>

                                                            </div>
                                                           })}
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
