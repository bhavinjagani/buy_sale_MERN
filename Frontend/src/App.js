
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/LoginRegister/Signup';
import Login from './components/LoginRegister/Login';
import Footer from './components/Footer';
import AddLists from './components/PostAds/AddLists';
import  Item  from './components/PostAds/PostItem';
import Vehical from './components/PostAds/PostVehical';
import HomeForSale from './components/PostAds/HomeForSale';
import Services from './components/PostAds/PostServices';
import Protected from './components/Protected';
import AccountHome from './components/MyAccount/AccountHome';
import AdsSubCategories from './components/Categories/AdsSubCategories';
import GetCategories from './context/categories/GetCategories';
import AdsLists from './components/Categories/AdsLists';
import AdsDescription from './components/AdsDetails/AdsDescription';
import SearchResult from './components/Search/SearchResult';
import { Route, Routes , BrowserRouter as Router } from 'react-router-dom';


const App =()=>  {
  const [alert,setMsg] = useState(null)
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const handlelogInlogOut = (value) => {
    setisLoggedIn(value);
  };
  const showAlert=(msg,type)=>{
    
    setMsg({
       massage:msg,
       type:type
    })

    setTimeout(()=>{
      setMsg(null)
    },3500)
    
  }
    return (
      <div>
        <Router>
          <Navbar isLoggedIn={isLoggedIn} handlelogInlogOut={handlelogInlogOut} />
          <GetCategories>
           <Routes>
           <Route exact path="/" element={<Home/>} />
           <Route exact path="signup" element={<Signup showAlert={showAlert} alert={alert} isLoggedIn={isLoggedIn} handlelogInlogOut={handlelogInlogOut}/>} />
           <Route exact path="login" element={<Login showAlert={showAlert} alert={alert} isLoggedIn={isLoggedIn} handlelogInlogOut={handlelogInlogOut}/>} />
           <Route  path="ads/category/:name" element={<AdsSubCategories />} />
           <Route  path="ads/category/:name/:subCategory" element={<AdsLists />} />
           <Route  path="searchdata/:searchquery" element={<SearchResult />} />
           <Route  exact path="ads/view/:ad_id" element={<AdsDescription />} />
           
           <Route element={<Protected />}>
           <Route exact path="postads" element={<AddLists />}/>
           <Route exact path="postads/item" element={<Item />} />
           <Route exact path="postads/vehical" element={<Vehical />} />
           <Route exact path="postads/house" element={<HomeForSale />} />
           <Route exact path="postads/service" element={<Services />} />
           <Route exact path="myaccount" element={<AccountHome />} />
           </Route>
           </Routes>
           </GetCategories>
           <Footer/>
        </Router>
      </div>

    )
  
}

export default App