import styled from "styled-components";

export default function Requests({infoRequest}){


    return(
        <Wrapper>
            <section>
                <h2>Filme e Sessão</h2>
                <div>
                    <p>{infoRequest.movieTitle}</p>
                    <p>{infoRequest.date}</p>
                </div>
            </section>

            <section>
                <h2>Ingressos</h2>
                <div>
                    {infoRequest.seats.map((seat,index) => <p key={index}>Assento: {seat} </p>)}
                </div>
            </section>

            <section>
                <h2>Comprador</h2>
                <div>
                    <p>Nome: {infoRequest.name}</p>
                    <p>CPF: {infoRequest.cpf}</p>
                </div>
            </section>
        </Wrapper>
    );
  
}


const Wrapper = styled.div`
    
    font-family: 'Roboto';
    color: rgba(41, 56, 69, 1);

    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 30px;

    width: 80%;
    margin-bottom: 50px;

    section{
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    h2{
        font-weight: 700;
        font-size: 24px;
    }

    p{
        
        font-weight: 400;
        font-size: 22px;
        line-height: 25px;
    }

`;


