import React from 'react';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Cart = ({cart}) => {
    let total =[];
    
    for(const blog of cart){
        total = total + blog.title;
    }
    
    return (
        <div className='cart'>
            
             <h2>bookmarked Blogs:{cart.length}</h2>
             <h3>{total}</h3>
        </div>
    );
};

export default Cart;