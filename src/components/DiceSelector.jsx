import { useState } from "react";
import styled from "styled-components"

const DiceSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {

    const arrayNumber = [1, 2, 3, 4, 5, 6];

    const DiceSelectorHandler = (value) => {
        setSelectedNumber(value)
        setError("")
    }

    return (
        <NumberBoxes>
            <h3>{error}</h3>
            <div className="flex">
                {
                    arrayNumber.map((value, i) => (
                        <Box
                            isSelected={
                                value == selectedNumber
                            }
                            key={i} onClick={() => DiceSelectorHandler(value)}>
                            {value}
                        </Box>
                    ))
                }
            </div>
            <p>Select Number</p>
        </NumberBoxes>
    )
}

export default DiceSelector

const NumberBoxes = styled.div`


display:flex;
flex-direction:column;
align-items:end;

.flex{
    display:flex;
    justify-content:end;
    gap:20px;
}

h3{
    color:red;
    font-weight:400;
}

p{

font-size: 24px;
font-weight: 700;
line-height: 36px;



}
`;

const Box = styled.div`
width: 72px;
height: 72px;
border: 1px solid black;
display:flex;
justify-content:center;
align-items:center;

background-color:${(props) => props.isSelected ? "black" : "white"};
color:${(props) => props.isSelected ? "white" : "black"};

font-size: 24px;
font-weight: 700;
line-height: 36px;


`;