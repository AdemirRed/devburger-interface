import styled from "styled-components";
import BannerHamburger from '../../assets/BannerHamburger.svg'
import Background from '../../assets/background.svg'
import { Link } from "react-router-dom";


export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f0f0f0;

    background: linear-gradient(
        rgba(255,255,255,0.4),
        rgba(255,225,200,0.3)
    ),
    url('${Background}');

    .voltar {
    display: block;
    margin: 0 auto; /* Centraliza o botão */
    background-color: transparent;
    border: none;
    color: #5C2669;
    font-size: 20px;
    cursor: pointer;
    padding: 10px 20px;
}


`


export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    
    background: url('${BannerHamburger}') no-repeat;
    background-color: #1f1f1f;
    background-position: center;
    background-size: cover;

    h1{
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        line-height: 65px;
        color: #fff;
        position: absolute;


        right: 20%;
        top: 30%;

        span {
            display: block;
            color: #fff;
            font-size: 20px;
            font-weight: 30px;
        }
    }
`


export const CategoryMenu = styled.div`

    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`




export const CategoryButton = styled(Link)`

    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${props => (props.$isActivecategory ? '#9758A6' : '#696969')};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
border: none;

    border-bottom: ${props => props.$isActivecategory && '3px solid #9758A6'} ;
`




export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    justify-content: center;
    max-width: 1280px;
    gap: 60px;
    margin: 50px auto 0;

    
    `

