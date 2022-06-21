import React, { useCallback } from "react";
import Offer from "./Offer";
import { offers } from "../mocks/offersList";

const Offers = () => {
  const renderMethod = useCallback(() => {
    return offers?.map((el, i) => (
      <Offer key={i} path={el?.path} image={el?.image} text={el?.text} />
    ));
  }, [offers]);

  return <div className="offers-content">{renderMethod()}</div>;
};

export default React.memo(Offers);
