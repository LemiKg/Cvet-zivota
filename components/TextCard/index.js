import React, { useCallback, useState } from "react";
import Button from "../Button";
import Content from "./Content";
import Title from "./Title";

const TextCard = (props) => {
  const { title, content, extraText } = props;

  const [collapse, setCollapse] = useState(true);

  const handleCollapseValue = () => {
    setCollapse((current) => !current);
  };

  const toggleClass = useCallback(() => {
    if (collapse) {
      return {
        collapseClass: "collapsed",
        buttonLabel: "Pročitaj više",
      };
    }
    return {
      collapseClass: "not-collapsed",
      buttonLabel: "Pročitaj manje",
    };
  }, [collapse]);

  const buttonValues = toggleClass();

  return (
    <div className={`${buttonValues.collapseClass} card`}>
      <Title text={title} />
      <Content text={content} extraText={extraText} />
      <Button
        onClick={handleCollapseValue}
        content={buttonValues.buttonLabel}
      />
    </div>
  );
};

export default React.memo(TextCard);
