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

const Reset = ({user}) => {
  const navigate = useNavigate()
  const code = useRef(null)
  const codes = useRef(null)
  const codeError = useRef(null)

  // if(user) {
  //   console.log(user)
  //   return <Navigate to="/" />
  // }


  const codeValidator = () => {}

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(Array.from(codes.current.childNodes)?.map((child) => child.value))
    // for(let i=0)

    let token = await regUser({
      userCode: code.current.value,
    });
    navigate('/set-new-password')
  }


  const moveCursor = (e) => {
    if (e.target.value !== "" && e.target.nextElementSibling && e.target.nextElementSibling.nodeName === "INPUT"){
      e.target.nextElementSibling.focus();
    }
  }


  return (

    <Template template={
      <>
        <div className="authentication-inner">

        <div className="card">
          <div className="card-body">

              <div className="icon">
                  <img src="assets/img/new/open-email.svg" alt="" />
              </div>
            
            <h2 className="mb-2">Password Reset</h2>
            <p className="mb-4 card-p small">We sent a code to <b>namehere@example.com</b></p>

            <form id="formAuthentication" className="mb-3" onSubmit={handleSubmit} method="GET">

              <div className="my-4 code-div" ref={codes}>
                <input type="text" maxLength="1" className="form-control digit1" ref={code} onBlur={codeValidator} onInput={moveCursor} />
                <input type="text" maxLength="1" className="form-control digit2"  ref={code} onBlur={codeValidator} onInput={moveCursor} />
                <input type="text" maxLength="1" className="form-control digit3"  ref={code} onBlur={codeValidator} onInput={moveCursor} />
                <input type="text" maxLength="1" className="form-control digit4"  ref={code} onBlur={codeValidator} onInput={moveCursor} />
                <input type="text" maxLength="1" className="form-control digit5"  ref={code} onBlur={codeValidator} />
              </div>
              <span className="error" ref={codeError}></span>

              <a href="set-new.html"><button className="form-btn btn btn-primary d-grid w-100">Continue</button></a>
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
          <div className="bar active"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          </div>

      </div>
      </>
    }/>
    
  )
}

export default Reset