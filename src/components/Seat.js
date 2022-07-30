import styled from "styled-components";


export default function Seat({id, name, isAvailable, text}){
    let color;
    let border;

    if(text !== undefined){
        
        if(text === 'Selecionado'){
            color = 'rgba(141, 215, 207, 1)';
            border = 'rgba(26, 174, 158, 1)';
        }
        else if(text === 'Disponível'){
            color = 'rgba(195, 207, 217, 1)';
            border = 'rgba(123, 139, 153, 1)';
        }
        else if(text === 'Indisponível'){
            color = 'rgba(251, 225, 146, 1)';
            border = 'rgba(247, 197, 43, 1)';
        }

        return (
            <Container>
                <Wrapper color={color} border={border}></Wrapper>
                <Text>{text}</Text>
            </Container>
        );
    }

    else{
        color = 'rgba(195, 207, 217, 1)';
        border = 'rgba(123, 139, 153, 1)';

        return(
            <Wrapper color={color} border={border}>
                <Number>{name}</Number>
            </Wrapper>
        );
    }
  
}
const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

const Wrapper = styled.div`
    width: 26px;
    height: 26px;

    border-radius: 50%;
    background-color: ${props => props.color};
    border: 1px solid ${props => props.border};

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Number = styled.div`
    font-family: 'Roboto';
    font-size: 11px;
    font-weight: 400;
`;

const Text = styled.div`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 13px;
    color: rgba(78, 90, 101, 1);
`;