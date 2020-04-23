import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import dotenv from "dotenv";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

dotenv.config();

@inject("storeStore")
@observer
class MapContainer extends React.Component {
    constructor(props) {
      super();  
      this.state = {
        stores: [
          {
            latitude: localStorage.getItem("latitude"), longitude: localStorage.getItem("longitude")
          },
        ],
        info : [
          {
          store_name: localStorage.getItem("S_store_name", this.store_name),
          address : localStorage.getItem("S_address", this.store_name),
          menu: localStorage.getItem("S_menu", this.store_name),
          score: localStorage.getItem("S_score", this.store_name),
          review: localStorage.getItem("S_review", this.store_name),
          }
        ]
      };
      props.storeStore.search(this.state.info);
      console.log("cons")     
      console.log(props.storeStore)
      console.log(props.storeStore.returnItems) 
    }

    componentDidMount(){
      
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
        console.log("Map")
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
    apiKey: process.env.REACT_APP_GOOGLE_API,
    language: 'KOREAN'
})(MapContainer)