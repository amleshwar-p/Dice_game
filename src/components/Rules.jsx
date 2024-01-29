import styled from "styled-components";

const Rules = () => {
    return (
        <RulesContainer>
            <h2>How to play Dice Game</h2>
            <p>Select any number</p>
            <p>Click on dice image </p>
            <p>after click on dice if slected numbers is equal to dice number you will get same point as dice </p>
            <p> if you get wrong guess then 2 point will be deducted</p>
        </RulesContainer>
    )
}

export default Rules

const RulesContainer = styled.div`
    padding:20px;
    background-color:#FBF1F1;
    max-width:900px;
    margin:0 auto;
    border-radius:5px;

h2{
    font-size:25px;
   margin-bottom:15px;
}
p{
    padding:4px 0;
}
`;