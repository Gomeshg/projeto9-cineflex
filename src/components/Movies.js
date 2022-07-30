import { useState, useEffect } from 'react';
import styled from 'styled-components';
import Movie from './Movie';
import axios from 'axios';
import {Link} from 'react-router-dom';


export default function Movies(){

    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies')
        promise.then(req => setMovies([...req.data]) )
    }, [])
    
    if(movies === null) return (<Loading>Carregando...</Loading>);

    return(
        <Wrapper>
            
            {movies.map(movie =><Link to={`/sessoes/${movie.id}`}> <Movie key={movie.id} id={movie.id} title={movie.title} img={movie.posterURL} overview={movie.overview} date={movie.releaseDate}/> </Link>)}
        </Wrapper>
    );
}

const Wrapper = styled.div`

    height: min-content;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* align-items: center; */
    gap: 40px;

    background-color: #E5E5E5; 
`;


const Loading = styled.div`

    height: 100px;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


