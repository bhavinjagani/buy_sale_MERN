import React, { useState } from 'react'
import '../../styles/Signup.css'
import { Link, useNavigate } from "react-router-dom";
import '../../styles/buttons.css';
import Alert from '../Alert';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';
import { useMutation } from "@apollo/client/react";
import { gql } from "@apollo/client";

const REGISTER = gql`
  mutation Register($username: String!, $name: String!, $password: String!) {
    register(username: $username, name: $name, password: $password) {
      success
      message
      token
      user {
        user_id
        custname
        username
        opid
        weblink
        state
        custimg
        custaddress
        aboutme
        custemail
      }
    }
  }
`;

export default function Signup(props) {
  const dispatch = useDispatch();
  const [registerMutation] = useMutation(REGISTER);
  const [cred, setCred] = useState({ name: "", username: "", password: "" });
  let navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const { data } = await registerMutation({
        variables: { username: cred.username, name: cred.name, password: cred.password },
      });
      if (data.register.success) {
        dispatch(login({ user: data.register.user, token: data.register.token }));
        navigate("/");
        props.showAlert("Account Created Successfully", "success");
      } else {
        props.showAlert(data.register.message || "Registration failed", "danger");
      }
    } catch (err) {
      props.showAlert("Something went wrong", "danger");
    }
  }

  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value });
  }

  return (
    <>
      <section className="sptb">
        <div className="container customerpage">
          <div className="row">
            <div className="col-lg-4 d-block mx-auto">
              <div className="row">
                <div className="col-xl-12 col-md-12 col-md-12">
                  <div className="card mb-xl-0">
                    <div className="card-header">
                      <h3 className="card-title">Register</h3>
                    </div>
                    <div className="card-body">
                      <form className="form-horizontal" onSubmit={handleSignup}>
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
                              <span className="custom-control-label text-dark">Agree the <a href="/terms">terms and policy</a></span>
                            </label>
                          </div>
                          <Alert alert={props.alert}></Alert>
                          <div className="form-footer mt-2">
                            <input type="submit" name="txtsignupbtn" value="Create New Account" className="btn btn-primary btn-block" />
                          </div>
                          <div className="text-center mt-3 text-dark">Already have account?<Link to="/login"> SignIn</Link></div>
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
