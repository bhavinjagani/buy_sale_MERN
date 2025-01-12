import React from 'react'
import {
    Link,
    useNavigate
  } from "react-router-dom";
import '../../styles/PostAds.css'
export default function AddLists() {
    return (
        <>
            <section className="sptb">

                <div className="container">

                    <div className="row">

                        <div className="col-xl-12 col-lg-8 col-md-12">

                            <div className="card mb-lg-0">

                                <div className="card-header">

                                    <h3 className="card-title"><i className="fa fa-building mr-1"></i> Choose Your Listing Type.</h3>

                                </div>

                                <div className="card-body">

                                    <div className="row">



                                        <div className="col-lg-3 col-md-8">

                                            <div className="card">

                                                <div className="card-body">

                                                    <div className="service-card text-center">

                                                        <Link to="item">

                                                            <div className="bg-purple-transparent icon-bgx icon-service text-purple">

                                                                <i className="fa fa-shopping-cart"></i>
                                                            </div>

                                                            <div className="servic-data mt-3">



                                                                <h4 className="font-weight-semibold mb-2">Item For Sale</h4>

                                                                <p className="text-muted">Sale your single or bulk item here.</p>



                                                            </div>
                                                        </Link>
                                                    </div>

                                                

                                            </div>

                                        </div>

                                    </div>



                                    <div className="col-lg-3 col-md-8">

                                        <div className="card">

                                            <div className="card-body">

                                                <div className="service-card text-center">

                                                    <Link to="vehical">

                                                        <div className="bg-purple-transparent icon-bgx icon-service text-purple">

                                                            <i className="fa fa-car "></i>
                                                        </div>

                                                        <div className="servic-data mt-3">

                                                            <h4 className="font-weight-semibold mb-2">Vehicle For Sale</h4>

                                                            <p className="text-muted">sale your vehicle here.</p>

                                                        </div>
                                                    </Link>
                                                </div>

                                            

                                        </div>

                                    </div>

                                </div>



                                <div className="col-lg-3 col-md-8">

                                    <div className="card">

                                        <div className="card-body">

                                            <div className="service-card text-center">

                                                <Link to="house">

                                                    <div className="bg-purple-transparent icon-bgx icon-service text-purple">

                                                        <i className="fa fa-home "></i>
                                                    </div>

                                                    <div className="servic-data mt-3">

                                                        <h4 className="font-weight-semibold mb-2">Home For sale or Rent</h4>

                                                        <p className="text-muted">List house or flat for sale or rent</p>

                                                    </div>
                                                </Link>
                                            </div>

                                        

                                    </div>

                                </div>

                            </div>



                            <div className="col-lg-3 col-md-8">

                                <div className="card">

                                    <div className="card-body">

                                        <div className="service-card text-center">

                                            <Link to="service">

                                                <div className="bg-purple-transparent icon-bgx icon-service text-purple">

                                                    <i className="fa fa-address-book-o "></i>
                                                </div>

                                                <div className="servic-data mt-3">

                                                    <h4 className="font-weight-semibold mb-2">Services</h4>

                                                    <p className="text-muted">List your business related services here.</p>

                                                </div>
                                            </Link>
                                        </div>

                                   

                                </div>

                            </div>

                        </div>



                    </div>



                </div>

            </div>

        </div >

  </div >

</div >

</section >

    </>
  )
}
