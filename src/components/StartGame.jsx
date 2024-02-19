import styled from 'styled-components'

import { Button } from "../styled/Button"

const startgame = ({ toggle }) => {
    return (
        <Container>
            <img
                src="/images/dices.png"
            />
            <div className='content'>
                <h1>
                    Dice game
                </h1>
                <Button onClick={toggle} >  Play Now
                </Button>
            </div>
        </Container>

    )
}

export default startgame

const Container = styled.div`

display:flex;
margin: 0 auto;
justify-content:space-evenly;
align-items:center;
height:100vh;

.content h1{    
font-size: 116px;
font-weight: 700;
line-height: 144px;
letter-spacing: 0em;
}
`;


