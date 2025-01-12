import React, { useState } from 'react'
import {
  Link,
  useNavigate
} from "react-router-dom";
import '../../styles/buttons.css'
import Google from '../../Icons/Google';
import Facebook from '../../Icons/Facebook';
import Alert from '../Alert';
export default function Login(props) {
  const [cred, setCred] = useState("")
  let navigate = useNavigate()
  const handleLogin = async (e) => {
    e.preventDefault()
    const response = await fetch(`http://localhost:5000/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: cred.username, password: cred.password }),
    });
   
    if (response.status === 200) {
      // save the token and redirect
      const json = await response.json()
      localStorage.setItem('token', json.username)
      navigate("/")
      props.showAlert("Sucessfull login", "success")
      props.handlelogInlogOut(true)
    }
    else {
      props.showAlert("Invlid Credatials", "danager")
    }
  }
  const onChange = (e) => {

    setCred({ ...cred, [e.target.name]: e.target.value })

  }
  return (
    <>

      <section className="sptb">

        <div className="container customerpage">

          <div className="row">

            <div className="col-lg-4 d-block mx-auto">

              <div className="row">

                <div className="col-xl-12 col-md-12 col-md-12">

                  <div className="card mb-0">

                    <div className="card-header">

                      <h3 className="card-title">Login to your Account</h3>

                    </div>

                    <div className="card-body">

                      <div className="text-center">
                        <div className="btn-group btn-block mt-2 mb-2"> <a href="<?php echo base_url(); ?>user_authentication" className="btn btn-facebook active"><Facebook className={"icon-facebook"} width={'24px'} height={"1em"} /> </a> <a href="<?php echo base_url(); ?>user_authentication" className="btn btn-block btn-facebook">Facebook</a> </div>

                        <div className="btn-group btn-block mt-2 mb-2"> <a href="https://www.google.com/gmail/" className="btn btn-google active"><Google className={"icon-facebook"} width={'24px'} height={"1em"} /> </a> <a href="https://www.google.com/gmail/" className="btn btn-block btn-google">Google</a> </div>

                      </div>

                      <hr className="divider" />



                      <form method="post" enctype="multipart/form-data" id="txtfrm" name="txtfrm" action="<?php echo base_url(); ?>account">





                        <div className="form-group">

                          <label className="form-label text-dark">Email or phone</label>

                          <input type="email" className="form-control" id="email" name="username" aria-describedby="emailHelp" value={cred.email} onChange={onChange} placeholder="Enter email" />

                        </div>

                        <div className="form-group">

                          <label className="form-label text-dark">Password</label>
                          <input type="password" className="form-control" name='password' id="password" value={cred.password} onChange={onChange} placeholder="Password" />

                        </div>

                        <div className="form-group">

                          <label className="custom-control custom-checkbox"> <a href="<?php echo base_url(); ?>forgotpass" className="float-right small text-dark mt-1">I forgot password</a>
                            <div>
                            <input type="checkbox" className="custom-control-input" />

                            <span className="custom-control-label text-dark">Remember me</span> 
                            </div>
                            </label>
                            
                        </div>

                        <div className="form-footer mt-2">

                          <input type="submit" name="btnlogin" value="Sign in" onClick={handleLogin} className="btn btn-primary btn-block" />

                        </div>

                       </form>
                       <Alert alert={props.alert}></Alert>
                      <div className="text-center  mt-3 text-dark"> Don't have account yet? <Link to="/signup">SignUp</Link> </div>

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
