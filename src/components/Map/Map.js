import React from 'react'
import { GoogleMap, LoadScript, Marker, MarkerClusterer } from '@react-google-maps/api';

const containerStyle = {
  height: '700px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function Map(props) {

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCZ1KVAVTR0qxeRbeM6ihf-jnwgrptY0uQ"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={2}
      >
        { /*  markers, info windows */ }
        { props.covid.map((country, index) => {
            console.log( typeof country.countryInfo.lat)
            return <Marker
            opacity={0.5}
            label={country.country}
            animation='DROP'
            shape={'MarkerShapeCircle'}
            position= {{lat: (country.countryInfo.lat), lng: country.countryInfo.long}}/> 
        })} 
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)