import React, { useEffect, useState } from 'react';
import Bloginfo from '../Blog-information/Bloginfo';
import Cart from '../Cart/Cart';
import './Blogs.css';
const Blogs = () => {
    const [blogInfos,setBlogInfos] = useState([]);
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setBlogInfos(data))
    },[])

    const handleAddToCart = (blog) =>{
        const newCart =[...cart,blog];
        setCart(newCart);
    }

    return (
        <div className='blog-container'>
            <div className='blog-cart'>
                {
                    blogInfos.map(blogInfo => <Bloginfo 
                        key={blogInfo.id}
                        blogInfo = {blogInfo}
                        handleAddToCart={handleAddToCart}
                    ></Bloginfo>)
                }
            </div>
            <div className='bookmarked-cart'>
               <Cart cart ={cart}></Cart>
            </div>
        </div>
    );
};

export default Blogs;