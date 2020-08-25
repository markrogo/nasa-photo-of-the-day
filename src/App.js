import React, { useState, useEffect }  from "react";
import axios from 'axios';
import Header from "./components/Header.js";
import Photo from "./components/Photo.js";
import Footer from "./components/Footer.js";
import "./App.css";

// date picker stuff
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [apod, setApod] = useState({});

  
  const [startDate, setStartDate] = useState(new Date());
  console.log (startDate);
  

 
  

  useEffect (() => {
    axios
      .get (`https://api.nasa.gov/planetary/apod?api_key=Vt4TbPCdgZCtspljyw7mBqcfAzbD9lahFePuGdbV`)
      
      .then ((res) => {
        console.log ('Results: ', res);
        setApod (res.data);
      })
      .catch ((err) => {
        console.log ('Error occured: ', err);
      })

  }, []); 

  useEffect (() => {
    const stringStuff = JSON.stringify({startDate});
  const stringArray = (stringStuff.split(":"));
  console.log (stringStuff);
  console.log (stringArray[1].substr(1,10));
  let dateChange = stringArray[1].substr(1,10);
  console.log (dateChange);
    axios
      .get (`https://api.nasa.gov/planetary/apod?api_key=Vt4TbPCdgZCtspljyw7mBqcfAzbD9lahFePuGdbV&date=${dateChange}`)
      
      .then ((res) => {
        console.log ('Results: ', res);
        setApod (res.data);
      })
      .catch ((err) => {
        console.log ('Error occured: ', err);
      })

  }, [startDate]); 
 
  

  return (
    <div className="App">
      <Header
        headline = {apod.title}
        date = {apod.date} />
      <Photo 
        type = {apod.media_type}
        headline = {apod.title}
        imgUrl = {apod.url} 
        text = {apod.explanation}/>
      <Footer 
        source = {apod.url}/>
      <DatePicker /* why did this disappear after one pick?? */
        selected={startDate} 
        dateFormat = "yyyy-MM-dd"
        onChange={date => setStartDate(date)} />
    
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>! */}
      </p>
    </div>
  );
}

export default App;
