
import styled from "styled-components";

const RollDice = ({currentDice , roleDice}) => {

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
margin-top:20px;
flex-direction:column;


p{
    font-size:24px;
}
`;