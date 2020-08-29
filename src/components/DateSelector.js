import React from 'react';
import './DateSelector.css';

const DateSelector = ({setDate}) => {
    return (
        <div className ="date-picker">
                <label htmlFor="date">Pick a new date to get that date's photo: </label>
                <input name="date" type="date" onChange={(event) => {setDate(event.target.value)}} />
        </div>
    );
};





export default DateSelector ;

