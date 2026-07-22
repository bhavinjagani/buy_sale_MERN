import React,{useContext, useState} from 'react'
import { useParams } from 'react-router-dom';
import contextValue from '../../context/categories/categoriesContext'
export default function AllCategories(props) {
    const { name } = useParams();
  const context = useContext(contextValue)
  const { categories, subcategories, mainCategories, getSubCategories } = context;
  const [expandedCat, setExpandedCat] = useState(null);
  let imgUrl,adsCount;

  const toggleExpand = (catName) => {
    if (expandedCat === catName) {
      setExpandedCat(null);
    } else {
      setExpandedCat(catName);
      getSubCategories(catName);
    }
  };

    return (
      // Start Template Allcategories
    <>
      <div class="col-xl-3 col-lg-4 col-md-12">

<div class="card">
  <div className="card-header">

    <h3 className="card-title"><i className="fa fa-building mr-1"></i> All Categories</h3>

  </div>
  <div className="card-body">
    <ul class="widget-spec p-1 catbox">
      {categories.map((element) => {
        if(element.cat_name === name){
          imgUrl = `/Images/category/${element.cat_img}`;
          adsCount = element.adscount;
         // props.handleCallback1({imgUrl,adsCount})
        }
        const isExpanded = expandedCat === element.cat_name;
        return (
          <li className="" key={element.cat_id}>
            <div className="d-flex align-items-center justify-content-between">
              <a href={`/ads/category/${element.cat_name}`} className="text-dark">
                <i className="fa fa-caret-right text-primary"></i>{element.cat_name}({element.adscount})
              </a>
              <i
                className={`fa ${isExpanded ? 'fa-chevron-up' : 'fa-chevron-down'} text-muted`}
                style={{ cursor: 'pointer', padding: '4px 8px' }}
                onClick={(e) => { e.preventDefault(); toggleExpand(element.cat_name); }}
              ></i>
            </div>
            {isExpanded && (
              <ul className="pl-3">
                {subcategories
                  .filter((sub) => sub.cat_name === element.cat_name)
                  .map((sub) => (
                    <li key={sub.sub_cat_id}>
                      <a
                        href={`/ads/category/${element.cat_name}/${sub.sub_cat_name.replace(" ", "-")}`}
                        className="text-secondary"
                      >
                        {sub.sub_cat_name}
                      </a>
                    </li>
                  ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  </div>
</div>
</div>

    </>
    // End Template Allcategories
  )
}
