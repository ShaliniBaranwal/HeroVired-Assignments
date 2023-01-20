import React from 'react';
import './Navbar.css';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <Section1 />
                <div className="divider-line"></div>
                <Section2 />
                <div className="divider-line"></div>
                <Section3 />
                <div className="divider-line"></div>
                <Section4 />
                <div className="divider-line"></div>
            </div>
        </>
    );
}