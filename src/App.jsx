
import { useState } from 'react';
import './App.css'
import StartGame from './components/startgame';
import GameScreen from './components/GameScreen';


function App() {

  const [ifGameStarted, setIfGameStarted] = useState(false);

  const toggleGame = () => {
    setIfGameStarted((prev) => !prev);
  }
  return (
    <>
      {
        ifGameStarted ? <GameScreen /> : <StartGame
          toggle={toggleGame}
        />
      }
    </>
  );
}

export default App
