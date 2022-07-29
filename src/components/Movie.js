import styled from 'styled-components';
import {Link} from 'react-router-dom';


export default function Movie({id, title, img, overview, date }){

    
    return(
        <Wrapper>
            <Img img={img}></Img>
        </Wrapper>
    );
}

const Wrapper = styled.div`

    height: 209px;
    width: 145px;

    background-color: white;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Img = styled.div`

    height: 193px;
    width: 129px;

    background-image: url(${props => props.img});
    background-size: cover;
`;




