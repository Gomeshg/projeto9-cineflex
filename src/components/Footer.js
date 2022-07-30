import styled from 'styled-components';

export default function Footer({img, title, weekday, time}){
    return(
        <Wrapper>

            <section>
                <Img img={img}>
                    <img></img>
                </Img>

                {weekday === undefined  || time === undefined ? 
                    <p>{title}</p> 
                    :
                    <Box>
                        <p>{title}</p> 
                        <p>{weekday} - {time}</p>
                    </Box>
                }
                
            </section>
        </Wrapper>
    );
}


const Wrapper = styled.div`

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


const Box = styled.div`



`;


