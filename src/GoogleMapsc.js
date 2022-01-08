// Video : GoogleMaps and Google Places in react
import React, { useState } from 'react'
import {GoogleMap,useLoadScript,Marker,InfoWindow} from '@react-google-maps/api'
import {formatRelative} from 'date-fns'
import MapStyles from './MapStyles';

const libraries=["places"];
const mapContainerStyle={
    width:"100vw",
    height:"100vh",
    // margin:"auto"
}
const h1style={
    position:"absolute", 
    top:"1rem", 
    left:"1rem",
    color:"#281414",
    zIndex:"10",
    margin:"0",
    padding:"0"
   
}
const center={
    lat:11.258753,
    lng:75.780411
}
const options={
    styles: MapStyles,
    disableDefaultUI:true,
    zoomControl:true,
}
function GoogleMapsc() {
    const {isLoaded,loadError}=useLoadScript({
        googleMapsApiKey:'AIzaSyDZhN8wjR6gSzjvBP6BoKvj-rqqDIb7eZo',
        libraries:libraries
    })
const[markers,setMarkers]=useState([])

if(loadError) return "error loading maps";
if((!isLoaded)) return "Loading Maps";

    return (
        <div>
            
            <h1 style={h1style}> 📍  </h1>
            <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
            options={options}
            onClick={(event)=>{
                setMarkers((current)=>[...current,{
                    lat:event.latLng.lat(),
                    lng:event.latLng.lng(),
                    time:new Date()
                }])
            }}>
                {markers.map((marker)=>(
                        <Marker 
                        key={marker.time.toISOString()}
                        position={
                            {
                                lat:marker.lat(),
                                lng:marker.lng(),
                            }
                        }/>
                    ))
                }
            </GoogleMap>
        </div>
    )
}

export default GoogleMapsc
