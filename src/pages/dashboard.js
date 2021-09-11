import React, {useState, useEffect, Component} from 'react';
import {Card, Col, Row} from 'antd';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import CurrentLocation from '../components/mapModules';

// const mapStyles = {
//   width: '100%',
//   height: '100%'
// };

// import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"

// function Map(){
//     return (
//         <GoogleMap>
//             defaultZoom={10}
//             defaultCenter={{lat: 45.421532, lng: -75.697189}}
//         </GoogleMap>
        
//     );
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map));

// const Index = () => {
    

//     return (
        
//         <Card title="Occupied" bordered={true}
//                           headStyle={{backgroundColor: '#D7DBEC', borderRadius: 10, fontSize: 26}}
//                           style={{borderRadius: 20}}>
//                               {/* <WrappedMap>
//                                   googleMapURL = {}
//                               </WrappedMap> */}

//              </Card>
//     //     <Map
//     //     google={this.props.google}
//     //     zoom={14}
//     //     style={mapStyles}
//     //     initialCenter={
//     //       {
//     //         lat: -1.2884,
//     //         lng: 36.8233
//     //       }
//     //     }
//     //   />
//     )

// }


// export default Index;
export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };

      onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
  
        onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
            showingInfoWindow: false,
            activeMarker: null
            });
        }
        };

    render() {
      return (
          <div style={{paddingTop:'1%'}}>
          <Card title="Looking for nearby activities..." headStyle={{backgroundColor: '#D7DBEC', borderRadius: 10, fontSize: 26}}
                          style={{borderRadius: 20, height: 1000}}>
        <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
        
      >
          <Marker
          onClick={this.onMarkerClick}
          name={'Current Location'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>  
        </CurrentLocation>
        </Card>
        </div>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDm782MF9moqnl8XOTmOaao8ahzIVNGkhs'
  })(MapContainer);