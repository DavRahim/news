import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms an condition</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui.</p>
            <p>Go to Back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;
