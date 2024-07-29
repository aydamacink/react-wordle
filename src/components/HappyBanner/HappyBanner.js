import React from 'react';
import Banner from '../Banner/Banner';

function HappyBanner({ numberOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{`  ${numberOfGuesses} guesses`}</strong>.
      </p>
    </Banner>
  );
}

export default HappyBanner;
