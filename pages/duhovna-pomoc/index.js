import React, { useCallback } from "react";
import TextCard from "../../components/TextCard";
import { spiritual } from "../../components/mocks/spiritualMocks";
import { useMediaQuery } from "react-responsive";
import TextCardResponsive from "../../components/TextCardResponsive";
import DisableSSR from "../../components/DisableSSR";

const Spiritual = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 767px)",
  });

  const renderMethod = useCallback(() => {
    if (isDesktop) {
      return spiritual?.map((el, i) => (
        <DisableSSR key={i}>
          <div>
            <TextCard title={el?.title} content={el?.text} />
          </div>
        </DisableSSR>
      ));
    } else {
      return spiritual?.map((el, i) => (
        <DisableSSR key={i}>
          <div>
            <TextCardResponsive
              page="duhovna-pomoc"
              title={el?.title}
              id={el?.id}
            />
          </div>
        </DisableSSR>
      ));
    }
  }, [isDesktop]);

  return renderMethod();
};

export default React.memo(Spiritual);
