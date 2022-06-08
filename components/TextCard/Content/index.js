import React from "react";
import parse from "html-react-parser";

const Content = (props) => {
  const { text, extraText } = props;

  return (
    <div className="card-content">
      {parse(text)}
      {extraText && parse(extraText)}
    </div>
  );
};

export default React.memo(Content);
