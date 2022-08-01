import styled from "styled-components";

export default function Button({text}){

    return(
        <Wrapper>{text}</Wrapper>
    );
}

const Wrapper = styled.button`
  width: 225px;
  height: 42px;

  background-color: rgba(232, 131, 58, 1);
  color: white;
  font-family: 'Roboto';
  font-size: 18px;
  text-align: center;

  border-radius: 3px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
