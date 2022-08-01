import styled from "styled-components";

import Seat from "./Seat";

export default function Seats({seats, ids, setIds, seatNumbers, setSeatNumbers}){
    console.log(ids)

    return(
        <Wrapper>
            {seats.map(seat => <Seat id={seat.id} name={seat.name} isAvailable={seat.isAvailable} ids={ids} setIds={setIds} seatNumbers={seatNumbers} setSeatNumbers={setSeatNumbers}/>)}
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