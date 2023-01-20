import React, { useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {
    let [data, setData] = useState({});

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };
    console.log(data);

    async function sendData() {
        let res = await Axios.post('/account', data);
        console.log(res.data);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="username"
                name="name"
                onChange={handleChange}
            />
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
            <input type="submit" onClick={sendData} />

            <Link to="/signin">
                <p>Are you a registered user? SignIN here</p>
            </Link>
        </div>
    );
};
export default Signup;
