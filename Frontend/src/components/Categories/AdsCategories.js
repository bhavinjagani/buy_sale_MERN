import React, { useEffect, useState,useContext } from 'react'
import AdsItem from './AdsItem'
import contextValue from '../../context/categories/categoriesContext'
import '../../styles/Categories.css'
export default function Categories() {
  const context = useContext(contextValue)
  const {categories,mainCategories}=context
  useEffect(() => {
    mainCategories()
  }, []);
  return (
    <>
      <section className="sptb ">
        <div className="container">
          <div className="section-title center-block text-center">
            <h1>Categories</h1>
            <p></p>
          </div>
          <div className="row container">
            {categories.map((element) => {
              return <div className='col-md-3' key={element.cat_id}>
                <AdsItem cat_name={element.cat_name} imgurl={element.cat_img} cat_url={`ads/category/${element.cat_name}`} ></AdsItem>
              </div>
            })}
          </div>
        </div>
      </section>
    </>
  )
}
