import React from 'react';

export default function House(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Address: {props.address}</p>
            <p>City: {props.city}</p>
            <p>State: {props.state}</p>
            <p>Zipcode: {props.zipcode}</p>
            <button>Delete</button>
        </div>
    )
}