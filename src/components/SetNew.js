import { Navigate, useNavigate } from "react-router-dom";
import { useRef } from 'react'
import Template from "./Template";

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

const SetNew = ({user}) => {
  const navigate = useNavigate()
  const password1 = useRef(null)
  const password2 = useRef(null)
  const passwordError1 = useRef(null)
  const passwordError2 = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    let token = await regUser({
      // userCode: code.current.value,
    });
    navigate('/all-done')
  }




  const passwordValidator1 = (e) => {
    var perrorMsgs = [];
  
    if (password1.current.value === "" || password1.current.value === null){
        password1.current.style.borderColor = "red";
        perrorMsgs.push("Please enter your password");
    }else if(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/ig.test(password1.current.value) === false){
        password1.current.style.borderColor = "red";
        perrorMsgs.push("Password should be above 8 characters and include at least 1 special character, 1 number and 1 letter");
    }else{
        password1.current.style.borderColor = "green";
        perrorMsgs = [];
        passwordError1.current.innerText = "";
        return true;
    }
  
    if (perrorMsgs.length > 0){
        passwordError1.current.innerText = perrorMsgs.join("\n");
    }
  }


  const passwordValidator2 = (e) => {
    var perrorMsgs = [];
  
    if (password2.current.value === "" || password2.current.value === null){
        password2.current.style.borderColor = "red";
        perrorMsgs.push("Please confirm your password");
    }else if(password2.current.value !== password1.current.value){
        password2.current.style.borderColor = "red";
        perrorMsgs.push("Passwords do not match!");
    }else{
        password2.current.style.borderColor = "green";
        perrorMsgs = [];
        passwordError2.current.innerText = "";
        return true;
    }
  
    if (perrorMsgs.length > 0){
        passwordError2.current.innerText = perrorMsgs.join("\n");
    }
  }



  return (
    <Template template={
      <>
        <div className="authentication-inner">

          <div className="card">
              <div className="card-body">

                  <div className="icon">
                      <img src="assets/img/new/password.svg" alt="" />
                  </div>
              
              <h2 className="mb-2">Set new password</h2>
              <p className="mb-4 card-p small">Must be at least 8 characters</p>

              <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit} method="GET">

                  <div className="mb-3 form-password-toggle">
                      <label className="form-label" htmlFor="password">Password*</label>

                      <div className="input-group input-group-merge">
                      <input
                          type="password"
                          id="password1"
                          className="form-control"
                          name="password"
                          placeholder="Create a password"
                          aria-describedby="password"
                          ref={password1}
                          onBlur={passwordValidator1}
                      />
                      <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                      </div>
                      <span ref={passwordError1} id="error" className="text-center eerror mt-2 small text-danger"></span>
                  </div>

                  <div className="mb-3 form-password-toggle">
                      <label className="form-label" htmlFor="password">Confirm Password*</label>

                      <div className="input-group input-group-merge">
                      <input
                          type="password"
                          id="password2"
                          className="form-control"
                          name="password"
                          placeholder="Confirm your password"
                          aria-describedby="password"
                          ref={password2}
                          onKeyUp={passwordValidator2}
                      />
                      <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                      </div>
                      <span ref={passwordError2} id="error" className="text-center eerror mt-2 small text-danger"></span>
                  </div>

                  <a href="all-done.html"></a><button className="form-btn btn btn-primary d-grid w-100">Reset Password</button>
              </form>

              <p className="text-center small">
                  <a href="auth-login.html">
                  <span>Back to Login</span>
                  </a>
              </p>

              </div>
          </div>

          <div className="progress">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar active"></div>
              <div className="bar"></div>
          </div>

        </div>
      </>
    }/>
  )
}

export default SetNew