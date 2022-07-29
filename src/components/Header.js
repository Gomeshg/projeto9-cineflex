// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import styled from 'styled-components';

export default function Header({}){
    return(
        <Wrapper>
            <Title>cineflex</Title>
        </Wrapper>
    );
}


const Wrapper = styled.div`

    height: 67px;
    background-color: rgba(195, 207, 217, 1);

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    font-family: 'Roboto';
    color: rgba(232, 131, 58, 1);
    font-size: 34px;
    font-weight: 400;
    text-transform: uppercase;
`;