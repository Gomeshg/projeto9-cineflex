import styled from "styled-components";
import Button from "../Button";
import {useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

export default function Form({ids, seatNumbers, setSeatNumbers}){

    const [name, setName] = useState("");
	const [cpf, setCPF] = useState("");
    let navigate = useNavigate();
    

    function sendForm(e){
        e.preventDefault();
        let idList = ids.map(id => parseInt(id))

        let form = {
            ids: idList,
            name: name, 
            cpf: cpf
        }
        console.log(form)
        const promise = axios.post(`https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many`, form);
        promise.then(navigate("/sucesso"))
        promise.catch(e => console.log(e))
    }


    return(
        <Wrapper>
           <form onSubmit={sendForm}>
                <div>
                    <label htmlFor="">Nome do comprador: </label>
                    <input type="text" placeholder="Digite o seu nome..." value={name} onChange={e => setName(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="">Cpf do comprador: </label>
                    <input type="text" placeholder="Digite o seu cpf..." value={cpf} onChange={e => setCPF(e.target.value)} required></input>
                </div>
                {/* <Link to="/sucesso"> <Button type="submit" text="Reserver assento(s)"/> </Link> */}
                <Button type="submit" text="Reservar assento(s)"/>
           </form>
        </Wrapper>
    );
}


const Wrapper = styled.div`

    width: 90%;
    
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        
    }
    div{
        
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    label{
        font-family: 'Roboto';
        font-size: 18px;
        font-weight: 400;
        color: rgba(41, 56, 69, 1);
    }

    input{
        width: 100%;
        height: 51px;
        border-radius: 3px;
        border: 1px solid rgba(212, 212, 212, 1);

        padding-left: 15px;

        font-family: 'Roboto';
        font-weight: 400;
        font-style: italic;
        font-size: 18px;
        color: rgba(175, 175, 175, 1);
    }

`;