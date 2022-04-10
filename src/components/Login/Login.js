import React from 'react';
import { Link } from 'react-router-dom';
import './LogIn.css'

const Login = () => {
    return (
        <div className='from-container'>
            <div>
                <h3 className='from-title'>Login</h3>
                <form action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" required />
                    </div>
                    <input className='from-submit' type="button" value="Login" />
                </form>
                <p>
                    New to Ema-John? <Link className='from-link' to="/signup">Create an account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;