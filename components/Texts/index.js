import React from "react";
// import Button from "../Button";
// import Link from "next/dist/client/link";

const Texts = () => {
  return (
    <div className="landing-texts">
      <h1 className="desktop">Tekstovi - Nemanja Blagojević</h1>
      <div className="responsive">
        <h1>Nemanja Blagojević</h1>
        <h2>Tekstovi</h2>
      </div>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.Amet minim mollit non deserunt
        ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
        enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet
        minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        Velit officia consequat duis enim velit mollit. Exercitation veniam
        consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est
        sit aliqua dolor do amet sint. Velit officia consequat duis enim velit
        mollit. Exercitation veniam consequat sunt nostrud amet.
      </p>
      {/* <Link href={'/'}>
        <Button content="Pročitaj više" />
      </Link> */}
    </div>
  );
};

export default React.memo(Texts);
