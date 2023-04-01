import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total =[];
    let totalTime = 0;
    for(const blog of cart){
        total = total + blog.title;
        totalTime = totalTime + blog.time;
        console.log(totalTime);
    }
    
    return (
        <div>
            <h2>Spent time on read:{totalTime}</h2>
             <h2>bookmarked Blogs:{cart.length}</h2>
             <h3>{total}</h3>
        </div>
    );
};

export default Cart;