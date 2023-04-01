import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Bloginfo.css';

const Bloginfo = (props) => {
    const {cover_picture,author_picture,author_name,title,date,time} = props.blogInfo
    return (
        <div className='blogInfo'>
            <img src={cover_picture} alt="" />
            <div className='author-info'>
                <img src={author_picture} alt="" />
                <div className=''>
                <p>{author_name}</p>
                <p> {date}</p> 
                </div>
                <div >
                <p>{time} min read</p>
                </div>    
                <div className='btn'>
                <button>
                 <FontAwesomeIcon icon={faBookmark} />
                </button> 
                </div>
            </div>
            <h2>{title}</h2>
            <a href="">mark as read</a>
        </div>
    );
};

export default Bloginfo;