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
            <img src="https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            </nav> 
        </div>
    );
};

export default Header;