
import React, {useState} from 'react'
import { GoogleMap, LoadScript, Marker, MarkerClusterer, InfoWindow } from '@react-google-maps/api';


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
    
    const [markerState, setValue] = useState({
      getIndex: '',
      clicked: null
    });
    
    const options = {
        imagePath:
          'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
      }

     function handleClick(index){
      setValue({
        getIndex: index,
        clicked: !null
      })
     }

  return (
    <LoadScript
      googleMapsApiKey= {process.env.REACT_APP_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={3}
      > 
            <MarkerClusterer
            options={options}>
          {(clusterer) => props.covid.map((country, index) => (
       
              <Marker key={index} 
              position={{lat: (country.countryInfo.lat), lng: country.countryInfo.long}} 
              icon= {`http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=${country.active}|FF0000|000000`}
              onClick= {()=>{ handleClick(index)}}
              clusterer={clusterer}
              >
             { ((markerState.getIndex === index ) &&  ( markerState.clicked &&
     
            <InfoWindow
                key={index} 
                visible={true}
                position={{lat: (country.countryInfo.lat), lng: country.countryInfo.long}} >
                <div style={{width: 100, height: 100}}> <h2>{country.country}</h2>
                <p> Recovered: {country.recovered}</p>
                <p> Tests: {country.tests}</p>
                <p> Active: {country.active}</p>
                </div>
            </InfoWindow>))}
               </Marker>
            ))
          }
        </MarkerClusterer>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)