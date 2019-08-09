import React, { Component } from "react";
import Header from "./components/Header";
import Boom from "./components/Boom";
import Video from "../src/media/video/Stars.mp4";
import "./App.css";


class App extends Component {
  render() {
    return (
      
      <div className="App">
        
        <Header />
        <Boom />
        {/* <video className= "autoplay muted loop" id ="myVideo">
          <source src={Video} type="video/mp4"></source>
        </video> */}
        
        
       
      </div>
      
    );
  };
}

export default App;
