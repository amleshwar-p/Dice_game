

import styled from "styled-components";
import TotalScore from "./TotalScore";
import DiceSelector from "./DiceSelector";
import RollDice from "./RollDice";

import { useState } from "react";

const GameScreen = () => {

    const [selectedNumber, setSelectedNumber] = useState();
     return (
        <Main>
            <TopSection>
                <TotalScore></TotalScore>
                <DiceSelector selectedNumber={selectedNumber}
                              setSelectedNumber={setSelectedNumber}
                 />
            </TopSection>

            <RollDice></RollDice>
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

const Main = styled.div``;

