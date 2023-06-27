import React, { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, fetchSignInMethodsForEmail } from 'firebase/auth';
import '../CSS/Signup.css';

import { signInWithPopup } from "firebase/auth";

import { db, auth, provider } from '../Login/Firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { useUserAuth } from './AuthContext';

const Signup = () => {
  const [value, setValue] = useState('');

  const { signUp, googleSignIn } = useUserAuth();
  const handleClick = () => {
    console.log("s hhhhhhhhhhhhhhhhhhhhhhhhhhhhhh");
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      console.log(data.user.email, data.user.name, data.user.usernmae)
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("username", data.user.username);
      localStorage.setItem("name", data.user.name);
      window.location.href = '/';
      googleSignIn();
      console.log(auth, data, signInWithPopup, setValue, "qqqqqqqqqqqqqqqq");
    });
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'));
  }, []);

  const [isVisible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const toggle = () => {
    setVisible(!isVisible);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters long');
      }
      console.log("pppppppppppppppppppppppppppppppppppppppp")
      console.log(name, "ssssss")

      addDoc(collection(db, 'users'), {
        userName: username,
        userEmail: email,
        role:'user',
        password: password,
        timestamp: Timestamp.now()
      });
     
      signUp(email, password);
      window.location.href = '/signin';
    } catch (err) {
      alert(err);
    }
  }

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User logged in with Facebook:', user);
      // Perform any additional actions or store user information as needed
    } catch (error) {
      console.error('Error logging in with Facebook:', error);
    }
  };


  useEffect(() => {
    const token = localStorage.getItem('Accesstoken');
    if(token !== null) {
      window.location.href = '/';
      console.log(token, "qqqqqqqqqqqqqqqqqqqqqqq");
    }
}, []);

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
      onSubmit={handleSubmit}
        novalidate>

        <div className='col-md-12'>
          <div className='col sign'>
            <h4>Sign Up to Jampack</h4>
          </div>
          <div className='create'>
            <p class="text--center">Already a member ?  <a href="signin">Sign in</a> </p>
          </div>
        </div>

        {/* button  */}


        <div class="d-grid gap-3 col-12 mx-auto">
          <button class="btn1" id='google' 
           onClick={handleClick}
           className="rounded-pill" type="button">
            <i class="fa-brands fa-google"> </i> &nbsp;&nbsp;
            <span className='signupg'>Sign Up With Gmail</span>
          </button>
          <button class="btn btn-primary" className="rounded-pill primary" type="button" onClick={handleFacebookLogin}> <i class="fa-brands fa-facebook"></i> &nbsp; &nbsp;<span className='signupfb'>Sign Up With Facebook</span></button>

        </div>
        <div class="horizontal-line">
          <span class="or-text">Or</span>
        </div>

        <div className='letrow  abc'>
          <div class="col-md-6 name fizus">
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
              onChange={(e) => setUsername(e.target.value)}

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
          <input
            type={!isVisible ? "password" : "text"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            class="form-control up1"
            id="exampleFormControlInput1"
            placeholder="6+ Characters"
          />
          {/* Password error message */}
          {passwordError && <div className="error">{passwordError}</div>}
          {/* ... */}
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
  );
}

export default Signup;

