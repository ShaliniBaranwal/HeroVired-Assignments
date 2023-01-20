import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [userData, setUserData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get('/account');
            setUserData(res.data);
        };

        fetchData();
    }, []);

    if (userData.email) {
        return (
            <>
                <div className="name">{userData.name}</div>
                <div className="email">{userData.email}</div>
            </>
        );
    } else {
        return (
            <div>
                SignUP / SignIN
                <Link to="/signup">
                    <button>SIGN UP</button>
                </Link>
                <Link to="/signin">
                    <button>SIGN IN</button>
                </Link>
            </div>
        );
    }
};

export default HomePage;
