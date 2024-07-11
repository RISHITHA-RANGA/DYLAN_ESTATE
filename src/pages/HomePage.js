// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    console.log('HomePage rendered');
    return (
        <div>
            <h1>Welcome to Dylan Estate</h1>
            <Link to="/login">Login as Seller</Link>
        </div>
    );
};

export default HomePage;
