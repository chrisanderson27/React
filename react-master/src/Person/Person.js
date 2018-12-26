import React from 'react'

const Person = (props) => {
    // return <p>I'm a person and I am {Math.floor(Math.random() * 30)} years old!</p>
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p onClick={props.click}>{props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div>
        )
    };
export default Person