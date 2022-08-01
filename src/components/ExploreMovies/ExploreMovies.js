import styled from 'styled-components';
import Movies from './Movies';


export default function ExploreMovies({}){
    return(
        <Wrapper>
            <Title>Selecione o filme</Title>
            <Movies/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background-color: #E5E5E5;
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