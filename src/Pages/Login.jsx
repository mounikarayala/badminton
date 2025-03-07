import React, { useState } from 'react'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

const Login = () => {
    const [userInfo, setUserInfo] = useState();
    const login = useGoogleLogin({
        onSuccess: (response) => {
            console.log(response);
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${response.access_token}`, {
                headers: {
                    Authorization: `Bearer ${response.access_token}`,
                    Accept: 'application/json'
                }
            })
                .then((res) => {
                    setUserInfo(res.data);
                })
                .catch((err) => console.log(err));
        },
        onError: (error) => {
            console.log(error)
        }
    });

    return (
        <div>
            <header className='App-header'>
                <button className='SignInButton' onClick={login} >
                    <img
                        src="continue-google.png"
                        alt="Google Logo"
                    /></button>
                {userInfo && <p>Welcome {userInfo.name}</p>}
            </header>
        </div>
    )
}

export default Login
