import React, { Component } from 'react';
import KakaoLogin from 'react-kakao-login';
import styled from 'styled-components';
import dotenv from "dotenv";

dotenv.config();

class KLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            provider: '',
        }
    }
    responseKakao = (res) => {
        this.setState({
            id: res.profile.id,
            name: res.profile.properties.nickname,
            provider: 'kakao',
        })
        console.log('succeess');
    }

    responseFail = (err) => {
        console.error(err);
    }

    render() {
        return (
            <Container>
                <Kakao
                    jsKey={process.env.REACT_APP_KAKAO_AUTH}
                    buttonText="Kakao"
                    onSuccess={this.responseKakao}
                    onFailure={this.responseFail}
                    getProfile="true"
                />
            </Container>
        );
    }
}

export const Kakao = styled(KakaoLogin)`
    font-size: 1rem;
    /* height: 100% !important; */
    border: 0 !important;
    outline: 0 !important;
    box-shadow: none !important;
    /* color: black !important; */
    background-color: #00ff0000 !important;
    cursor: pointer;
`

const Container = styled.div`
    line-height: 50px;
    /* width: 100%; */
    /* height: 4rem; */
    background-color: #ffff00;
    /* display: inline-block; */
    /* margin-top: 3rem; */
    cursor: pointer;
    
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
`

export default KLogin;
