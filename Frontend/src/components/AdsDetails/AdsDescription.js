import React, { useEffect, useState, useContext } from 'react'
import contextValue from '../../context/categories/categoriesContext'
import { useParams } from 'react-router-dom';

export default function AdsDescription() {
    let { subCategory } = useParams();
    subCategory = subCategory.replace("-"," ");
    const context = useContext(contextValue)
    const { Ads,search,mainCategories} = context;
    useEffect(() => {
       
    }, []);
    return (
        <>
            {/* <!--AdsDescription--> */}
            <section className="sptb">

                <div className="container">

                    <div className="row">

                        <div className="col-xl-8 col-lg-8 col-md-12">

                            <div className="card overflow-hidden">

                                {/* <div className="ribbon ribbon-top-right text-danger"><span className="bg-danger"><?php echo @$ad_details[0]['item_condition']; ?></span></div> */}

                                <div className="card-body h-100">

                                    <div className="item-det mb-4">

                                        {/* <h3 className="adtitle protitle"><?php echo @$ad_details[0]['ad_title']; ?></h3> */}



                                        <div className=" d-flex">

                                            <ul className="d-flex mb-0">

                                                {/* <li className="mr-5"><a href="#" className="icons"><i className="si si-location-pin text-muted mr-1"></i><?php echo @$ad_details[0]['city']; ?> , <?php echo @$ad_details[0]['state']; ?></a></li> */}

                                                <li className="mr-5"><a href="#" className="icons"><i className="si si-calendar text-muted mr-1"></i>



                                                </a></li>

                                                <li className="mr-5"><a href="#" className="icons"><i className="si si-eye text-muted mr-1"></i></a></li>

                                            </ul>

                                            <div className="icons">

                                                <a href="https://web.whatsapp.com:/send?phone=+91<?php echo @$ad_details[0]['custphone']; ?>&text=<?php echo base_url(); ?>ads/view/<?php echo @$ad_details[0]['ad_id'] . '/' . str_replace(' ', '-', @$ad_details[0]['ad_title']) . '.html'; ?>" className="btn btn-whatsapp icons btn-sm"><i className="fa fa-whatsapp mr-1"></i> Inquiry Vai Whatsapp</a>
                                            </div>

                                        </div>

                                    </div>

                                    <center />

                                    <div className="product-slider">

                                        <div id="carousel" className="carousel slide" data-ride="carousel">

                                            {/* <div className="arrow-ribbon2 bg-primary">Rs. <?php echo @$ad_details[0]['price']; ?></div> */}

                                            <div className="carousel-inner">


                                                <div className="carousel-item active"> <img id="currentImg" src="<?php echo base_url() . 'uploads/' . $imgtot[0]; ?>" alt="<?php echo @$ad_details[0]['adtitle']; ?>" style={{maxHeight:"450px"}} /> </div>



                                                <div className="carousel-item"> <img id="currentImg1" src="<?php echo base_url() . 'uploads/' . $imgtot[$ic]; ?>" alt="<?php echo @$ad_details[0]['adtitle']; ?>" style={{maxHeight:"450px"}} /> </div>



                                            </div>



                                            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev"> <i className="fa fa-angle-left" aria-hidden="true"></i> </a> <a className="carousel-control-next" href="#carousel" role="button" data-slide="next"> <i className="fa fa-angle-right" aria-hidden="true"></i> </a>
                                        </div>

                                        <div data-target="#carousel" data-slide-to="<?php echo $ica; ?>" className="thumb"><img src="<?php echo base_url() . 'uploads/' . $imgtot[$ica]; ?>" alt="<?php echo @$ad_details[0]['adtitle']; ?>"/></div>



                                    </div>

                                    <div className="carousel-item ">
                                        <div data-target="#carousel" data-slide-to="<?php echo $ica; ?>" className="thumb"><img src="<?php echo base_url() . 'uploads/' . $imgtot[$ica]; ?>" alt="<?php echo @$ad_details[0]['adtitle']; ?>"/></div>
                                    </div>

                                </div>

                                <a className="carousel-control-prev" href="#thumbcarousel" role="button" data-slide="prev"> <i className="fa fa-angle-left" aria-hidden="true"></i> </a> <a className="carousel-control-next" href="#thumbcarousel" role="button" data-slide="next"> <i className="fa fa-angle-right" aria-hidden="true"></i> </a>
                            </div>

                        </div>

                    </div>


                </div>

            </section>
        </>
    )
}
