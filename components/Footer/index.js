import React from "react";
import Image from "next/dist/client/image";
import Navigation from "../Header/Navigation";
import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <Logo />
      <Navigation />
      <div className="social-share">
        <Image src="/facebook.svg" alt="facebook" height="30" width="30" />
        <Image src="/twitter.svg" alt="twitter" height="30" width="30" />
        <Image src="/instagram.svg" alt="instagram" height="30" width="30" />
      </div>
    </footer>
  );
};

export default React.memo(Footer);
