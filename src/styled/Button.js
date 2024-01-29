import styled from "styled-components";


export const Button = styled.button`


padding: 10px 18px;
border-radius: 5px;
min-width:220px;
background: #000000;
color:#fff;
font-size:16px;
border:none;
border:1px solid transparent;
transition: 0.4ss ease-in;
cursor:pointer;

&:hover{
    background-color:white;
    color:black;
    border:1px solid black;
    transition: 0.3s ease-in;
}

`;

export const OppositeButton = styled(Button)`
  background: white;
  color: black;
  border:1px solid black;

  &:hover {
    background-color: #000000;
    color: #ffffff;
    border: 1px solid #ffffff;
  }
`;

