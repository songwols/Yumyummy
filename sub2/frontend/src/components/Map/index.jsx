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
        cenLat: localStorage.getItem("latitude"), 
        cenLong: localStorage.getItem("longitude"),
        stores: [
          {
            store_name: this.props.store_name,
            address: this.props.address,
            menu: this.props.menu,
          },
        ],
      };

    componentWillMount(){
      this.props.storeStore.search(this.state.stores);
      if(this.props.storeid !== undefined){
        this.props.storeStore.detail(this.props.storeid);
      }
      
      this.setState({
        cenLat : localStorage.getItem("latitude"),
        cenLong: localStorage.getItem("longitude")
      })
    }

    componentDidMount(){
    }

    displayMarkers = (e) => {
      if(this.props.storeid !== undefined){
        return <Marker position={{
          lat: e.latitude,
          lng: e.longitude
        }}
        onClick={() => console.log()} />
      }
      else{
        return this.props.storeStore.location.map((store, index) => {
          return <Marker key={index} id={store} position={{
           lat: store.lat,
           lng: store.long
         }}
         onClick={() => console.log("You clicked me!")} />
        })
      }
    }
  
    render() {
        const detailpost = this.props.storeStore.detailPost;
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
                    lat: localStorage.getItem("latitude"), 
                    lng: localStorage.getItem("longitude")
                  }
                }
            >
                {this.displayMarkers(detailpost)}
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