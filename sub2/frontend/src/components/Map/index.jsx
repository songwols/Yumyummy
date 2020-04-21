/* global google */
import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

@inject("storeStore")
@observer
class MapContainer extends React.Component {
    constructor() {
      super();
  
      this.state = {
        stores: [{lat: 47.49855629475769, lng: -122.14184416996333},
                {latitude: 47.359423, longitude: -122.021071},
                {latitude: 47.2052192687988, longitude: -121.988426208496},
                {latitude: 47.6307081, longitude: -122.1434325},
                {latitude: 47.3084488, longitude: -122.2140121},
                {latitude: 47.5524695, longitude: -122.0425407}]
      }
    }

    componentDidMount(){
        console.log(this.props.storeStore.returnItems)
    }
  
    displayMarkers = () => {
      return this.state.stores.map((store, index) => {
        return <Marker key={index} id={index} position={{
         lat: store.latitude,
         lng: store.longitude
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
    render() {
        const returns = this.props.storeStore.returnItems;

        const containerStyle = {
            position: 'absolute',  
            width: '30%',
            height: '50%'
        };

      return (
          <Maps>
            <Map
                google={this.props.google}
                zoom={10}
                containerStyle={containerStyle}
                initialCenter={{ lat: 47.444, lng: -122.176}}
            >
                {this.displayMarkers()}
            </Map>
          </Maps>
      );
    }
  }

const Maps = styled.div`
    grid-area: Map;
    overflow: hidden;
`

export default GoogleApiWrapper({
    apiKey: 'AIzaSyDW-g52KqdJkJ2SV5EsNRBk8iNFIw4ejPY',
    language: 'KOREAN'
  })(MapContainer)