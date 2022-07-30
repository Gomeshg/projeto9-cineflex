import styled from 'styled-components';
import axios from 'axios';
import {useState, useEffect} from 'react';

import Footer from './Footer';
import Schedule from './Schedule';


export default function Schedules({idFilme}){
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`)
        promise.then(res => setMovie(res.data))
    }, [])

    if(movie === null) return (<Loading>Carregando...</Loading>);

    
    return(
        <Wrapper>

            {movie.days.map( movieDays => <Schedule schedule={movieDays} idFilme={idFilme} /> )}

            <Footer img={movie.posterURL} title={movie.title}  />
            
        </Wrapper>
    );
}

const Wrapper = styled.div`

    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 60px;

    padding-bottom: calc(117px + 30px);
`;


const Loading = styled.div`

    height: 100px;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;