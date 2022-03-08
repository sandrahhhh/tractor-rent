import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import logo from "./photos/tractor.png"
import { Email } from '@material-ui/icons';

function Login() {
    
    const history = useHistory()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
       
        auth
        .signInWithEmailAndPassword(email, password)
        
        .then(auth => {
            history.push("./")
        })
        .catch(error => alert(error.messege))
    }

    const register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            if (auth) {
                history.push("./")
            }
        })
        .catch(error => alert(error.messege))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src={logo}
                />
            </Link>
            <h5 className='text'>Tractor Rent</h5>
            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' className='login__signInButton' onClick= {signIn} >Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the Terms and Conditions of Use & Sale for this website. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                 </p>

                <button className='login__registerButton' onClick= {register}>Create your Account</button>
            </div>
        </div>
    )
}

export default Login;