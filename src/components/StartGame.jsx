import styled from 'styled-components'


const startgame = ({ toggle }) => {
    return (
        <Container>
            <img
                src="/public/images/dices.png"
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
max-width: 1182px;
display:flex;
margin: 0 auto;
justify-content:center;
align-items:center;
height:100vh;

.content h1{    
font-size: 96px;
font-weight: 700;
line-height: 144px;
letter-spacing: 0em;
}
`;

const Button = styled.button`

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
