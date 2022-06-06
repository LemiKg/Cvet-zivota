import React from "react";
import Image from "next/image";

const NavButton = (props) => {
  const { onClick } = props;

  return (
    <div className="hamburger-icon">
      <button onClick={onClick} className="outline-none mobile-menu-button">
        <Image
          src="/hamburger-icon.svg"
          alt="hamburger icon"
          width="20"
          height="20"
        />
      </button>
    </div>
  );
};

export default React.memo(NavButton);
