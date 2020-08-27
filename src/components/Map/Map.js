
import React, {useState} from 'react'
import { GoogleMap, LoadScript, Marker, MarkerClusterer, InfoWindow } from '@react-google-maps/api';
import './style.css'

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
    
    // const options = {
    //     imagePath:
    //       'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m', 
    //     }

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
            
            // options={options}
            averageCenter

            minimumClusterSize={4}
            maxZoom={15}
            averageCenter={true}
            // clusterClass={"cluster"}
            styles={[{
              // url: '/Users/olya/Documents/sei-629/projects/Covid-tracker/covid-tracker-client/public/download.png',
              url: 'https://googlemaps.github.io/js-marker-clusterer/images/m',
              height: 80,		
              width: 80,	
              color: '#DEAC23',
              fontFamily:"Arial",	
              padding: "10px 20px 20px",
              textColor:"#DEAC23",
              fontFamily:"comic sans ms",
              textSize:15,
              fillOpacity: 0.5,
              background: "#DEAC23",
              borderradius: '50%', 
              transform:"rotate(45)",
              animateAddingMarkers: true,
                      
            }]}
            >
          {(clusterer) => props.covid.map((country, index) => (
       
              <Marker 
              key={index} 
              position={{lat: (country.countryInfo.lat), lng: country.countryInfo.long}} 
              icon= {`http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=|DEAC23|FFF`}
              // icon= {`/Users/olya/Documents/sei-629/projects/Covid-tracker/covid-tracker-client/public/download.png`}
              onClick= {()=>{ handleClick(index)}}
              clusterer={clusterer}
              >
             { ((markerState.getIndex === index ) &&  ( markerState.clicked &&
     
            <InfoWindow
                key={index} 
                visible={true}
                 >
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