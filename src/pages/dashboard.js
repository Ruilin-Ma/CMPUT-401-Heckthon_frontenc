import React, {useState, useEffect, Component} from 'react';
import {Card, Col, Row} from 'antd';
import { Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';
import CurrentLocation from '../components/mapModules';


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
        </CurrentLocation>
        </Card>
        </div>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDm782MF9moqnl8XOTmOaao8ahzIVNGkhs'
  })(MapContainer);