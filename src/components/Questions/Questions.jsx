import React from 'react';
import './Questions.css'
const Questions = () => {
    return (
        <div className='question'>
            <h2>1.what is difference in props and state?</h2>
            <p>Ans:State refers to the internal data of a component that can be changed by the component itself. 

            on the other hand, Props are passed to a component from its parent component, and they cannot be changed by the component itself. Props are read-only and can be used to pass data or functions down to child components.</p>
            <h2>2.what is the working process of useState?</h2>
            <p>Ans:useState is React Hook that allows us to add state to a functional component. It returns an array with two values.One is the current state and second is a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called.</p>
            <h2>3.how many works can do useEffect without data load?</h2>
            <p>Ans: setting up a subscription, and manually changing the DOM in React components are all examples of useEffect or side effects. Whether or not we are used to calling these operations “side effects”or just “effects”.</p>
            <h2>4.How does react work?</h2>
            <p>Ans: ReactJS is one of the most popular JavaScript libraries for mobile and web application development. ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept many inputs called properties or props. </p>

        </div>
    );
};

export default Questions;