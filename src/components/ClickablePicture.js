import React, { useState } from 'react';

function ClickablePicture(props) {
  const { img, imgClicked } = props;

  const [image, setImage] = useState(img);

  const handleClick = () => {
    setImage((prevImage) => (prevImage === img ? imgClicked : img));
  };

  return (
    <div>
      <img src={image} width={100} alt="user-profile" onClick={handleClick} />
    </div>
  );
}

export default ClickablePicture;
