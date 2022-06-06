import React from "react";
import Image from "next/dist/client/image";

const Offer = (props) => {
  const { text, image } = props;

  return (
    <div className="offer-box">
      <div className="image">
        <Image layout="fill" src={image} alt="offer box" />
      </div>
      <p className="text">{text}</p>
    </div>
  );
};

export default React.memo(Offer);
