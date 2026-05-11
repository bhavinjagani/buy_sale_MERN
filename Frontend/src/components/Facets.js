import React, { useState } from 'react'
import Location from '../Icons/Location';
import '../styles/Facets.css';
import { useNavigate } from 'react-router-dom'

export default function Facets({ categories = [],location = [] }) {
  const [searchText, setSearchText] = useState('');
  const [city, setCity] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  let navigate = useNavigate()
  const addcity = (e) => {
    setCity(e.target.value)
  }
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };
  const handleCatChange = (e) => {
    const selected = e.target.value;
    if (selected) navigate(`/ads/category/${selected}`);
  };
  const onLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  }

  const searchdata = () => {
    const params = new URLSearchParams();
    if (searchText) params.set('q', searchText);
    if (selectedLocation) params.set('l', selectedLocation);
    navigate(`/searchdata?${params.toString()}`);
  }

  const formAction = (e) => {
    console.log("inside formaction", e.target.name)
  }

  return (
    <>
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

        <div className="modal-dialog" role="document">

          <div className="modal-content">

            <div className="modal-header">

              <h4 className="modal-title" id="exampleModalLabel"><i className=" icon-map"></i>Select your region</h4>

              <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">

              <div className="row">

                <div className="col-sm-12">

                  <p>Popular ads in<strong>India</strong></p>



                  <div style={{ clear: "both" }}></div>

                  <div className="col-sm-6 no-padding">
                     <select className="form-control selecter" onChange={onLocationChange} name="txtcategory" id="region-state">
                              <option value="">All States/Provinces</option>
                              {location.map((e) => (
                                <option value={e.name}>
                                  {e.name}
                                </option>
                              ))}
                            </select>

                  </div>

                  <div style={{ clear: "both" }}></div>

                  <hr className="hr-thin" />

                </div>

                <div className="col-md-4">

                  <ul className="list-link list-unstyled" id="statecities" style={{ width: "581px" }}>

                    <li><a href="#" title="">All Cities</a></li>



                    <li style={{ float: "left", width: "193px", display: "inline" }}><a href="#" onClick={addcity}></a></li>



                  </ul>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
      <section>

        <div className="banner-1 cover-image sptb-2 sptb-tab bg-background2  facetbg">

          <div className="header-text mb-0">

            <div className="container">
              <div className="text-center text-white">

                <h1 className="mb-1">Find Your Best Classified</h1>

                <p>Buy and sale anything here... Successful people always see things working out.</p>

              </div>
              <div className="row">

                <div className="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">

                  <div className="item-search-tabs classNameifieds-content">

                    {/* <form encType="multipart/form-data" name="frm" id="frm" method="post" onSubmit={formAction}> */}

                    <div className="tab-content">

                      <div className="tab-pane active" id="tab1">

                        <div className="form row">

                          <div className="form-group  col-xl-4 col-lg-5 col-md-12 mb-0">
                            <a href="#selectRegion" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                              <Location className={"icon-append"} width={'24px'} height={'28px'} />
                            </a>

                            <input type="text" className="form-control border-0 has-icon" id="txtcityname" name="txtcityname" />

                          </div>
                          <div className="col-lg-3 col-sm-3 search-col relative">

                            <select className="form-control selecter" onChange={handleCatChange} name="txtcategory" id="txtcategory">
                              <option value="">All Categories</option>
                              {categories.map((e) => (
                                <option key={e.cat_id} value={e.cat_name}>
                                  {e.cat_name}
                                </option>
                              ))}
                            </select>

                          </div>

                          <div className="form-group col-xl-5 col-lg-7  col-md-12 mb-0">

                            <div className="row no-gutters bg-white br-2">

                              <div className="form-group  col-xl-8 col-lg-7 col-md-12 mb-0">

                                <input type="text" name="txttext" id="txttext" className="form-control has-icon" onChange={handleInputChange} placeholder="I Searching for a ..." />

                              </div>

                              <div className="col-xl-4 col-lg-5 col-md-12 mb-0">

                                <button onClick={searchdata} id="other" className="btn btn-primary btn-search btn-block"><i className="icon-search"></i><strong>Search</strong></button>

                              </div>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>

                    {/* </form> */}

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
