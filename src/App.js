import React from 'react'
import './App.css';
import Dropdown from './Dropdown'
import SimpleImageSlider from "react-simple-image-slider";

class App extends React.Component{
  constructor() {
    super();
    this.state = {
        images : [{ url: "imgs/heroBackground1.jpg" },{ url: "imgs/heroBackground1.jpg" },{ url: "imgs/heroBackground1.jpg" }]
    };
}
render(){
  return (
    <div className="App">
      <div className="screen">
        <Dropdown></Dropdown>

      </div>

    </div>
  ); 
}
}

export default App;
