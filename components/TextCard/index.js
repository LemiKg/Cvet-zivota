import React, { useCallback, useState } from "react";
import Button from "../Button";
import Content from "./Content";
import Title from "./Title";

const TextCard = (props) => {
  const { title, content } = props;

  const [collapse, setCollapse] = useState(false);

  const handleCollapseValue = () => {
    setCollapse((current) => !current);
  };

  const toggleClass = useCallback(() => {
    if (collapse) {
      return "collapsed";
    }
    return "not-collapsed";
  }, [collapse]);

  return (
    <div className={`${toggleClass()} card`}>
      <Title text={title} />
      <Content text={content} />
      <Button onClick={handleCollapseValue} content="Pročitaj više" />
    </div>
  );
};

export default React.memo(TextCard);
