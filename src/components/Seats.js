import styled from "styled-components";

import Seat from "./Seat";

export default function Seats({seats}){

    return(
        <Wrapper>
            {seats.map(seat => <Seat id={seat.id} name={seat.name} isAvailable={seat.isAvailable}/>)}
        </Wrapper>
    );
}


const Wrapper = styled.div`

    width: 90%;
    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 12px;
`;