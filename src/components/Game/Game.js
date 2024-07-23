import React from 'react';
import Input from '../Input';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  return (
    <>
      <div>Put a game here!</div>
      <div>
        <Input />
      </div>
    </>
  );
}

export default Game;
