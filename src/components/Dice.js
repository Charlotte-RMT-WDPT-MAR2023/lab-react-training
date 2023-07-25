import React, { useState } from 'react';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

function Dice() {
  const Die = [dice1, dice2, dice3, dice4, dice5, dice6];
  const [image, setImage] = useState(Die[0]);

  const handleClick = () => {
    let randomNumber = Math.floor(Math.random() * Die.length);
    setImage(Die[randomNumber]);
  };

  return (
    <div className="dice-container">
      <img onClick={handleClick} src={image} width={40} alt="die" />
    </div>
  );
}

export default Dice;
