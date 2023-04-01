import React from 'react';
import './Minute.css'
const Minute = ({minute}) => {
    console.log(minute)
    let totalTime = 0;
    for(const time of minute){
        totalTime = totalTime + time.time;
    }
    return (
        <div>
            <h2>Spent time on read:{totalTime}</h2>
        </div>
    );
};

export default Minute;