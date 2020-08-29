import React from 'react';
import './Footer.css';


const Footer = (props) => {
    console.log ('Here is props inside of footer ', props);
    if (!props) return <h3>Loading...</h3>;

    return (
        <>
            <div className="footer">
                <p>This media is located at {props.source} </p>
            </div>
            <div className="copyright">
                { (props.copyright != "") ? `Copyright ${props.copyright}` : `` }
            </div>
        </>
    )
}








export default Footer;
