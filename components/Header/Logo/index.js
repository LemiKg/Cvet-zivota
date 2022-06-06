import React from "react";
import Image from "next/dist/client/image";

const Logo = () => {
  return (
    <div className="logo">
      <Image width="70px" height="70px" src="/logo.png" alt="Logo" />
      <div>
        <h1>Cvet Života</h1>
        <h4>CENTAR ZA DUHOVNI RAZVOJ I EDUKACIJU</h4>
      </div>
    </div>
  );
};

export default React.memo(Logo);
