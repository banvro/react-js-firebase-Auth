import React, { useState,useContext } from 'react'
import '../CSS/Signin.css'
import {auth} from "./Firebase"
import { Redirect,useHistory } from 'react-router-dom';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { useAuth } from '../Login/AuthContext'
const Signin = () => {

  const [isVisible, setVisible] = useState(false);
  const [email,setEmail]=useState("");
  const [password,setpassword]=useState("");
  // const{login}=useContext(AuthContext)
  const { login } = useAuth()

  let history = useHistory();
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

const onLogin = (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in
      const user = userCredential._tokenResponse.refreshToken;
      let user2=userCredential.user.accessToken
      localStorage.setItem('Accesstoken', user2);
      localStorage.setItem('Refreshtoken', user);
      login(email.current.value, password.current.value)
      // window.location.href = '/';
      // <Redirect to='/dashboard' />
      history.push("/");
      console.log(user);
      console.log(user2,'754656');
     console.log("succesfully login")
  })
  .catch((error) => {
      const errorCode = error.code;
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
    <form class="row g-3 needs-validation mains"  
    onSubmit={onLogin} 
    novalidate>

<div className='col-md-12'>
    <div  className='col sign'>
        <h4>Sign in to your account</h4>
    </div>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">User Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" 
  value={email}
  onChange={(e)=>setEmail(e.target.value)} 
  placeholder="Enter username or email ID"/>
</div>

<div class="mb-3 pass">
    <div className='lb'>
  <label for="exampleFormControlInput1" class="form-label">Password  <h6>Forgot Password?</h6> </label></div>
  <div className='inp'>
  <input type={!isVisible ? "password" : "text"} 
   value={password}
  onChange={(e)=>setpassword(e.target.value)} 
  required  class="form-control" id="exampleFormControlInput1" placeholder="Enter your password"/>
  {/* <div className='imm  pass-icon'>
    <img  src='../assests/eye2.png'></img>
  </div> */}
   <span toggle="#password-field"  className="icon" onClick={toggle}   >
   {isVisible ? <i class="fa-regular fa-eye  field-icon toggle-password"></i> : <i class="fa-regular fa-eye-slash  field-icon toggle-password"></i>}
   </span>
  </div>
</div>
<div className='checkform'>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
  <label class="form-check-label" for="flexCheckChecked">
   Keep me logged in
  </label>
</div></div>
<div className='signbtn'>
<div class="col-12">
    <button type="submit" class="btn" >LOGIN</button>
    
     
   
  </div></div>
  <div className='create'>
  <p class="text--center">Not to Jampack? <a href="signup">Create new account?</a> </p>
  </div>
        </form>
        </div>


  
  </>
  )
}

export default Signin