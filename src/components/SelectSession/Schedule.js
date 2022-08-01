import styled from 'styled-components';
import {Link} from 'react-router-dom';


export default function Schedule({schedule, idFilme}){

    return(
        <Wrapper>

            <Title>
                {schedule.weekday} - {schedule.date}
            </Title>

            <TimeBox>
                {schedule.showtimes.map(showTime => <Link to={`/assentos/${showTime.id}`}> <Time> {showTime.name}</Time> </Link> )}
            </TimeBox>
                        
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const Title = styled.div`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    color:rgba(41, 56, 69, 1);
`;


const TimeBox = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
`;

const Time = styled.div`
  width: 83px;
  height: 43px;
  border-radius: 3px;
  background-color: rgba(232, 131, 58, 1);

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 18px;
  color: white;
  letter-spacing: 0.02em;
`;