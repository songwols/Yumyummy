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
        stores: [
          {
            latitude: localStorage.getItem("latitude"), longitude: localStorage.getItem("longitude")
          },
        ]
      }
    }

    componentWillMount(){
      
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
      console.log("4")
        const returns = this.props.storeStore.returnItems;
        console.log("업뎃?")
        console.log(this.props.storeStore)
        console.log(this.props.storeStore.returnItems)

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
                initialCenter={{ lat: localStorage.getItem("latitude"), lng: localStorage.getItem("longitude")}}
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
    apiKey: 'AIzaSyBcWCIZL_Enpspf0XG5l60wXuMi_fo6dTY',
    language: 'KOREAN'
  })(MapContainer)