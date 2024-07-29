import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState('ongoing');
  const [isDisabled, setIsDisabled] = React.useState(false);

  const handleSubmitGuess = (tentativeGuess) => {
    const nextGuesses = [...guesses, tentativeGuess];
    setGuesses(nextGuesses);
    if (tentativeGuess.toUpperCase() === answer) {
      setGameStatus('win');
      setIsDisabled(true);
    }
    if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lose');
      setIsDisabled(true);
    }
  };

  return (
    <>
      <div>
        <GuessResults guesses={guesses} answer={answer} />
        <GuessInput
          handleSubmitGuess={handleSubmitGuess}
          gameStatus={gameStatus}
        />
        {gameStatus === 'win' && <HappyBanner guesses={guesses.length} />}
        {gameStatus === 'lose' && <SadBanner answer={answer} />}
      </div>
    </>
  );
}

export default Game;
