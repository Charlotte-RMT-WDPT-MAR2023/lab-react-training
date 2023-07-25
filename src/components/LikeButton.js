import React, { useState } from 'react';

function LikeButton() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  const [colorIndex1, setColorIndex1] = useState(0);
  const [colorIndex2, setColorIndex2] = useState(0);

  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      setCount1((prevCount) => prevCount + 1);
      setColorIndex1((prevIndex) => (prevIndex + 1) % colors.length);
    } else if (buttonNumber === 2) {
      setCount2((prevCount) => prevCount + 1);
      setColorIndex2((prevIndex) => (prevIndex + 1) % colors.length);
    }
  };

  const currentColor1 = colors[colorIndex1];
  const currentColor2 = colors[colorIndex2];

  return (
    <div className="Counter">
      <button onClick={() => handleButtonClick(1)} style={{ backgroundColor: currentColor1 }}> {count1} likes </button>
      <button onClick={() => handleButtonClick(2)} style={{ backgroundColor: currentColor2 }}> {count2} likes </button>
    </div>
  );
}

export default LikeButton;
