import { Navigate, useNavigate, Link } from 'react-router-dom'
import { useRef } from 'react'

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




const Register = ({user}) => {
  const navigate = useNavigate()
  const regForm = useRef(null)
  const userName = useRef(null)
  const nameError = useRef(null)
  const email = useRef(null)
  const emailError = useRef(null)
  const password = useRef(null)
  const passwordError = useRef(null)




const handleSubmit = async (e) => {
  e.preventDefault()
  

  let inp = nameValidator(userName.current.value);
  let em = emailValidator(email.current.value);
  let ph = passwordValidator(password.current.value);
  
  if (inp === true && em === true && ph === true){
    let token = await regUser({
        name: userName.current.value,
        email: email.current.value,
        password: password.current.value
      });
      
      console.log(userName.current.value, email.current.value, password.current.value)
      navigate('/login')
    }else {
      console.log('not proper')
    }

  
}




const nameValidator = (e) => {
  var nerrorMsgs = [];

  if (userName.current.value === "" || userName.current.value === null){
      userName.current.style.borderColor = "red";
      nerrorMsgs.push("Please enter your name");
  }else if(/\d+/ig.test(e.value) === true){
      userName.current.style.borderColor = "red";
      nerrorMsgs.push("Name cannot include numbers");
  }else{
      userName.current.style.borderColor = "green";
      nerrorMsgs = [];
      nameError.current.innerText = "";
      return true;
  }

  if (nerrorMsgs.length > 0){
      nameError.current.innerText = nerrorMsgs.join("\n");
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


const passwordValidator = (e) => {
  var perrorMsgs = [];

  if (password.current.value === "" || password.current.value === null){
      password.current.style.borderColor = "red";
      perrorMsgs.push("Please enter your password");
  }else if(/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/ig.test(password.current.value) === false){
      password.current.style.borderColor = "red";
      perrorMsgs.push("Password should be above 8 characters and include at least 1 special character, 1 number and 1 letter");
  }else{
      password.current.style.borderColor = "green";
      perrorMsgs = [];
      passwordError.current.innerText = "";
      return true;
  }

  if (perrorMsgs.length > 0){
      passwordError.current.innerText = perrorMsgs.join("\n");
  }
}




  return (
    <div className="container-xxl auth-container">


      <div className="authentication-wrapper authentication-basic container-p-y">
        
        <Link to="/" className="app-brand-link gap-2">
          <span className="app-brand-logo demo">
            <img src="assets/img/new/image3.png" alt="" />
          </span>
        </Link>
        
        <div className="authentication-inner">

          <div className="card">
            <div className="card-body">
              
              <h2 className="mb-2">Sign up</h2>
              <p className="mb-4 card-p small">Create your padimi account</p>

              <form ref={regForm} id="formAuthentication" className="mb-3" onSubmit={handleSubmit} method="GET">

                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Name*</label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    placeholder="Enter your name"
                    ref={userName}
                    onBlur={nameValidator}
                  />
                  <span ref={nameError} id="error" className="text-center eerror mt-2 small text-danger"></span>
                  
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email*</label>
                  <input ref={email} type="email" className="form-control form-email" id="email" name="email" placeholder="Enter your email" onBlur={emailValidator} />
                  <span ref={emailError} id="error" className="text-center eerror mt-2 small text-danger"></span>
                </div>

                <div className="mb-3 form-password-toggle">
                  <label className="form-label" htmlFor="password">Password*</label>

                  <div className="input-group input-group-merge">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="Create a password"
                      aria-describedby="password"
                      ref={password}
                      onBlur={passwordValidator}
                    />
                    <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                  </div>

                  <span className="input-text">Must be at least 8 characters</span>
                  <span ref={passwordError} id="error" className="text-center eerror mt-2 small text-danger"></span>
                </div>

                

                <button className="form-btn btn btn-primary d-grid w-100">Create account</button>
              </form>

              <p className="text-center small">
                <span>Already have an account?</span>
                <Link to="/login">
                  <span>Log in</span>
                </Link>
              </p>

            </div>
          </div>

        </div>

        <div className="footer-auth">
          <span><p>&copy; Padimi 2023</p></span>
          <span>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/></svg>
                help@padimi.com
            </p>
          </span>
        </div>

      </div>

      <div className="reg-img">
        <img src="assets/img/new/Frame1.png" alt="" />
      </div>
    </div>
  )
}

export default Register