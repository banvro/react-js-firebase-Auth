import React, { useState, useEffect } from 'react'
import { getAuth, createUserWithEmailAndPassword,fetchSignInMethodsForEmail } from 'firebase/auth';
import '../CSS/Signup.css'

import { signInWithPopup } from "firebase/auth";

import { db, auth, provider } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore';

const Signin = () => {

  // code for sign up wiuth gmailll
  const [value, setValue] = useState('')
  const handleClick = () => {
    console.log("shhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem("email", data.user.email)
      // window.location.href = '/dashboard';
      console.log(auth,data,signInWithPopup,setValue,  "qqqqqqqqqqqqqqqq")
    })
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  })

  const [isVisible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [username, setuserName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const toggle = () => {
    setVisible(!isVisible);
  };






  // const signUp=(e)=>
  // async (name, email, password) => {
  //   try {
  //   e.preventDefault();


  //   createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // User creation successful
  //     const user = userCredential.user;
  //     console.log('User created:', user);
  //   }
  //   )

  //   .catch((error) => {
  //     // An error occurred during user creation
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.error('Error creating user:', errorCode, errorMessage);
  //   });
  // }




  const handleSubmit = async (e) => {
    e.preventDefault();


// alert("submited")

    try {
      
      createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // User creation successful
      const user = userCredential.user;
      console.log('User created:', user);
      addDoc(collection(db, 'test'), {
        name: username,
        name: name,
        email: email,
        password: password,
        // completed: false,
        created: Timestamp.now()
   
      })
    }
    )
      console.log(addDoc, "ssssssssssssssssssssssss")
 
      // onClose()
    } catch (err) {
      alert(err)
    }

    // window.location.href = '/dashboard';
  }


  return (
    <>
      <div className='mainsignup'>
        <div className='pic'>
          <img src='../assests/jamlogo.png'></img>
        </div>
        <div className='head'>
          <h1>Jampack</h1>
        </div>
      </div>
      {/* card   */}

      <div className='col-lg-12 for height' >
        <form class="row g-3 needs-validations"
        //  onSubmit={handleSubmit}
          novalidate>

          <div className='col-md-12'>
            <div className='col sign'>
              <h4>Sign Up to Jampack</h4>
            </div>
            <div className='create'>
              <p class="text--center">Already a member ?  <a to="">Sign in</a> </p>
            </div>
          </div>

          {/* button  */}


          <div class="d-grid gap-3 col-12 mx-auto">
            <button class="btn1" id='google' 
            // onClick={handleClick}
             className="rounded-pill" type="button">
              <i class="fa-brands fa-google"> </i> &nbsp;&nbsp;
              <span className='signupg'>Sign Up With Gmail</span>
            </button>
            <button class="btn btn-primary" className="rounded-pill primary" type="button"> <i class="fa-brands fa-facebook"></i> &nbsp; &nbsp;<span className='signupfb'>Sign Up With Facebook</span></button>

          </div>
          <div class="horizontal-line">
            <span class="or-text">Or</span>
          </div>

          <div className='letrow  '>
            <div class="col-md-6 name ">
              <label for="validationDefault01" class="form-label up">Name</label>
              <input type="text" class="form-control up1" id="validationDefault01"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}


                placeholder="Enter your name" />
            </div>
            <div class="col-md-6 name">
              <label for="validationDefault02" class="form-label up"> Username</label>
              <input type="text" class="form-control up1" id="validationDefault02"
                value={username}
                onChange={(e) => setuserName(e.target.value)}

                placeholder="Enter username" required />
            </div>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label up">Email</label>
            <input type="email" class="form-control up1" id="exampleFormControlInput1"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email id" />
          </div>

          <div class="mb-3 pass">
            <div className='lb'>
              <label for="exampleFormControlInput1" class="form-label up1">Password  </label></div>
            <div className='inp'>
              <input type={!isVisible ? "password" : "text"}
                value={password}
                onChange={(e) => setpassword(e.target.value)} required class="form-control up1" id="exampleFormControlInput1" placeholder="6+ Characters" />
              {/* <div className='imm  pass-icon'>
    <img  src='../assests/eye2.png'></img>
  </div> */}
              <span toggle="#password-field" className="icon" onClick={toggle}   >
                {isVisible ? <span className='field-icon1'>SHOW</span>
                  :
                  <span className=" field-icon1 ">HIDE</span>}
              </span>
            </div>
          </div>
          <div className='formscheck'>
            <div class="form-check termss">
              <input class="form-check-input" required type="checkbox" value="" id="flexCheckChecked" />
              <label class="form-check-label" for="flexCheckChecked">
                By  creating an account you specify that you have read and agree with our <span className='terms'>Terms of use </span>
                and <span className='terms'>Privacy Policy</span>. We may keep you inform about latest updates through our   default &nbsp;<span className='terms'>notification settings</span> </label>
            </div></div>

          <div className='signbtn1'>
            <div class="col-12">
              <button type="submit" class="btn1 rounded-pill but ">CREATE ACCOUNT</button>
            </div></div>

        </form>
      </div>



    </>
  )
}

export default Signup