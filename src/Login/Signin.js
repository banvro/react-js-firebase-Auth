import React, { useState, useEffect,useContext } from 'react'
import '../CSS/Signin.css'
import { auth } from "./Firebase"
import { Redirect, useHistory } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Puff } from 'react-loader-spinner'
import { useUserAuth } from './AuthContext'
const Signin = () => {

  const [isVisible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const{login}=useContext(AuthContext)
  // const { login } = useAuth()
  const { logIn, googleSignIn } = useUserAuth();
  // let history = useHistory();
  const toggle = () => {
    setVisible(!isVisible);
  };
  //   const signIn=(e)=>{
  //     e.preventDefault();


  //     navigate('/dashboard', { replace: true });

  //     signInWithEmailAndPassword(auth ,email,password)
  //     .then((userCredential)=>{
  //       console.log (userCredential)
  //     }).catch((error)=>{
  //       console.log(error)
  //     })



  //        // Perform your signin logic here
  //     // Assuming signin is successful, navigate to the dashboard page


  //   }

  useEffect(() => {
    const token = localStorage.getItem('Accesstoken');
    if(token !== null) {
      window.location.href = '/';
      console.log(token, "qqqqqqqqqqqqqqqqqqqqqqq");
    }
}, []);

  const onLogin = (e) => {

    // setLoading(true)
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setLoading(false)
        const user = userCredential._tokenResponse.refreshToken;
        let user2 = userCredential.user.accessToken
        localStorage.setItem('Accesstoken', user2);
        localStorage.setItem('Refreshtoken', user);
        localStorage.setItem('email', userCredential.user.email);
        localStorage.setItem('name', userCredential.user.displayName);
        console.log(userCredential, 'userCredential');
        // login(email.current.value, password.current.value)
         logIn(email, password);
         window.location.href = '/';
        
        console.log(user);

        console.log("succesfully login")
      })
      .catch((error) => {
        setLoading(false)
        const errorCode = error.code;
        alert('Wrong Email/Password')
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        console.log("invalid please check your email and password")
      });
     

  }
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
        <form class="row g-3 needs-validation mains  signspace "
          onSubmit={onLogin}
          novalidate>

          <div className='col-md-12'>
            <div className='col sign'>
              <h4>Sign in to your account</h4>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Email ID</label>
            <input type="email" autoComplete="off" class="form-control" id="exampleFormControlInput1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  required

              placeholder="Enter email ID" />
          </div>
          <Puff
            height="80"
            width="80"
            radius={1}
            color="#4fa94d"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={loading}
          />

          <div class="mb-3 pass">
            <div className='lb'>
              <label for="exampleFormControlInput1" autoComplete="off" class="form-label">Password  <a href="forget"><h6>Forgot Password?</h6></a> </label></div>
            <div className='inp'>
              <input type={!isVisible ? "password" : "text"}
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                required class="form-control" id="exampleFormControlInput1" placeholder="Enter your password" />
              {/* <div className='imm  pass-icon'>
    <img  src='../assests/eye2.png'></img>
  </div> */}
              <span toggle="#password-field" className="icon" onClick={toggle}   >
                {isVisible ? <i class="fa-regular fa-eye  field-icon toggle-password"></i> : <i class="fa-regular fa-eye-slash  field-icon toggle-password"></i>}
              </span>
            </div>
          </div>
          <div className='checkform'>
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"   required/>
              <label class="form-check-label" for="flexCheckChecked"  >
                Keep me logged in
              </label>
            </div></div>
          <div className='signbtn'>
            <div class="col-12">
              <button type="submit" class="btn" id='login'>LOGIN</button>



            </div></div>
          <div className='create padapu'>
            <p class="text--center">Not to Jampack? <a href="signup">Create new account?</a> </p>
          </div>

         
        </form>
      </div>



    </>
  )
}

export default Signin