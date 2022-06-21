import React from "react";
import Image from "next/dist/client/image";
import Link from "next/link";

const Logo = (props) => {
  const { toggleNav } = props;
  return (
    <Link href="/">
      <a className="logo" href="#" onClick={toggleNav}>
        <Image width="70px" height="70px" src="/logo.webp" alt="Logo" />
        <div>
          <h1>Cvet Života</h1>
          <h4>CENTAR ZA DUHOVNI RAZVOJ I EDUKACIJU</h4>
        </div>
      </a>
    </Link>
  );
};

export default React.memo(Logo);
