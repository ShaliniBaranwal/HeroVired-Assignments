import React from 'react';
import './Header.css';

import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';

export default function Header() {
    return (
        <>
            <div className="header">
                <Section1 />
                <Section2 />
                <Section3 />
            </div>
        </>
    );
}
