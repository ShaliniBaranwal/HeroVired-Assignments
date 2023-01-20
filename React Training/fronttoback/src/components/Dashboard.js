import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Searchbox from './Searchbox';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    //useEffect, dependency array shud be empty
    //axios
    // store the data in state and then we will map it inside our react componenet
    let [data, setData] = useState('');
    let [inputValue, setinputValue] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            let res = await axios.get('/book');
            setData(res.data);
        };

        fetchData();
    }, []);

    if (data === 'Please log in to your account.' || !data) {
        return (
            <>
                <p>
                    {data} Head to{' '}
                    <Link to="/">
                        <button>HOMEPAGE</button>
                    </Link>
                </p>
            </>
        );
    } else {
        let filterData = data.filter(
            (ele) =>
                ele.author.toLowerCase() === inputValue.toLowerCase() ||
                ele.bookname.toLowerCase() === inputValue.toLowerCase()
        );

        return (
            <div>
                <Searchbox setinputValue={setinputValue} />

                {filterData.length
                    ? filterData.map((ele) => (
                          <div className="book">
                              <div className="book-name">{ele.bookname}</div>
                              <div className="book-author">{ele.author}</div>
                              <div className="book-quantity">{ele.quantity}</div>
                              <div className="book-id">{ele.id}</div>
                          </div>
                      ))
                    : data.length &&
                      data.map((ele) => (
                          <div className="book">
                              <div className="book-name">{ele.bookname}</div>
                              <div className="book-author">{ele.author}</div>
                              <div className="book-quantity">{ele.quantity}</div>
                              <div className="book-id">{ele.id}</div>
                          </div>
                      ))}
            </div>
        );
    }
};

export default Dashboard;
