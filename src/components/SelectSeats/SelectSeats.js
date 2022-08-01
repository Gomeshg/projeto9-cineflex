import  styled from "styled-components";
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


import Seats from './Seats';
import Seat from './Seat';
import Footer from '../Footer';
import Form from './Form';


export default function SelectSeats({infoRequest, setInfoRequest}){

    
    const {idSessao}  = useParams();
    const [data, setData] = useState(null);
    
    const [ids, setIds] = useState([]); 
    const [seatNumbers, setSeatNumbers] = useState([]);


    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${idSessao}/seats`);
        promise.then(res => setData(res.data))
        promise.then(res => {
            const request = {
                movieTitle: res.data.movie.title,
                date: `${res.data.day.date} - ${res.data.name}`
            }
    
            setInfoRequest({...request})
        })
        promise.catch(e => console.log(e.response))
    }, [])


    if(data === null) return (<Loading>Carregando...</Loading>);

    return(
        <Wrapper>

            <SeatContainer>
                <Title>Selecione o(s) assentos</Title>

                <Seats seats={data.seats} ids={ids} setIds={setIds} seatNumbers={seatNumbers} setSeatNumbers={setSeatNumbers}/>
                <SeatBox>
                    <Seat text="Selecionado"/>
                    <Seat text="Disponível"/>
                    <Seat text="Indisponível"/>
                </SeatBox>
            </SeatContainer>

          
            <Form ids={ids} seatNumbers={seatNumbers} setSeatNumbers={setSeatNumbers} infoRequest={infoRequest} setInfoRequest={setInfoRequest}/>

            <Footer img={data.movie.posterURL} title={data.movie.title} weekday={data.day.weekday} time={data.name} />

        </Wrapper>
    );
}


const Wrapper = styled.div`
    padding-bottom: calc(117px + 30px);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
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
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 110px;
`;

const SeatContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const SeatBox = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
`;

