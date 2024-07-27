import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import HappyBanner from '../HappyBanner';
import SadBanner from '../SadBanner';

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

  const handleSubmitGuess = (guess) => {
    setGuesses([...guesses, guess]);
    if (guess === answer) {
      setGameStatus('win');
      setIsDisabled(true);
    }
    if (guesses.length >= 5) {
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
          isDisabled={isDisabled}
        />
        {gameStatus === 'win' && <HappyBanner guesses={guesses} />}
        {gameStatus === 'lose' && <SadBanner answer={answer} />}
      </div>
    </>
  );
}

export default Game;
