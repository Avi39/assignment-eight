import React, { useEffect, useState } from 'react';
import Bloginfo from '../Blog-information/Bloginfo';
import './Blogs.css';
const Blogs = () => {
    const [blogInfos,setBlogInfos] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setBlogInfos(data))
    },[])
    return (
        <div className='blog-container'>
            <div className='blog-cart'>
                {
                    blogInfos.map(blogInfo => <Bloginfo 
                        key={blogInfo.id}
                        blogInfo = {blogInfo}
                    ></Bloginfo>)
                }
            </div>
            <div className='bookmarked-cart'>
                <h2>bookmarked</h2>
            </div>
        </div>
    );
};

export default Blogs;