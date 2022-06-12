import React from "react";
import Button from "../../Button";
import Image from "next/image";
import Link from "next/dist/client/link";

const Slide = (props) => {
  const { text, quoteBy, title, image, button } = props;

  const inlineStyle = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  const renderButton = () => {
    if (!button) {
      return;
    }
    return (
      <div>
        <Link href={"/dogadjaji"}>
          <Button content="Pročitaj više" />
        </Link>
        <Link href={"/dogadjaji"}>
          <Button
            content={
              <Image
                width="20"
                height="15"
                src="/arrow-right.webp"
                alt="arrow for external link"
              />
            }
          />
        </Link>
      </div>
    );
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
        {renderButton()}
      </div>
    </div>
  );
};

export default React.memo(Slide);
