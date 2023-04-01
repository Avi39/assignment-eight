import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Bloginfo.css';

const Bloginfo = (props) => {
    const {cover_picture,author_picture,author_name,title,date,time} = props.blogInfo
    const handleAddToCart = props.handleAddToCart;
    const handleAddToMinute = props.handleAddToMinute;
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
                <button onClick={()=>handleAddToCart(props.blogInfo)}>
                 <FontAwesomeIcon icon={faBookmark} />
                </button> 
                </div>
            </div>
            <h2>{title}</h2>
            <button style={{color:'blue',textDecoration:'underline'}} onClick={()=>handleAddToMinute(props.blogInfo)} href="">mark as read</button>
        </div>
    );
};

export default Bloginfo;