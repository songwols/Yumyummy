import React from "react";
import styled from "styled-components";
import dotenv from "dotenv";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

dotenv.config();

class Mymap extends React.Component {
    state = {
        lat: 0,
        lng: 0,
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
          loading: false
        });
      };
 
    render() {
        const { lat, lng } = this.state;

        const containerStyle = {
            position: 'absolute',  
            width: '30%',
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
