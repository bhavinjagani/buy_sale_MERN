import React, { useEffect, useState, useContext } from 'react'
import contextValue from '../../context/categories/categoriesContext'
import { useParams } from 'react-router-dom';
import AllCategories from './AllCategories';
import {
  Link,
  useNavigate
} from "react-router-dom";
import SubAdsItem from './SubAdsItem';
import '../../styles/Categories.css'
export default function AdsSubCategories(props) {
  const { name } = useParams();
  const context = useContext(contextValue)
  const { categories, subcategories, mainCategories, getSubCategories } = context
  const [Ads, setdata] = useState("");
  useEffect(() => {
    getSubCategories(name)
    mainCategories()
  }, []);
  const handleCallback = (childData) => {
  //   setdata({ 
  //   imgUrl : childData.imgUrl,
  //   adsCount : childData.adsCount
  //  })
}
  return (
    <>
      <section className="sptb">

        <div className="container">

          <div className="row">
           <AllCategories handleCallback1={handleCallback}/>
            <div className='col-xl-9 col-lg-8 col-md-12 card'>
              <div className="card-header">

                <div className="image"> <img src={Ads.imgUrl} class="img-responsive" alt="img" style={{maxHeight:"100px"}}/></div>

                <div className="col-xs-12 col-sm-7">

                  <h2>{name}</h2>

                  {Ads.adsCount} ads

                   <a href="<?php echo base_url(); ?>searchdata/bycategory/<?php echo str_replace(' ', '-', @$categoryname); ?>">View All Ads</a>

                </div>

              </div>
              <div className="card-body">

                <div className="row container">
                  {subcategories.map((element) => {
                    var sub_cat_name = element.sub_cat_name.replace(" ","-")
                    return <div className='col-md-3' key={element.sub_cat_id}>
                      <SubAdsItem cat_name={element.sub_cat_name} imgurl={element.sub_cat_img} sub_cat_id={element.sub_cat_id} cat_url={`ads/category/${name}/${sub_cat_name}`} ></SubAdsItem>
                    </div>
                  })}
                </div>

              </div>
            </div>

          </div>

        </div>

      </section>

    </>
  )
}
