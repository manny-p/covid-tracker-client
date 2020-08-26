import React, {useState} from 'react'
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';
// const { MarkerClusterer } = require("react-google-maps/lib/components/addons/MarkerClusterer");

const containerStyle = {
  height: '700px'
};

let defaultCenter = {
  lat: -3.745,
  lng: -38.523
};

function Map(props) {

    const newCenter = {
        lat: props.center.lat,
        lng: props.center.lng
    }

    const {lat, lng} = props.center 


    if (typeof newCenter.lat  === 'number' &&  typeof newCenter.lng  === 'number'  ){
        defaultCenter = newCenter

    }
    console.log(defaultCenter)

    // const [center , setCenter] = useState( defaultCenter )

    const options = {
        imagePath:
          'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
      }
   
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCZ1KVAVTR0qxeRbeM6ihf-jnwgrptY0uQ"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={1}
      >
            <MarkerClusterer
            options={options}>
          {(clusterer) => props.covid.map((country, index) => (
              <Marker key={index} 
              position={{lat: (country.countryInfo.lat), lng: country.countryInfo.long}} 
              icon= {`http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=${country.active}|FF0000|000000`}
    
              clusterer={clusterer} />
            ))
          }
        </MarkerClusterer>
      
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)