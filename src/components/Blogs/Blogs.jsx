import React, { useEffect, useState } from 'react';
import Bloginfo from '../Blog-information/Bloginfo';
import Cart from '../Cart/Cart';
import Minute from '../Minute/Minute';
import './Blogs.css';
const Blogs = () => {
    const [blogInfos,setBlogInfos] = useState([]);
    const [cart,setCart] = useState([]);
    const[minute,setMinute] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res =>res.json())
        .then(data => setBlogInfos(data))
    },[])

    const handleAddToCart = (blog) =>{
        const newCart =[...cart,blog];
        setCart(newCart);
    }
    const handleAddToMinute = (min) =>{
        const newMinute =[...minute,min];
        setMinute(newMinute);
    }

    return (
        <div className='blog-container'>
            <div className='blog-cart'>
                {
                    blogInfos.map(blogInfo => <Bloginfo 
                        key={blogInfo.id}
                        blogInfo = {blogInfo}
                        handleAddToCart={handleAddToCart}
                        handleAddToMinute={handleAddToMinute}
                    ></Bloginfo>)
                }
            </div>
            <div className='bookmarked-cart'>
               <Cart cart ={cart}></Cart>
               <Minute minute={minute}></Minute>
            </div>
        </div>
    );
};

export default Blogs;