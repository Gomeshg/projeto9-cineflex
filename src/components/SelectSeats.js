import  styled from "styled-components";
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


import Seats from './Seats';
import Seat from './Seat';


export default function SelectSeats(){

    const {idSessao}  = useParams();
    const [data, setData] = useState(null);

    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        promise.then(res => setData(res.data))
        promise.catch(e => console.log(e.response))
    }, [])

    console.log(data)

    if(data === null) return (<Loading>Carregando...</Loading>);

    return(
        <Wrapper>

            <Title>Selecione o(s) assentos</Title>

            <SeatContainer>
                <Seats seats={data.seats}/>
                <SeatBox>
                    <Seat text="Selecionado"/>
                    <Seat text="Disponível"/>
                    <Seat text="Indisponível"/>
                </SeatBox>
            </SeatContainer>

        </Wrapper>
    );
}


const Wrapper = styled.div`


`;

const Loading = styled.div`

    height: 100px;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    font-family: 'Roboto';
    color: rgba(41, 56, 69, 1);
    font-size: 24px;
    font-weight: 400;    
    letter-spacing: 0.04em;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 110px;
`;

const SeatContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const SeatBox = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
`;