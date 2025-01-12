import React, { useEffect, useState, useContext } from 'react'
import contextValue from '../context/categories/categoriesContext'

import Location from '../Icons/Location';
import '../styles/Facets.css';
import {useNavigate} from 'react-router-dom'
export default function Facets() {
  const [searchText, setSearchText] = useState('');
  const [city, setCity] = useState('');
  let navigate = useNavigate()
  const context = useContext(contextValue)
  const { Ads,search,mainCategories} = context;
  let query ={
    category :null,
    itemCondition : null,
    queryText : null,
    location : null,
    start : null,
    end : null 
 }
  const addcity =(e)=>{
    setCity(e.target.value)
  }
  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };
const searchdata =(e)=>{
  query.queryText = searchText;
   search(query)
   navigate(`/searchdata/${searchText}`)
   
}
const formAction =(e)=>{
console.log("inside formaction",e.target.name)
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

            <select id="region-state" name="region-state" className="allstates">

              <option >All States/Provinces</option>


              <option></option>



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
                              <a href="#selectRegion"  data-bs-toggle="modal" data-bs-target="#exampleModal" >
                                <Location className={"icon-append"} width={'24px'} height={'28px'} />
                              </a>

                              <input type="text" className="form-control border-0 has-icon" id="txtcityname"  name="txtcityname" />

                            </div>
                            <div className="col-lg-3 col-sm-3 search-col relative">

                              <select className="form-control selecter" name="txtcategory" id="txtcategory">

                                <option >All Categories</option>
                                {/* 
                        <?php 

                            $allcatcnt = count($allcategory);

                            for($allcat=0;$allcat<$allcatcnt;$allcat++)

                            { ?>

                        <option value="<?php echo $allcategory[$allcat]['category']['cat_name']; ?>" style="background-color:#E9E9E9;font-weight:bold;"> - <?php echo $allcategory[$allcat]['category']['cat_name']; ?> - </option>

                        <?php 

                            $allsubcatcnt = count($allcategory[$allcat]['category']['subcategory']);

                            for($allsubcat=0;$allsubcat<$allsubcatcnt;$allsubcat++)

                            { ?>

                        <option value="<?php echo $allcategory[$allcat]['category']['subcategory'][$allsubcat]['sub_cat_name']; ?>"> <?php echo $allcategory[$allcat]['category']['subcategory'][$allsubcat]['sub_cat_name']; ?></option>

                        <?php } ?>

                        <?php } ?> */}

                              </select>

                            </div>

                            <div className="form-group col-xl-5 col-lg-7  col-md-12 mb-0">

                              <div className="row no-gutters bg-white br-2">

                                <div className="form-group  col-xl-8 col-lg-7 col-md-12 mb-0">

                                  <input type="text" name="txttext" id="txttext" className="form-control has-icon" onChange={handleInputChange} placeholder="I Searching for a ..."  />

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
