import React, { useState } from 'react'

const Counter = ({initialValue = 0, changeValue = 1}) => {

    const [counter, setCounter] = useState(initialValue);
    

    const decrement = () => {
        setCounter(counter - changeValue);
    }

    const reset = () => {
        setCounter(0);
    }

    const increment = () => {
        setCounter(counter + changeValue);
    }


    return (
        <>
        <div className="app">
            <h1>{counter}</h1>
            <div className="buttons">
                <button onClick={decrement}>-{changeValue}</button>
                <button onClick={reset}>Reset</button>
                <button onClick={increment}>+{changeValue}</button>
                
            </div>
        </div>
        
        </>
    )
}


export default Counter