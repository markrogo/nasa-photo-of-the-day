import React from "react";
import "./Photo.css";

const Photo = (props) => {
    console.log (props);
    if (!props) return <h3>Loading...</h3>;

    const isImage = (props.type === 'image');
    console.log (isImage);
return (
    <>
        <div className='photo-of-day'>
           {
            isImage ? <img src={props.imgUrl} alt={props.headline}></img> :
           <iframe width="600" height="400"
           src={ props.imgUrl }>
           </iframe>
            }  

        </div>
        <div className='description'>
            <p>{props.text}</p>
        </div> 
    </>
);
};

export default Photo;
