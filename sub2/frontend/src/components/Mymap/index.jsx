import React from "react";
import styled from "styled-components";
import dotenv from "dotenv";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Geocode from "react-geocode";

dotenv.config();

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API);
Geocode.enableDebug();
Geocode.setLanguage("KOREAN");

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
              this.setState({
                addr : address
              });
            },
            error => {
              console.log(error);
            }
          );
      };
 
    render() {
        console.log(this.state.addr)
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
                    <Marker position={{
                        lat,
                        lng
                        }}
                        icon={{
                            url: "https://github.com/chokyungeun/TRAVEL_KE/blob/master/flag%20(3).png?raw=true"
                          }}
                    />
                    
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
