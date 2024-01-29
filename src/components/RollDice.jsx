import { useState } from "react";
import styled from "styled-components";

const RollDice = () => {

    const [currentDice, setCurrentDice] = useState(1);

    // generate random number bewtween 1 to 6
    const generateRandomNumber = (min, max) => {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // handle roll dice event
    const roleDice = () => {
        let num = generateRandomNumber(1, 6);
        setCurrentDice((prev) => num);
    }


    return (
        <DiceContainer>

            <div className="dice" onClick={roleDice}>
                <img src={`public/images/dice/dice_${currentDice}.png`} />
            </div>
            <p>CLick here to roll the Dice</p>

        </DiceContainer>
    );

}
export default RollDice

const DiceContainer = styled.div`

display:flex;
align-items:center;
margin-top:50px;
flex-direction:column;


p{
    font-size:20px;
}
`;