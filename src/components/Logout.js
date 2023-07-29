import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
// import usehis

const Logout = ({ user, setUser, setIsLoggedIn, isLoggedIn }) => {
    const navigate = useNavigate()
    
    useEffect(() => {
      console.log('logout level',isLoggedIn)

      setUser({});
      setIsLoggedIn(false)
      localStorage.clear();
      navigate('/')
    }, [navigate, setIsLoggedIn, setUser])
  };



export default Logout;