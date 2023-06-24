import React from 'react'
import { useState } from 'react';


const Forget = () => {

  const [isVisible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("")
  const toggle = () => {
    setVisible(!isVisible);
  };

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
        <form class="row g-3 needs-validation mains"
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
              <button type="submit" class="btn1 rounded-pill but ">CREATE ACCOUNT</button>
            </div></div>

        </form>
      </div>



    </>
  )
}

export default Forget