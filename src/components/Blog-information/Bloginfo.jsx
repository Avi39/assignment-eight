import React from 'react';
import './Bloginfo.css'

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
                <div>
                <p>{time} min read</p>
                <button>aaa</button> 
                </div>    
            </div>
        </div>
    );
};

export default Bloginfo;