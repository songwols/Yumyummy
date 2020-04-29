import React, { Component } from 'react';
import { GoogleLogin } from 'react-google-login';
import styled from 'styled-components';
import axios from 'axios';
import dotenv from "dotenv";

dotenv.config();

class GLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }

    responseGoogle = (res) => {
        this.setState({
            id: res.googleId,
            name: res.profileObj.name,
            provider: 'google',
        });
        console.log('login success')
    }

    responseFail = (err) => {
        console.error(err);
        console.log('FAILED')
    }

    render() {
        return (
            <Container>
                <Google
                    clientId={process.env.REACT_APP_Google_AUTH}
                    buttonText="Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseFail}
                    icon={false}
                />
            </Container>
        );
    }
}

export const Google = styled(GoogleLogin)`
    font-size: 0.6rem !important;
    /* height: 100% !important; */
    border: 0 !important;
    outline: 0 !important;
    box-shadow: none !important;
    color: white !important;
    background-color: #b32d00 !important;
    cursor: pointer;
`

const Container = styled.div`
    line-height: 50px;
    /* width: 100%; */
    /* height: 4rem; */
    background-color: #b32d00;
    /* display: inline-block; */
    /* margin-top: 3rem; */
    cursor: pointer;
    
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
`


export default GLogin;
