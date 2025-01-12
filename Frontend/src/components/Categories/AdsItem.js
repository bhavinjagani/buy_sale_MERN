import React from 'react'
import {
    Link,
    useNavigate
  } from "react-router-dom";
export default function AdsItem(props) {
    let {cat_name,imgurl,cat_url}=props;
    const imageUrl = `/Images/category/${imgurl}`;
    return (
        <>
            <div className="card overflow-hidden">
            <div className="card-body text-center">

                <Link to={cat_url}>

                    <img src={imageUrl}  className="w-9 hh-8" /> 
                </Link>

                <div className="item-card7-desc">

                    <div className="item-card7-text mt-3"> <Link to={cat_url} className="text-dark">

                        <h4 className="mb-1"> {cat_name} </h4>

                    </Link> </div>

                </div>

            </div>
            </div>
        </>
    )
}

