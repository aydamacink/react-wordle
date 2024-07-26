import React from 'react';
import { range } from '../../utils';

function Guess({ i, guess }) {
  return (
    <p className="guess">
      {range(5).map((i) => (
        <span key={i} className="cell">
          {guess[i] || ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;
