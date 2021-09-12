import React, {useState, useEffect, Component} from 'react';
import {Card, Col, Row} from 'antd';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import CurrentLocation from '../components/mapModules';

let markers=[
    {
        id:1,
        latitude: 25.0391667,
        longitude: 121.525,
        shelter:'marker 1',
        name:'Event 1'

    },
    {
        id: 2,
        latitude: 24.0391667,
        longitude: 110.525,
        shelter: 'marker 2',
        name:'Event 2'

    },
    {
        id: 3,
        latitude: 20.0391667,
        longitude: 100.525,
        shelter: 'marker 3',
        name:'Event 3'

    }
]
//fake data for map demonstrate
export class MapContainer extends Component {
    
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };

      onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props.name,
            activeMarker: marker,
            showingInfoWindow: true
          });

          console.log("this is the data")
          console.log(this.state.selectedPlace);
      }

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
          name={'Here I am!!'}
        />
        
        
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h3>{this.state.selectedPlace.name}</h3>
          </div>
        </InfoWindow> 

        {/* for current position display  */}

      
         {markers.map(marker => {
             
            return (
                <Marker
                    // key={marker.id}
                    onClick={this.onMarkerClick}
                    // title={'lalala'}
                    position={{ lat: marker.latitude, lng: marker.longitude }}
                    name={marker.name}
                >
                    {/* <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}>
                        <div>
                            {marker.shelter}
                            <div>
                                lalala
                            </div>
                        </div>
                    </InfoWindow> */}
                    <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h3>{this.state.selectedPlace.name}</h3>
          </div>
        </InfoWindow> 
                </Marker>
            )
        })}
        {/* for mulitiple location display */}
        </CurrentLocation>

        </Card>
        </div>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDm782MF9moqnl8XOTmOaao8ahzIVNGkhs'
  })(MapContainer);