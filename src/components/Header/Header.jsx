import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <h2>Avi's Cafe</h2>
            <div>
            <a href="/all blogs">all blogs</a>
            <a href="/authors">authors</a>
            <a href="/blog date">blog date</a>
            </div> 
        </div>
    );
};

export default Header;