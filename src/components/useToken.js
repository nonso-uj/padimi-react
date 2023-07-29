import { useState } from 'react'

const useToken = () => {
    const getToken = () => {
        try{
            const tokenString = localStorage.getItem('token');
            const userToken = JSON.parse(tokenString);
            return userToken
        }catch(error){
            console.log(error)
        }
        
    };
    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        try{
        localStorage.setItem('token', JSON.stringify(userToken));
        setToken(userToken.token);
        }catch(error){
            console.log(error)
        }
      };

    return {
    setToken: saveToken, 
    token
    }
}

export default useToken