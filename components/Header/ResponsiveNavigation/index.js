import React from "react";
import Logo from "../Logo";
import Navigation from "../Navigation";
import Image from "next/dist/client/image";

const ResponsiveNavigation = (props) => {
  const { isVisible, clickMethod } = props;
  const visibilityClass = isVisible ? "active" : "inactive";
  if (typeof window !== "undefined") {
    document.body.style.overflow = isVisible ? "hidden" : "scroll";
  }

  return (
    <div className={`responsive-navigation ${visibilityClass}`}>
      <div className="responsive-navigation-header">
        <Logo toggleNav={clickMethod} />
        <button className="close-button" onClick={clickMethod}>
          <Image src="/close.svg" width="20" height="20" alt="close icon X" />
        </button>
      </div>
      <Navigation toggleNav={clickMethod} />
    </div>
  );
};

export default React.memo(ResponsiveNavigation);
