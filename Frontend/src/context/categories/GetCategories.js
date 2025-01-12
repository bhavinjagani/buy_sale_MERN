import React, { useState } from "react";
import categoriesContext from "./categoriesContext";

const GetCategories = (props) => {
    const host = "http://localhost:5000"
    const noteintial = []
    const [categories, setcategories] = useState([])
    const [subcategories, setsubcategories] = useState([]);
    const [Ads, setAds] = useState([]);

     //Get All Categories
  const mainCategories = async () => {
    const categories = await fetch(`${host}/getCategories`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const categoriesJson = await categories.json();
      setcategories(categoriesJson)
  }

   //Get All SubCategories
   const getSubCategories = async (name) => {
    const subcategories = await fetch(`${host}/getSubCategories`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: "name", value: name })
    });
    const categoriesJson = await subcategories.json();
    setsubcategories(categoriesJson)
  }
  const search = async (queryObj) => {
    console.log("query",queryObj)
    const Ads = await fetch(`${host}/search`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({category: queryObj.category,query:queryObj.queryText })
    });
    const AdsJson = await Ads.json();
    setAds(AdsJson.ads)
  }


    return (

        <categoriesContext.Provider value={{ categories,subcategories,Ads,mainCategories,getSubCategories,search}}>
          {props.children}
        </categoriesContext.Provider>
      )
}

export default GetCategories;