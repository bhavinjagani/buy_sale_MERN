import React, { useState } from 'react'
import '../../styles/Signup.css'
import {
  Link,
  useNavigate
} from "react-router-dom";
import Facebook from '../../Icons/Facebook';
import Google from '../../Icons/Google';
import '../../styles/buttons.css';
import Alert from '../Alert';
export default function Signup(props) {
  const [cred, setCred] = useState({ name: "", username: "", password: "" })
  let navigate = useNavigate()
  const handleSignup = async (e) => {
    console.log("cred", cred)
    e.preventDefault()
    const { name, username, password } = cred;
    const response = await fetch(`http://localhost:5000/register`, {

      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, username, password }),
    });

    console.log("response", response)
    if (response.status === 200) {
      //const json =await response.json()
      // save the token and redirect
      //localStorage.setItem('token',json.authtoken)
      navigate("/")
      props.handlelogInlogOut(true)
      props.showAlert("Account Created Sucessfully", "success")
    }
    else {
      props.showAlert("Invlid Credatials", "danagar")
    }
  }
  const onChange = (e) => {

    setCred({ ...cred, [e.target.name]: e.target.value })

  }
  return (
    <>
      <section className="sptb" >
        <div className="container customerpage">
          <div className="row ">
            <div className="col-lg-4 d-block mx-auto">
              <div className="row">
                <div className="col-xl-12 col-md-12 col-md-12">
                  <div className="card mb-xl-0">
                    <div className="card-header">
                      <h3 className="card-title">Register</h3>
                    </div>
                    <div className="card-body">
                      <div className="text-center">
                        <div className="btn-group btn-block mt-2 mb-2"> <a href="https://www.facebook.com/" className="btn btn-facebook active">   <Facebook className={"icon-facebook"} width={'24px'} height={"1em"} /></a>  <a href="https://www.facebook.com/" className="btn btn-block btn-facebook">Facebook</a> </div>
                        <div className="btn-group btn-block mt-2 mb-2"> <a href="https://www.google.com/gmail/" className="btn btn-google active"> <Google className={"icon-facebook"} width={'24px'} height={"1em"} /> </a> <a href="https://www.google.com/gmail/" className="btn btn-block btn-google">Google</a> </div>
                      </div>
                      <hr className="divider" />
                      <form className="form-horizontal" method="post" onSubmit={handleSignup}>
                        <fieldset>
                          <div className="form-group">
                            <label className="form-label text-dark">Name</label>
                            <input type="text" name="name" className="form-control" placeholder="Enter name" onChange={onChange} required />
                          </div>
                          <div className="form-group">
                            <label className="form-label text-dark">Email Or Phone</label>
                            <input type="text" name="username" className="form-control" placeholder="Enter email or Phone" onChange={onChange} required />
                          </div>
                          <div className="form-group">
                            <label className="form-label text-dark">Password</label>
                            <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={onChange} placeholder="Password" required />
                          </div>
                          <div className="form-group">
                            <label className="custom-checkbox">
                              <input type="checkbox" className="custom-control-input" />
                              <span className="custom-control-label text-dark">Agree the <a href="<?php echo base_url(); ?>terms">terms and policy</a></span> </label>
                          </div>
                          <Alert alert={props.alert}></Alert>
                          <div className="form-footer mt-2">
                            <input type="submit" name="txtsignupbtn" value="Create New Account" className="btn btn-primary btn-block" />
                          </div>
                          <div className="text-center  mt-3 text-dark"> Already have account?<Link to="/login"> SignIn</Link> </div>

                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
