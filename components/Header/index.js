import React, { useCallback, useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import NavButton from "./NavButton";
import ResponsiveNavigation from "./ResponsiveNavigation";

const Header = () => {
  const [toggleVisibility, setToggleVisibility] = useState(false);

  const toggleNav = useCallback(() => {
    setToggleVisibility((current) => !current);
  }, []);

  return (
    <div className="header">
      <Logo />
      <Navigation />
      <NavButton onClick={toggleNav} />
      <ResponsiveNavigation
        clickMethod={toggleNav}
        isVisible={toggleVisibility}
      />
      <div
        onClick={toggleNav}
        className={`${toggleVisibility ? "active" : "inactive"} backdrop`}
      ></div>
    </div>
  );
};

export default React.memo(Header);
