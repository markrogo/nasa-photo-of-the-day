import React from 'react';
import './Header.css';


const Header = (props) => {
    // console.log ('Here is props inside of header ', props);
    if (!props) return <h3>Loading...</h3>;

    return (
        <div className="header">
            <h2>{props.title}</h2>
            <p>Published on, {props.date} </p>
        </div>

    )
}








export default Header;
