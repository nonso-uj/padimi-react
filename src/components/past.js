// import { useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import './pages/page-auth.css'


// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })
//     .then(data => data.json())
//     .catch(err => {
//         console.log(err)
//     })
// }



// const Login = ({ setToken, token }) => {
//     const [username, setUserName] = useState();
//     const [password, setPassword] = useState();
    
//     if(token) {
//         console.log(token)
//         return <Navigate to="/" />
//     }



//     const handleSubmit = async e => {
//         e.preventDefault();
//         const token = await loginUser({
//           username,
//           password
//         });
//         // console.log(token)
//         // console.log(typeof setToken)
//         setToken(token);

//     }


//     return (
//         <div className="container-xxl auth-container">


//         <div className="authentication-wrapper authentication-basic container-p-y">
            
//             <div className="app-brand">
//                 {/* <a href="" className="app-brand-link gap-2"> */}
//                 <span className="app-brand-logo demo">
//                     <img src="assets/img/new/image3.png" alt="" />
//                 </span>
//                 {/* </a> */}
//             </div>
            
//             <div className="authentication-inner">

//             <div className="card">
//                 <div className="card-body">
                
//                 <h2 className="mb-2">Welcome Back!</h2>
//                 <p className="mb-4 card-p small">Log into your padimi account</p>

//                 <form id="formAuthentication" className="mb-3" method="POST" onSubmit={handleSubmit}>

//                     <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email*</label>
//                     <input type="text" className="form-control" id="email" name="email" placeholder="Enter your email" onChange={e => setUserName(e.target.value)} />
//                     </div>

//                     <div className="mb-3 form-password-toggle">
//                     <label className="form-label" htmlFor="password">Password*</label>

//                     <div className="input-group input-group-merge">
//                         <input
//                         type="password"
//                         id="password"
//                         className="form-control"
//                         name="password"
//                         placeholder="Create a password"
//                         aria-describedby="password"
//                         onChange={e => setPassword(e.target.value)}
//                         />
//                         <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
//                     </div>

//                     <span className="input-text">Must be at least 8 characters</span>
//                     </div>

//                     <div className="mb-3 remember">
//                     <div className="form-check">
//                         <input className="form-check-input" type="checkbox" id="remember-me" />
//                         <label className="form-check-label small" htmlFor="remember-me"> Remember Me </label>
//                     </div>

//                     {/* <a href="forgot.html"> */}
//                         <small>Forgot Password?</small>
//                     {/* </a> */}
//                     </div>



//                     <button className="form-btn btn btn-primary d-grid w-100">Sign In</button>
//                 </form>

//                 <p className="text-center small">
//                     <span>Not registered yet? </span>
//                     {/* <a href="index.html"> */}
//                     <span>Create an Account</span>
//                     {/* </a> */}
//                 </p>

//                 </div>
//             </div>

//             </div>

//             <div className="footer-auth">
//             <span><p>&copy; Padimi 2023</p></span>
//             <span>
//                 <p>
//                     <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/></svg>
//                     help@padimi.com
//                 </p>
//             </span>
//             </div>

//         </div>

//         <div className="login-img">
//             <img src="assets/img/new/image4.png" alt="" />
//         </div>
//         </div>
//     )
// }



// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }





// export default Login









// import { Navigate, useNavigate, Link } from 'react-router-dom'
// import { useRef } from 'react'
// import PropTypes from 'prop-types';
// import './pages/page-auth.css'


// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })
//     .then(data => data.json())
//     .catch(err => {
//         console.log(err)
//     })
// }



// const Login = ({ setToken, token }) => {
//     const loginForm = useRef(null)
//     const email = useRef(null)
//     const emailError = useRef(null)
//     const password = useRef(null)
//     const passwordError = useRef(null)

    
    
//     if(token) {
//         console.log(token)
//         return <Navigate to="/" />
//     }



//     const handleSubmit = async e => {
//         e.preventDefault();
//         // const token = await loginUser({
//         //   username,
//         //   password
//         // });
//         // console.log(token)
//         // console.log(typeof setToken)
//         // setToken(token);

//     }

//     const emailValidator = (e) => {
//         var eerrorMsgs = [];
      
//         if (email.current.value === "" || email.current.value === null){
//             email.current.style.borderColor = "red";
//             eerrorMsgs.push("Please enter your email");
//         }else if(/^[\w.]+@[\w.]+$/ig.test(email.current.value) === false){
//             email.current.style.borderColor = "red";
//             eerrorMsgs.push("Invalid email");
//         }else{
//             email.current.style.borderColor = "green";
//             eerrorMsgs = [];
//             emailError.current.innerText = "";
//             return true;
//         }
      
//         if (eerrorMsgs.length > 0){
//             emailError.current.innerText = eerrorMsgs.join("\n");
//         }
//       }


//     return (
//         <div className="container-xxl auth-container">


//         <div className="authentication-wrapper authentication-basic container-p-y">
            
//             <div className="app-brand">
//                 {/* <a href="" className="app-brand-link gap-2"> */}
//                 <span className="app-brand-logo demo">
//                     <img src="assets/img/new/image3.png" alt="" />
//                 </span>
//                 {/* </a> */}
//             </div>
            
//             <div className="authentication-inner">

//             <div className="card">
//                 <div className="card-body">
                
//                 <h2 className="mb-2">Welcome Back!</h2>
//                 <p className="mb-4 card-p small">Log into your padimi account</p>

//                 <form ref={ loginForm } id="formAuthentication" className="mb-3" method="POST" onSubmit={handleSubmit}>

//                     <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email*</label>
//                     <input type="email" minLength={8} className="form-control" id="email" name="email" placeholder="Enter your email" required onChange={e => setUserName(e.target.value)} />
//                     {/* <span className="text-danger"></span> */}
//                     </div>

//                     <div className="mb-3 form-password-toggle">
//                     <label className="form-label" htmlFor="password">Password*</label>

//                     <div className="input-group input-group-merge">
//                         <input
//                         type="password"
//                         id="password"
//                         className="form-control"
//                         name="password"
//                         required
//                         placeholder="Create a password"
//                         aria-describedby="password"
//                         onChange={e => setPassword(e.target.value)}
//                         />
//                         <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
//                     </div>

//                     <span className="input-text">Must be at least 8 characters</span>
//                     </div>

//                     <div className="mb-3 remember">
//                     <div className="form-check">
//                         <input className="form-check-input" type="checkbox" id="remember-me" />
//                         <label className="form-check-label small" htmlFor="remember-me"> Remember Me </label>
//                     </div>

//                     <Link to="/forgot-password">
//                         <small>Forgot Password?</small>
//                     </Link>
//                     </div>



//                     <button className="form-btn btn btn-primary d-grid w-100">Sign In</button>
//                 </form>

//                 <p className="text-center small">
//                     <span>Not registered yet? </span>
//                     <Link to="/register">
//                     <span>Create an Account</span>
//                     </Link>
//                 </p>

//                 </div>
//             </div>

//             </div>

//             <div className="footer-auth">
//             <span><p>&copy; Padimi 2023</p></span>
//             <span>
//                 <p>
//                     <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/></svg>
//                     help@padimi.com
//                 </p>
//             </span>
//             </div>

//         </div>

//         <div className="login-img">
//             <img src="assets/img/new/image4.png" alt="" />
//         </div>
//         </div>
//     )
// }



// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }





// export default Login
























// import { Navigate, Link } from 'react-router-dom'
// import { useRef } from 'react'
// import PropTypes from 'prop-types';
// import './pages/page-auth.css'


// async function loginUser(credentials) {
//     return fetch('http://localhost:8080/login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(credentials)
//     })
//     .then(data => data.json())
// }



// const Login = ({ setToken, token }) => {
//     const loginForm = useRef(null)
//     const email = useRef(null)
//     const emailError = useRef(null)
//     const password = useRef(null)
//     const passwordError = useRef(null)
//     const fetchError =  useRef(null)

    
    
//     if(token) {
//         console.log(token, 'filled')
//         return <Navigate to="/" />
//     }



//     const handleSubmit = async e => {
//         e.preventDefault();

//         let em = emailValidator(email.current.value);

//         if (em === true){

//             try{
//                 token = await loginUser({
//                     email: email.current.value,
//                     password: password.current.value
//                 });
//             }catch(error){
//                 fetchError.current.innerText = 'Ooops! There was an error.\nPlease verify all input and check your connection, then try again!'
//                 fetchError.current.classList.add('text-danger')
//                 fetchError.current.parentElement.classList.add('show')
//             }
//             console.log('first', token)
//             if(token){
//                 setToken(token);
//             }
            
//         }
//     }


//     const emailValidator = (e) => {
//         var eerrorMsgs = [];
      
//         if (email.current.value === "" || email.current.value === null){
//             email.current.style.borderColor = "red";
//             eerrorMsgs.push("Please enter your email");
//         }else if(/^[\w.]+@[\w.]+$/ig.test(email.current.value) === false){
//             email.current.style.borderColor = "red";
//             eerrorMsgs.push("Invalid email");
//         }else{
//             email.current.style.borderColor = "green";
//             eerrorMsgs = [];
//             emailError.current.innerText = "";
//             return true;
//         }
      
//         if (eerrorMsgs.length > 0){
//             emailError.current.innerText = eerrorMsgs.join("\n");
//         }
//       }


//     return (
//         <>
//             <div className="bs-toast toast fade start-50 toast-placement-ex m-2 top-0 translate-middle-x" role="alert" aria-live="assertive" aria-atomic="true">
//                 <div className="toast-header">
//                     <i className="bx bx-bell me-2"></i>
//                     <div className="me-auto fw-semibold">Padimi</div>
//                     <small>Just Now</small>
//                     <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
//                 </div>
//                 <div ref={fetchError} className="toast-body">
//                 </div>
//             </div>
//             <div className="container-xxl auth-container">


//             <div className="authentication-wrapper authentication-basic container-p-y">
                
//                 <div className="app-brand">
//                     <Link to="/" className="app-brand-link gap-2">
//                         <span className="app-brand-logo demo">
//                             <img src="assets/img/new/image3.png" alt="" />
//                         </span>
//                     </Link>
//                 </div>
                
//                 <div className="authentication-inner">

//                 <div className="card">
//                     <div className="card-body">
                    
//                     <h2 className="mb-2">Welcome Back!</h2>
//                     <p className="mb-4 card-p small">Log into your padimi account</p>

//                     <form ref={ loginForm } id="formAuthentication" className="mb-3" method="POST" onSubmit={handleSubmit}>

//                         <div className="mb-3">
//                         <label htmlFor="email" className="form-label">Email*</label>
//                         <input type="email" minLength={8} className="form-control" id="email" name="email" placeholder="Enter your email" required onBlur={emailValidator} ref={email} />
//                         <span className="text-danger" ref={emailError}></span>
//                         </div>

//                         <div className="mb-3 form-password-toggle">
//                         <label className="form-label" htmlFor="password">Password*</label>

//                         <div className="input-group input-group-merge">
//                             <input
//                             type="password"
//                             id="password"
//                             className="form-control"
//                             name="password"
//                             required
//                             placeholder="Create a password"
//                             aria-describedby="password"
//                             ref={password}
//                             />
//                             <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
//                         </div>

//                         <span className="input-text">Must be at least 8 characters</span>
//                         <span  ref={passwordError}></span>
//                         </div>

//                         <div className="mb-3 remember">
//                         <div className="form-check">
//                             <input className="form-check-input" type="checkbox" id="remember-me" />
//                             <label className="form-check-label small" htmlFor="remember-me"> Remember Me </label>
//                         </div>

//                         <Link to="/forgot-password">
//                             <small>Forgot Password?</small>
//                         </Link>
//                         </div>



//                         <button className="form-btn btn btn-primary d-grid w-100">Sign In</button>
//                     </form>

//                     <p className="text-center small">
//                         <span>Not registered yet? </span>
//                         <Link to="/register">
//                         <span>Create an Account</span>
//                         </Link>
//                     </p>

//                     </div>
//                 </div>

//                 </div>

//                 <div className="footer-auth">
//                 <span><p>&copy; Padimi 2023</p></span>
//                 <span>
//                     <p>
//                         <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm340-302L140-685v465h680v-465L480-462Zm0-60 336-218H145l335 218ZM140-685v-55 520-465Z"/></svg>
//                         help@padimi.com
//                     </p>
//                 </span>
//                 </div>

//             </div>

//             <div className="login-img">
//                 <img src="assets/img/new/image4.png" alt="" />
//             </div>
//             </div>
//         </>
//     )
// }



// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }





// export default Login