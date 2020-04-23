import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import dotenv from "dotenv";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

dotenv.config();

@inject("storeStore")
@observer
class MapContainer extends React.Component {
    state = {
        stores: [
          {
            latitude: 37.50128521296166, 
            longitude: 127.03954246304296
          },
        ],
        stores: [
          {
            store_name: this.props.store_name,
            address: this.props.address,
            menu: this.props.menu,
          },
        ],
      };

    componentWillMount(){
      this.props.storeStore.search(this.state.stores)
      this.props.storeStore.detail(this.props.storeid);
    }

    displayMarkers = () => {
      return this.props.storeStore.location.map((store, index) => {
        return <Marker key={index} id={store} position={{
         lat: store.lat,
         lng: store.long
       }}
       onClick={() => console.log("You clicked me!")} />
      })
    }
  
    render() {
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
                initialCenter={
                  { 
                    lat: 37.50128521296166, 
                    lng: 127.03954246304296
                  }
                }
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
    apiKey: process.env.REACT_APP_GOOGLE_API,
    language: 'KOREAN'
})(MapContainer)