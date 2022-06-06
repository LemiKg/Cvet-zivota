import React from "react";

const Content = (props) => {
  const { text } = props;

  return <p>{text}</p>;
};

export default React.memo(Content);
