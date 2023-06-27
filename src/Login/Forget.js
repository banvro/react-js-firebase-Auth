

import React from 'react'
import { useState } from 'react';
// import {auth} from "./Firebase"
import { auth, provider } from './Firebase';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import firebase from './Firebase';
const Forget = () => {
  const [isVisible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("")
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const toggle = () => {
    setVisible(!isVisible);
  };
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setEmailSent(true);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };
  // function ResetPassword() {
  //   const auth = getAuth();
  //   sendPasswordResetEmail(auth, email)
  //     .then(() => {
  //       console.log("Password reset email sent")
  //       // ..
  //       })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log("error",error)
  //     });
  //   }
  // const triggerResetEmail = async () => {
  //   await sendPasswordResetEmail(auth, email);
  //   console.log("Password reset email sent")
  // }
  return (
    <>
      <div className='main'>
        <div className='pic'>
          <img src='../assests/jamlogo.png'></img>
        </div>
        <div className='head'>
          <h1>Jampack</h1>
        </div>
      </div>
      {/* card   */}
      <div className='col-lg-12 for' >
      {emailSent ? (
        <p>Reset password email sent. Please check your inbox.</p>
      ) : (
        <form class="row g-3 needs-validation mains adoading" onSubmit={ handleForgotPassword }
          // onSubmit={signIn}
          novalidate>
          <div className='col-md-12'>
            <div className='col sign'>
              <h4>Forget Password</h4>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Enter Email</label>
            <input type="email" class="form-control" id="exampleFormControlInput1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter username or email ID" />
          </div>
          {/* <div className='signbtn'>
<div class="col-12">
    <button type="submit" class="btnss" >LOGIN</button>
  </div></div> */}
          <div className='signbtn1'>
            <div class="col-12">
              <button type="submit" disabled={isLoading} class="btn1 rounded-pill but ">
              {isLoading ? 'Sending email...' : 'Reset Password'}
              </button>
                {error && <p style={{color:"red"}}>Please Enter Valid Email Id.</p>}
            </div></div>
            <div className='create padapu'>
            <p class="text--center">Go to Sign in? <a href="signin">click here to Sign in</a> </p>
          </div>
        </form>
        
            )}
      </div>
      );
    </>
  )
}
export default Forget