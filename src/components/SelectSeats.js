import  styled from "styled-components";
import axios from 'axios';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';


export default function SelectSeats(){

    const { idSession } = useParams();
    
    useEffect(() => {

        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idSession}/showtimes`);

    })

    return(
        <Wrapper>


        </Wrapper>
    );
}


const Wrapper = styled.div`


`;
