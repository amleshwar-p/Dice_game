

import styled from "styled-components";
import TotalScore from "./TotalScore";
import DiceSelector from "./DiceSelector";
import RollDice from "./RollDice";

import { useState } from "react";
import { Button, OppositeButton } from "../styled/Button";
import Rules from "./Rules";

const GameScreen = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");

    const [isVisible, setVisible] = useState(false);

    const handleVisible = () => {
        setVisible(!isVisible);
    }


    // generate random number bewtween 1 to 6
    const generateRandomNumber = (min, max) => {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // handle roll dice event
    const roleDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number");
            return
        }
        setError("");
        let num = generateRandomNumber(1, 6);
        setCurrentDice((prev) => num);


        if (selectedNumber == num) {
            setScore((prev) => prev + 5);
        } else {
            setScore((prev) => prev - 1);
        }
        setSelectedNumber(undefined);
    }

    const resetScore = () => {
        setScore(0);
    }


    return (
        <Main>
            <TopSection>
                <TotalScore score={score} />
                <DiceSelector
                    error={error}
                    setError={setError}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber}
                />
            </TopSection>

            <RollDice currentDice={currentDice}
                roleDice={roleDice}
            />
            <div className="btns">
                <Button onClick={resetScore}>Reset</Button>
                <OppositeButton onClick={handleVisible}>Show Rules</OppositeButton>
            </div>
            {isVisible && <Rules />}
        </Main>
    )
}

export default GameScreen


const TopSection = styled.div`
display:flex;
justify-content:space-between;
align-items:end;
padding:70px 120px;
`;

const Main = styled.div`
.btns{

    margin-top:20px;
    display:flex;
    flex-direction:column;
    gap:20px;
    align-items:center;
    padding:20px 0px;
}

`;

