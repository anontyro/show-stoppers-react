import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div className='main-nav'>
            <nav className='site-nav'>
                <ul className='nav-list left-list'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/search'> Search</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;