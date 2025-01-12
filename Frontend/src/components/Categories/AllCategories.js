import React,{useContext} from 'react'
import { useParams } from 'react-router-dom';
import contextValue from '../../context/categories/categoriesContext'
export default function AllCategories(props) {
    const { name } = useParams();
  const context = useContext(contextValue)
  const { categories, subcategories, mainCategories, getSubCategories } = context;
  let imgUrl,adsCount;
    return (
      // Start Template Allcategories
    <>
      <div class="col-xl-3 col-lg-4 col-md-12">

<div class="card">
  <div className="card-header">

    <h3 className="card-title"><i className="fa fa-building mr-1"></i> All Categories</h3>

  </div>
  <div className="card-body">
    <ul class="list-unstyled widget-spec p-1 catbox">
      {categories.map((element) => {
        if(element.cat_name === name){
          imgUrl = `/Images/category/${element.cat_img}`;
          adsCount = element.adscount;
         // props.handleCallback1({imgUrl,adsCount})
        }
        return <li className=""> <a href={`/ads/category/${element.cat_name}`} className="text-dark"><i className="fa fa-caret-right text-primary"></i>{element.cat_name}({element.adscount})</a> </li>
      })}
    </ul>
  </div>
</div>
</div>
      
    </>
    // End Template Allcategories
  )
}
