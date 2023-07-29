import { Navigate, useNavigate } from "react-router-dom";
import { useRef } from 'react'
import Template from "./Template";

import './pages/page-auth.css'


async function regUser(credentials) {
  return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
  })
  .then(data => data.json())
  .catch(err => {
      console.log(err)
  })
}



const ForgotPassword = ({user}) => {
  const navigate = useNavigate()
  const email = useRef(null)
  const emailError = useRef(null)


  const handleSubmit = async (e) => {
    e.preventDefault()
    
    let userEmail = email.current.value
  
    let em = emailValidator(email);
    
    if (em === true){
      let token = await regUser({
          email: userEmail,
        });
        
        console.log(userEmail)
        navigate('/reset-password')
      }else {
        console.log('not proper')
      }
  
    
  }

  const emailValidator = (e) => {
    var eerrorMsgs = [];


  
    if (email.current.value === "" || email.current.value === null){
        email.current.style.borderColor = "red";
        eerrorMsgs.push("Please enter your email");
    }else if(/^[\w.]+@[\w.]+$/ig.test(email.current.value) === false){
        email.current.style.borderColor = "red";
        eerrorMsgs.push("Invalid email");
    }else{
        email.current.style.borderColor = "green";
        eerrorMsgs = [];
        emailError.current.innerText = "";
        return true;
    }
  
    if (eerrorMsgs.length > 0){
        emailError.current.innerText = eerrorMsgs.join("\n");
    }
  }


  return (
    <>

    <Template template={
      <div className="authentication-inner">

        <div className="card">
          <div className="card-body">

              <div className="icon">
                  <img src="assets/img/new/fingerprint.svg" alt=""/>
              </div>
            
            <h2 className="mb-2">Forgot Password?</h2>
            <p className="mb-4 card-p small">No worries, we'll send you reset instructions</p>

            <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit} method="GET">

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email*</label>
                <input type="text" className="form-control" id="email" name="email" placeholder="Enter your email" ref={email} onBlur={emailValidator} />
                <span ref={emailError} id="error" className="text-center eerror mt-2 small text-danger"></span>
              </div>

              <a href="reset.html"><button className="form-btn btn btn-primary d-grid w-100">Send Instructions</button></a>
            </form>

            <p className="text-center small">
              <a href="auth-login.html">
                <span>Back to Login</span>
              </a>
            </p>

          </div>
        </div>

        <div className="progress">
        <div className="bar active"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        </div>

      </div>
    }/>
    
    </>

  )
}

export default ForgotPassword