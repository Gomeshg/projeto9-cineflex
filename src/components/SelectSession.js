import styled from 'styled-components';
import Schedules from './Schedules';
import { useParams } from 'react-router-dom';

export default function SelectSession({}){

    const { idFilme } = useParams();

    return(
        <Wrapper>
            <Title>Selecione o horário</Title>
            <Schedules idFilme={idFilme}/>
        </Wrapper>
    );
}

const Wrapper = styled.div`

    
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
