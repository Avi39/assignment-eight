import React from 'react';
import './Minute.css'
const Minute = ({minute}) => {
    console.log(minute)
    let totalTime = 0;
    for(const time of minute){
        totalTime = totalTime + time.time;
    }
    return (
        <div className='minute'>
            <h2 style={{color:'#6047EC'}}>Spent time on read: {totalTime} min</h2>
        </div>
    );
};

export default Minute;