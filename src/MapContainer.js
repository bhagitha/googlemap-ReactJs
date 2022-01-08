import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React, { Component } from 'react';

class MapContainer extends Component {
constructor(props){
  super(props)
  // this.state={
  //   pos_latitude:"",
  //   pos_longitude:""
  // }
  // this.state = {
  //   stores: [{lat:11.258753, lng: 75.780411},
  //           {latitude: 11.359423, longitude: 75.021071},
  //           {latitude: 11.359677, longitude: 75.988426},
  //           {latitude: 11.630708, longitude: 75.143432},
  //           {latitude: 11.308448, longitude: 75.214012},
  //           {latitude: 11.552469, longitude: 75.042540}]
  // }
}
fetchPlaces(mapProps, map) {
  const {google} = mapProps;
  const service = new google.maps.places.PlacesService(map);
  console.log(service)
  // ...
}
// displayMarkers = () => {
//   return this.state.stores.map((store, index) => {
//     return <Marker key={index} id={index}
//      position={{
//      lat: store.latitude,
//      lng: store.longitude
//    }}
//    onClick={() => console.log("You clicked me!")} />
//   })
// }
onMarkerClick=()=>{
  alert("U clicked me")
}
  render() {
    const containerStyle={
      position:'relative',
      width:'100%',
      height:'100%'
    }
   
    return (
      <>
      <h1>Intergrate Google maps</h1>
      <div style={{width:"50%",height:"600px", border:"1px solid red", margin:"auto"}}>
      <Map 
      google={this.props.google} 
      zoom={13}
      style={{width:"100%",height:'600px'}}
      containerStyle={containerStyle}
      initialCenter={
        {
          lat:11.258753,
          lng:75.780411
        }
      }
      >
       {/* {this.displayMarkers()} */}

        <Marker 
        position={
          {
            lat:11.258753,
            lng:75.780411
          }
        }
        onClick={this.onMarkerClick}
        name={'Current location'} />

        {/* <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow> */}
      </Map>
      </div>
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAl_xjg8mcw_Kn1ByOGpjvETDB-40-Xnxo'
})(MapContainer)