
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);
    }

    return (
        <div className='from-container'>
            <div>
                <h2 className='fr0m-title'>Your Shipping Info</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input onBlur={handleNameBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='from-submit' type="submit" value="Add Shipping" required />
                </form>

            </div>
        </div>
    );
};

export default Shipment;




/* import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [Phone, setPhone] = useState('');
    const [error, setError] = useState('');
    // const navigate = useNavigate();

    const handleNameBlur = event => {
        setName(event.target.value);
    }

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handleAddressBlur = event => {
        setAddress(event.target.value);
    }

    const handlePhoneBlur = event => {
        setPhone(event.target.value);
    }

    // if (user) {
    //     navigate('/shop');
    // }

    const handleCreateUser = event => {
        event.preventDefault();

    }

    return (
        <div className='from-container'>
            <div>
                <h2 className='from-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="name">Email</label>
                        <input onBlur={handleEmailBlur} type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="text" name="phone" id="" />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='from-submit' type="submit" value="Add sepping" required />
                </form>
                <p>

                </p>
            </div>
        </div>
    );
};

export default Shipment; */