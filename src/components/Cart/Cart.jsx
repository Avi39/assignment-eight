import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    let total =[];
    
    for(const blog of cart){
        total = total + blog.title;
    }
    
    return (
        <div>
            
             <h2>bookmarked Blogs:{cart.length}</h2>
             <h3>{total}</h3>
        </div>
    );
};

export default Cart;