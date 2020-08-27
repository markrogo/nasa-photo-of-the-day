import React, { useState, useEffect }  from "react";
import axios from 'axios';
import Header from "./components/Header.js";
import Photo from "./components/Photo.js";
import Footer from "./components/Footer.js";
import DateSelector from './components/DateSelector.js'
import "./App.css";

// React date picker stuff, removed for now
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [apod, setApod] = useState({});
  
  // take this out
  // const [startDate, setStartDate] = useState(new Date());
  //

  let d = new Date();
  d.setDate(new Date().getDate() -1);

  const [date, setDate] = useState(d.toISOString().split('T')[0]);


  console.log (date);
  

 
  

  useEffect (() => {
    axios
      .get (`https://api.nasa.gov/planetary/apod?api_key=Vt4TbPCdgZCtspljyw7mBqcfAzbD9lahFePuGdbV`)
      // .get (`https://api.nasa.gov/planetary/apod?api_key=Vt4TbPCdgZCtspljyw7mBqcfAzbD9lahFePuGdbV&date=2020-08-18`)
      
      .then ((res) => {
        console.log ('Results: ', res);
        setApod (res.data);
      })
      .catch ((err) => {
        console.log ('Error occured: ', err);
      })

  }, []); 

  useEffect (() => {
    // used to handle obnoxious info returned from react date picker, probably a cleaner way
    // but html date picker works fine and returns a simple, usable result

    // const stringStuff = JSON.stringify({date});
    // const stringArray = (stringStuff.split(":"));
    // console.log (stringStuff);
    // console.log (stringArray[1].substr(1,10));
    // let dateChange = stringArray[1].substr(1,10);
    // console.log (dateChange);
    axios
      .get (`https://api.nasa.gov/planetary/apod?api_key=Vt4TbPCdgZCtspljyw7mBqcfAzbD9lahFePuGdbV&date=${date}`)
      
      .then ((res) => {
        console.log ('Results: ', res);
        setApod (res.data);
        
      })
      .catch ((err) => {
        console.log ('Error occured: ', err);
      })

  }, [date]); 
 
  console.log (apod)
  console.log (apod.date, apod.title);

  return (
    <div className="App">
      <Header
        // data = {apod}
        title = {apod.title}
        date = {apod.date} 
        />
      <DateSelector 
        setDate = {setDate}
        date = {date} />
      <Photo 
        type = {apod.media_type}
        headline = {apod.title}
        imgUrl = {apod.url} 
        text = {apod.explanation}/>
      <Footer 
        source = {apod.url}
        copyright = {apod.copyright}/>
      
      
      {/* below was used with React DatePicker, since removed
        <DatePicker 
        selected={date} 
        dateFormat = "yyyy-MM-dd"
        onChange={date => setDate(date)} /> */}
    
    
    </div>
  );
}

export default App;
