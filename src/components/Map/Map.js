
import React, {useState} from 'react'
import { GoogleMap, LoadScript, Marker, MarkerClusterer, InfoWindow, Polygon, Circle } from '@react-google-maps/api';
import './style.css'

const containerStyle = {
  height: '700px'
};

let defaultCenter = {
  lat: 37.09, lng: -95.712
};

function Map(props) {

    const newCenter = {
        lat: props.center.lat,
        lng: props.center.lng
    }
    const {lat, lng} = props.center 

    const newData  = {
      continent: props.continent, 
      stats: props.stats, 
      hover: props.hover
    }

    console.log("continent")
    console.log(props.continent)
    
    //zoom map to new center passed from SearchInput container 
    if (typeof newCenter.lat  === 'number' &&  typeof newCenter.lng  === 'number'  ){
        defaultCenter = newCenter
    }
    
    const [markerState, setValue] = useState({
      getIndex: '',
      clicked: null
    })

    const[status, setStatus] = useState({
      continent: props.continent,
      stats: props.stats,
      hover: null

    })
     
     function handleClick(index){
      setValue({
        getIndex: index,
        clicked: !null
      })
     }

    //Circle options 
    // setting required for Circles 
    const onLoad = circle => {
      console.log('Circle onLoad circle: ', circle)
    }
    
    const onUnmount = circle => {
      console.log('Circle onUnmount circle: ', circle)
    }

    const ConinentCoord = [
     { lat: 54.5260, lng: -105.2551}, //"North America"
     { lat: 34.0479, lng: 100.6197}, //"Asia"
     { lat: 8.7832, lng: 55.4915}, //"South America"
     { lat: 54.5260, lng: 15.2551}, //"Europe"
     { lat: 8.7832, lng: 34.5085}, //"Africa"
     { lat: -25.2744, lng: 133.7751}, //"Australia/Oceania",
    ]
    
  return (
    <LoadScript
      googleMapsApiKey= {process.env.REACT_APP_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={defaultCenter}
        zoom={2.6}
        mapTypeId={"terrain"}
      > 
            <MarkerClusterer
            // options={options}
            averageCenter
            minimumClusterSize={4}
            maxZoom={15}
            averageCenter={true}
            // clusterClass={"cluster"}
            styles={[{
              url: 'https://googlemaps.github.io/js-marker-clusterer/images/m',
              height: 80,		
              width: 80,	
              color: '#DEAC23',
              fontFamily:"Arial",	
              padding: "10px 20px 20px",
              textColor:"#DEAC23",
              fontFamily:"comic sans ms",
              textSize:15,
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
 
        { props.continent.map((country, index) => (
          <Circle
          key={index}
          onLoad={onLoad}
          onUnmount={onUnmount}
          center={{lat: (country.continentInfo.lat +5), lng: country.continentInfo.long + 10}} 
          options ={{
          strokeColor: '#FF0000',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#FF0000',
          fillOpacity: 0.35,
          clickable: false,
          draggable: false,
          editable: false,
           visible: true,
          radius: country.activePerOneMillion *1000,
          zIndex: 1
          }}   
    />
    ))}
    { props.continent.map((country, index) => (
          <Circle
          key={index}
          onLoad={onLoad}
          onUnmount={onUnmount}
          center={{lat: (country.continentInfo.lat), lng: country.continentInfo.long}} 
          options ={ {
          strokeColor: 'blue',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: 'blue',
          fillOpacity: 0.25,
          clickable: false,
          draggable: false,
          editable: false,
           visible: true,
          radius: country.deathsPerOneMillion *1000,
          zIndex: 1
          }}   
    />
    ))}

    { props.continent.map((country, index) => (
          <Circle
          key={index}
          onLoad={onLoad}
          onUnmount={onUnmount}
          center={{lat: (country.continentInfo.lat), lng: country.continentInfo.long }} 
          options ={ {
          strokeColor: 'green',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: 'green',
          fillOpacity: 0.25,
          clickable: false,
          draggable: false,
          editable: false,
           visible: true,
          radius: country.recoveredPerOneMillion * 100,
          zIndex: 1
          }}   
    />
    ))}
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)