import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";

const Offer = (props) => {
  const { text, image, path } = props;

  return (
    <Link href={path}>
      <a href="#" className="offer-box">
        <div className="image">
          <Image layout="fill" src={image} alt="offer box" />
        </div>
        <p className="text">{text}</p>
      </a>
    </Link>
  );
};

export default React.memo(Offer);
