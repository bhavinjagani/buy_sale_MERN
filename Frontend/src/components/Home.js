import { useEffect, useContext } from 'react'
import Facets from './Facets'
import Categories from './Categories/AdsCategories'
import contextValue from '../context/categories/categoriesContext'

export default function Home() {
  const { categories, mainCategories,getLocation,location } = useContext(contextValue);

  useEffect(() => {
    mainCategories();
    getLocation(99);
  }, []);

  return (
    <div>
      <Facets categories={categories} location ={location}/>
      <Categories/>
    </div>
  )
}
