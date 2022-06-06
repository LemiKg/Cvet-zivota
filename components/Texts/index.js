import React from "react";
import Button from "../Button";

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
      <Button content="Pročitaj više" />
    </div>
  );
};

export default React.memo(Texts);
