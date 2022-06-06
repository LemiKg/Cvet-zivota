import React from "react";
import Button from "../../Button";
import Image from "next/image";

const Slide = (props) => {
  const { text, quoteBy, title, image, button } = props;

  const inlineStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div style={inlineStyle} className="slide">
      <div className="slide-content">
        {Boolean(title) && <h1>{title}</h1>}
        <p className="text">
          {text}
          <br />
          <span>{quoteBy}</span>
        </p>
        {Boolean(button) && <Button content="Pročitaj više" />}
        {Boolean(button) && (
          <Button
            content={
              <Image
                width="20"
                height="15"
                src="/arrow-right.png"
                alt="arrow for external link"
              />
            }
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(Slide);
