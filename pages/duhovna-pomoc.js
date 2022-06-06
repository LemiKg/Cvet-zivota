import React, { useCallback } from "react";
import TextCard from "../components/TextCard";
import { spiritual } from "../components/mocks/spiritualMocks";

const Spiritual = () => {
  const renderMethod = useCallback(() => {
    return spiritual?.map((el, i) => (
      <div key={i}>
        <TextCard title={el?.title} content={el?.text} />
      </div>
    ));
  }, [spiritual]);

  return renderMethod();
};

export default React.memo(Spiritual);
