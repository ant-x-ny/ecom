import { useState, useEffect, React} from 'react';
import axios from 'axios';
import './css/LoginStyle.css';
import NavBar from './navbar';
function Login(){

    let [userName, setUserName] = useState('')
    let [password, setPassword] = useState('')
    let [result, setResult] = useState('');

    function handleLogin() {
          setResult({userName, password})
    }

    return(
      <>
      <NavBar />
      <div id='MainBody'>
        <div className='login-box'>
            <div className='login-contents'>
                <h1>Login</h1>
                <input  onChange={(e) => setUserName(e.target.value) } type="text" className='inps' placeholder='Username'/>
                <input  onChange={(e) => setPassword(e.target.value) } type="password" className='inps' placeholder='Password' />
                <button className='signin-button' onClick={handleLogin} >Sign in</button>
                <a href="/register" className='link-register'>Don't have an account? Sign up!</a>
      </div> 
      </div> 
      </div> 
      </>
    )
}

export default Login;