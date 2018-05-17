import React from 'react';


const useroutput = (props)=>{
    return (
        <div>
        <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>
        <p>eact components implement a render() method that takes input data and returns what to display. This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.</p>
        <p>{props.name}</p>
        </div>
    )
}
export default useroutput;