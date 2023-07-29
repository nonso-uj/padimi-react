import { Navigate, Link } from "react-router-dom";
import Template from "./Template";



const AllDone = ({user}) => {


  return (
    <Template template={
      <>
        <div className="authentication-inner">

          <div className="card">
              <div className="card-body">

                  <div className="icon">
                      <img src="assets/img/new/verified.svg" alt="" />
                  </div>
              
                  <h2 className="mb-2">All done!</h2>
                  <p className="mb-4 card-p small">Your password has been reset. Would you like to set a recovery email or go back to log in?</p>

                  <Link to="/login"><button className="form-btn btn btn-primary d-grid w-100 mb-3">I'll do that later</button></Link>

                  <Link to="/login"><button className="form-btn btn btn-mod-secondary d-grid w-100">Go Back to Login</button></Link>
              

              </div>
          </div>

          <div className="progress">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar active"></div>
          </div>

        </div>  
      </>
    }/>
  )
}

export default AllDone