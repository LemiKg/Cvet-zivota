import React from "react";
import Navigation from "../Header/Navigation";
import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <Navigation />
      <div className="social-share">
        <img src="/facebook.svg" alt="facebook" height="30" width="30" />
        <img src="/twitter.svg" alt="twitter" height="30" width="30" />
        <img src="/instagram.svg" alt="instagram" height="30" width="30" />
      </div>
    </footer>
  );
};

export default React.memo(Footer);
