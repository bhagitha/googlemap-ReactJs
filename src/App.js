import React, { Component } from "react";
import { render } from "react-dom";
import Demo1 from "./demo";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat:"", 
      lng:""
    };
    
  }
 
 
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log("position is :", position);
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        // pos(position.coords.latitude,position.coords.longitude)
   this.setState({lat:position.coords.latitude,
    lng:position.coords.longitude})
    console.log(`lat: ${this.state.lat} ,lang: ${this.state.lang}`)
      });
    }
  }

//   pos=(lati,longi)=>{this.setState({
//     lat:lati,
//     lng:longi
//   })
// }
  render() {
    
    return (
      <div>
        <h4>Using geolocation JavaScript API in React</h4>
        {/* <Demo1/> */}
        
<h5>
 {this.state.lat}
</h5>
<h5>
 {this.state.lng}
</h5>

      </div>
    );
  }
}

render(<App />, document.getElementById("root"));