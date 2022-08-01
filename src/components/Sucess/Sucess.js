import styled from "styled-components";
import Button from "../Button"
export default function Sucess(){
    

    return(
        <Wrapper>
            <Title>Pedido feito com sucesso!</Title>

            <Button text="Voltar para home"></Button>
        </Wrapper>
    );
}

const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: red;
`;

const Title = styled.div`
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 24px;
    color: rgba(36, 122, 107, 1);

    display: flex;
    justify-content: center;
    align-items: center;

    height: 117px;
`;
