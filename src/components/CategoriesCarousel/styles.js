import styled from "styled-components";


export const Container = styled.div `
    .carousel-item {
        padding-right: 40px;

    }
    padding-left: 40px;
    cursor: grab;
`

export const Title = styled.h2 `
    font-size: 32px;
    font-weight: 800;
    color: #9758a6;
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 40px;
    margin-top: 20px;

    &::after {
        content: '';
        position: absolute;
        width: 56px;
        height: 4px;
        background-color: #9758a6;
        bottom: 0;  
        left: calc(50% - 28px)
        

    }

`

export const ContainerItems = styled.div `
    background: url('${(props) => props.imageUrl}');
    background-position: center;
    background-size: cover;
    border-radius: 20px;


    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 300px;

    p{
        color: #fff;
        background-color: rgba(0,0,0, 0.5);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 25.5px;
        font-weight: bold;
        margin-top: 50px;
    }
`