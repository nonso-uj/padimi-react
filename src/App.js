import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Reset from "./components/Reset";
import SetNew from "./components/SetNew";
import AllDone from "./components/AllDone";
import Logout from "./components/Logout";



function App() {
  const [user, setUser] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const navigate = useNavigate()



  useEffect(() => {
    console.log('app level', isLoggedIn)
    
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setIsLoggedIn(true)
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      navigate('/')
    }
  }, []);

  return (
    <>
        <Routes>
          <Route path="/" exact element={<Dashboard user={user} isLoggedIn={isLoggedIn} />} />

          <Route path="/register" exact element={<Register  user={user} />} />

          <Route path="/login" exact element={<Login user={user} setUser={setUser} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />

          <Route path="/logout" exact element={<Logout setUser={setUser} user={user} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />

          <Route path="/forgot-password" exact element={<ForgotPassword  user={user} />} />

          <Route path="/reset-password" exact element={<Reset  user={user} />} />

          <Route path="/set-new-password" exact element={<SetNew  user={user} />} />

          <Route path="/all-done" exact element={<AllDone  user={user} />} />

        </Routes>
    </>
  );
}

export default App;
