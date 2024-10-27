import styled from "styled-components";
import Bannerhome from '../../assets/banner-home.svg'
import Background from '../../assets/background.svg'


export const Banner = styled.div `
    background: url('${Bannerhome}');
    background-size: cover;
    background-position: center;
    height: 480px;

    h1{
        font-family: 'Road Rage', sans-serif;
        color: #f4f4f4;
        position: absolute;
        right: 20%;
        top: 10%;
    }
`
export const Container = styled.section `
    background: linear-gradient(
        rgba(255,255,255,0.4),
        rgba(255,225,200,0.3)
    ),
    url('${Background}');

`