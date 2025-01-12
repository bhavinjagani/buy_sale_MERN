import React from 'react'
import { Navigate,Outlet } from "react-router-dom";
const Protected = () => {
  let auth = localStorage.getItem('token')
  return (
    
    auth ?<Outlet />:<Navigate to="signUp"/>
   
 )
};
export default Protected;
