import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h2>Avi's Cafe</h2>
            <nav>
            <a href="/all blogs">blogs</a>
            <a href="/authors">authors</a>
            <a href="/blog date">blog-date</a>
            </nav> 
        </div>
    );
};

export default Header;