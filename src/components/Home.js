import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Seller Home Page</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/property-form">List a Property</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
