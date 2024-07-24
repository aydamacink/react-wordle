import React from 'react';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  const addGuess = (guess) => {
    const newGuess = {
      id: crypto.randomUUID(),
      text: guess,
    };
    setGuesses([...guesses, newGuess]);
  };

  return (
    <>
      <div>
        <GuessResults guesses={guesses} />
        <GuessInput addGuess={addGuess} />
      </div>
    </>
  );
}

export default Game;
