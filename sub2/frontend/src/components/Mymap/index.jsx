import React from "react";
import styled from "styled-components";
import dotenv from "dotenv";
import { Map, GoogleApiWrapper, Marker, Circle, InfoWindow } from 'google-maps-react';
import Geocode from "react-geocode";
import { inject, observer } from "mobx-react";

dotenv.config();

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API);
Geocode.enableDebug();
Geocode.setLanguage("KOREAN");

@inject("storeStore")
@observer
class Mymap extends React.Component {
    state = {
        lat: 0,
        lng: 0,
        address : "",
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        c_name : "",
        c_addr : "",
      };

      componentDidMount() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.successGetCurrentPosition);
        } else {
          console.log("Geolocation is not supported by this browser");
        }
      }

      successGetCurrentPosition = position => {
        this.setState({
          ...this.state,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });

        Geocode.fromLatLng(position.coords.latitude, position.coords.longitude).then(
          response => {
            const address = response.results[0].formatted_address;
            const arr = address.split(" ")
            var sarr="";
            for(var i=1;i<arr.length-1;i++){
              sarr = sarr + arr[i] + " ";
            }
            this.setState({
                address: sarr,
            });
            this.props.storeStore.count_stores(this.state)
          },
          error => {
            console.log(error);
          }
        );
      };


      displayMarkers = (e) => {
        if(e.length !== 0){
          return e.map((store, index) => {
            return (<Marker key={index} id={store} position={{
             lat: store.latitude,
             lng: store.longitude
           }}
            onClick={ (props, marker, e) => this.onMarkerClick(props, marker, e, store) }
           />
            )
          })
        }
      }

      onMarkerClick = (props, marker, e, store) =>{
        this.setState({
          selectedPlace: props,
          activeMarker: marker,
          showingInfoWindow: true,
          c_name : store.store_name,
          c_addr : store.address
        });
      }
        
    
      onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
      };
 
    render() {
        const suggest = this.props.storeStore.storeItems;
        const { lat, lng } = this.state;

        const containerStyle = {
            position: 'absolute',  
            width: '70%',
            height: '40%'
        };

        return (
            <Maps>
                <Map
                    google={this.props.google}
                    zoom={14}
                    containerStyle={containerStyle}
                    center={{
                        lat,
                        lng
                    }}
                    initialCenter={{
                        lat,
                        lng
                    }}
                    onClick={this.onMapClicked}
                    >
                    <Circle
                      radius={800}
                      center={{
                        lat,
                        lng
                      }}
                      strokeColor='transparent'
                      strokeOpacity={0}
                      strokeWeight={5}
                      fillColor='#FF0000'
                      fillOpacity={0.2}
                    />
                    <Marker position={{
                        lat : this.state.lat,
                        lng : this.state.lng
                        }}
                        icon={{
                            url: "https://github.com/chokyungeun/TRAVEL_KE/blob/master/flag%20(3).png?raw=true"
                          }}
                    />
                    {this.displayMarkers(suggest)}
                    <InfoWindow
                      marker={this.state.activeMarker}
                      visible={this.state.showingInfoWindow}>
                        <div>
                          <h3>{this.state.c_name}</h3>
                          <h5>{this.state.c_addr}</h5>
                        </div>
                    </InfoWindow>
                </Map>
            </Maps>    
        )
    }
  }

const Maps = styled.div`
    grid-area: Map;
    overflow: hidden;
`

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API,
    language: 'KOREAN',
})(Mymap);
