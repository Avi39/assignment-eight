import React from 'react';
import './Bloginfo.css'

const Bloginfo = (props) => {
    const {cover_picture,author_picture,name,title,date,time} = props.blogInfo
    return (
        <div className='blogInfo'>
            <img src={cover_picture} alt="" />
            <div className='author-info'>
                <img src={author_picture} alt="" />
                <div>
                <p>{date}</p>
                <p>{time} min read</p>
                </div>
                
            </div>
        </div>
    );
};

export default Bloginfo;