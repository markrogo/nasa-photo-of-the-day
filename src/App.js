import React, { useState, useEffect }  from "react";
import axios from 'axios';
import Header from "./components/Header.js";
import Photo from "./components/Photo.js";
import Footer from "./components/Footer.js";
import "./App.css";

function App() {
  const [apod, setApod] = useState({});

  useEffect (() => {
    axios
      // call has a fixed date for the moment
      // .get (`https://api.nasa.gov/planetary/apod?api_key=Vt4TbPCdgZCtspljyw7mBqcfAzbD9lahFePuGdbV&date=2020-08-23`)
      // call without fixed date
      .get (`https://api.nasa.gov/planetary/apod?api_key=Vt4TbPCdgZCtspljyw7mBqcfAzbD9lahFePuGdbV`)
      
      .then ((res) => {
        console.log ('Results: ', res);
        setApod (res.data);
      })
      .catch ((err) => {
        console.log ('Error occured: ', err);
      })

  }, []); 

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
      <p>
        {/* Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>! */}
      </p>
    </div>
  );
}

export default App;
