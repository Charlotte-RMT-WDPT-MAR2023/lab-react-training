import React, { useState } from 'react';

function Carousel(props) {
  const { images } = props;
  const [count, setCount] = useState(0);

  const handleLeftClick = () => {
    setCount((prevCount) => (prevCount - 1 + images.length) % images.length);
  };

  const handleRightClick = () => {
    setCount((prevCount) => (prevCount + 1) % images.length);
  };

  const portrait = images[count];

  return (
    <div className="image-container">
      <img src={portrait} width={40} alt="portrait" />
      <button onClick={handleLeftClick}> left </button>
      <button onClick={handleRightClick}> right </button>
    </div>
  );
}

export default Carousel;
