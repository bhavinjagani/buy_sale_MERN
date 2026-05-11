import React, { useState } from "react";
import { useApolloClient } from "@apollo/client/react";
import { gql } from "@apollo/client";
import categoriesContext from "./categoriesContext";

const GET_CATEGORIES = gql`
  query {
    categories {
      cat_id
      cat_name
      cat_type
      status
      adscount
      cat_img
    }
  }
`;
const GET_LOCATION = gql`
  query locations($country: Int, $state: Int) {
    getLocations(country: $country, state: $state) {
      name
    }
  }
`;


const GET_SUBCATEGORIES = gql`
  query GetSubCategoriesWithCustom($type: String!, $value: String!) {
    subCategories(type: $type, value: $value) {
      sub_cat_id
      sub_cat_name
      cat_id
      cat_name
      sub_cat_img
    }
  }
`;

const SEARCH = gql`
  query Search($category: String, $query: String) {
    search(category: $category, query: $query) {
      ads {
        ad_id
        ad_title
        price
        city
        state
        item_condition
        ad_image
        ad_description
      }
    }
  }
`;

const SEARCHBYID = gql`
  query SearchById($id: Int!) {
    getAdById(id: $id) {
      ad_id
      user_id
      ad_type
      ad_title
      cat_id
      sub_cat_id
      brand_id
      make
      price
      model
      
      fuel
      
      version
      color
      owner
      insurance
      furnished
      rooms
      
      superbuiltup
      carpet
      bedroom
      bathroom
      maintanance
      parking
      ad_description
      ad_image
      name
      email
      mobile
      views
      country
      state
      city
      item_condition
      status
      ubrowser
      ipaddress
      loc
      org
    }
  }
`;

const GetCategories = (props) => {
  const client = useApolloClient();
  const [categories, setcategories] = useState([]);
  const [subcategories, setsubcategories] = useState([]);
  const [Ads, setAds] = useState([]);
  const [location,setLocation] = useState([])

  const mainCategories = async () => {
    const { data } = await client.query({ query: GET_CATEGORIES });
    setcategories(data.categories);
  };
  const getLocation = async (country = 99) => {
    const { data } = await client.query({
      query: GET_LOCATION,
      variables: { country }
    });
    setLocation(data.getLocations ?? []);
  };

  const getSubCategories = async (name) => {
    const { data } = await client.query({
      query: GET_SUBCATEGORIES,
      variables: { type: "name", value: name },
    });
    setsubcategories(data.subCategories);
  };


  const search = async (queryObj) => {
    const { data } = await client.query({
      query: SEARCH,
      variables: { category: queryObj.category,location:queryObj.location, query: queryObj.queryText },
    });
    setAds(data.search.ads);
  };
  const SearchById = async (id) =>{
    const {data} = await client.query({
       query : SEARCHBYID,
       variables : {id : parseInt(id)}
    })
    setAds(data.getAdById ?? []);
  }
  

  return (
    <categoriesContext.Provider value={{ categories, subcategories, Ads,location, mainCategories, getSubCategories, search,SearchById,getLocation }}>
      {props.children}
    </categoriesContext.Provider>
  );
};

export default GetCategories;
