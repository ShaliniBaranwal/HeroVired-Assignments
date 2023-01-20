import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Signin = () => {
    let [data, setData] = useState({});
    let [status, setStatus] = useState('');

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    async function getAccountData() {
        const res = await Axios.post('/login', data);
        setStatus(res.data);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="email"
                name="email"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="password"
                name="password"
                onChange={handleChange}
            />
            <input type="submit" onClick={getAccountData} />

            <p className='status'>{status}</p>

            <Link to="/signup">
                <p>Are you not a registered user? SignUP here</p>
            </Link>
        </div>
    );
};
export default Signin;
