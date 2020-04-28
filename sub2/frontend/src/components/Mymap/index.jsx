import React from "react";
import styled from "styled-components";
import dotenv from "dotenv";
import { Map, GoogleApiWrapper, Marker, Circle } from 'google-maps-react';
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
        addr : "",
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
              addr : sarr
            });
            console.log(this.state.addr)
            //장소만 검색할 수 있는 거
            //this.props.storeStore.search(sarr)
          },
          error => {
            console.log(error);
          }
        );
      };

      displayMarkers = (e) => {
        return <Marker position={{
            lat : this.state.lat,
            lng : this.state.lng
            }}
            icon={{
                url: "https://github.com/chokyungeun/TRAVEL_KE/blob/master/flag%20(3).png?raw=true"
              }}
        />
      }
 
    render() {
        const { lat, lng } = this.state;

        const containerStyle = {
            position: 'absolute',  
            width: '50%',
            height: '50%'
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
                    {this.displayMarkers()}
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
