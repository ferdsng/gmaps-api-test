import React from "react";
import GoogleMapReact from 'google-map-react';


const PinComponent = ({ image }) => <img src={ image }></img>;



const Map = ({ coordinates, setcoordinates }) => {
    return <GoogleMapReact
    bootstrapURLKeys={{key : "AIzaSyBix_ttHqduSYruLs-78Mic88s92VFO8xM" }}
    defaultCenter={coordinates}
    center={coordinates}
    defaultZoom={16}
    options={""}
    >

    <PinComponent lat={20.6291142} lng={-87.0744362} image={"../pin-map.png"} />

    </GoogleMapReact>
};



export default Map;