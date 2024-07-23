import React, { useState } from 'react';

function Input() {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Input submitted:', inputValue);
    setInputValue('');
  };

  const handleChange = (event) => {
    setInputValue(event.target.value.toUpperCase());
  };

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          pattern="^[A-Za-z]{5}$"
          title="Input must be exactly 5 alphabetic characters"
          value={inputValue}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Input;
