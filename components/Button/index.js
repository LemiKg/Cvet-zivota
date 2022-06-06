import React from "react";

const Button = (props) => {
  const { onClick, content } = props;

  return (
    <button className="button-comp" onClick={onClick}>
      {content}
    </button>
  );
};

export default React.memo(Button);
