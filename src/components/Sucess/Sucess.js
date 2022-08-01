import styled from "styled-components";
import Button from "../Button"
import Requests from "./Requests"

export default function Sucess({infoRequest}){
    
    
    return(
        <Wrapper>
            <Title>Pedido feito com sucesso!</Title>
            <Requests infoRequest={infoRequest}/>
            <Button text="Voltar para home"></Button>
        </Wrapper>
    );
   
}

const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

const Title = styled.div`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 24px;
    color: rgba(36, 122, 107, 1);

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    height: 117px;
    width: 50%;
`;
