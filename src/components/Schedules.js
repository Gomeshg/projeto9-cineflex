import styled from 'styled-components';
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function Schedules({idFilme}){

    const [schedules, setSchedules] = useState(null);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${idFilme}/showtimes`)
        promise.then(res => setSchedules([...res.data.days]))
        promise.then(res => setMovie([res.data]))
    }, [])

    
    if(schedules === null) return (<Loading>Carregando...</Loading>);
    
    return(
        <Wrapper>

            {schedules.map(schedule => 
                <Container>
                    <Title>
                        {schedule.weekday} - {schedule.date}
                    </Title>

                    <TimeBox>
                        {schedule.showtimes.map(value => <Time> <p>{value.name}</p></Time>)}
                    </TimeBox>
                </Container>                
            )}

                {movie === null ?
                
                    <Footer>
                        <p>Carregando...</p>
                    </Footer>
            
                :
                    <Footer>
                        <section>
                            <Img img={movie[0].posterURL}>
                                <img></img>
                            </Img>
                            <p>{movie[0].title}</p>
                        </section>
                    </Footer>
                }
                
        </Wrapper>
    );
}

const Wrapper = styled.div`

    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 60px;

    padding-bottom: calc(117px + 30px);
`;

const Container = styled.div`

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

const Loading = styled.div`

    height: 100px;
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
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
  
  p{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: white;
    letter-spacing: 0.02em;
  }

`;

const Footer = styled.div`

  height: 117px;
  background-color: rgba(223, 230, 237, 1);


  border-top: 1px solid rgba(158, 173, 186, 1);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;

  p{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 20px;
    color:rgba(41, 56, 69, 1);
    word-break: break-word;
  }

  section{
    width: 90%;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
  }
  
`;

const Img = styled.div`

    width: 64px;
    height: 89px;
    border-radius: 2px;

    background-color: white;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 48px;
        height: 72px;
        background-image: url( ${props => props.img} );
        background-size: cover;
  }
`;

