import React, { useCallback } from "react";
import TextCard from "../../components/TextCard";
import { events } from "../../components/mocks/eventsMock";
import { useMediaQuery } from "react-responsive";
import TextCardResponsive from "../../components/TextCardResponsive";
import DisableSSR from "../../components/DisableSSR";
// import { fetcher } from "../lib/api";

const Events = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 767px)",
  });

  const renderMethod = useCallback(() => {
    if (isDesktop) {
      return events?.map((el, i) => (
        <DisableSSR key={`dogadjaji-desktop${i}`}>
          <div>
            <TextCard
              title={el?.title}
              content={el?.text}
              extraText={el?.extraText}
            />
          </div>
        </DisableSSR>
      ));
    } else {
      return events?.map((el, i) => (
        <DisableSSR key={`dogadjaji${i}`}>
          <div>
            <TextCardResponsive
              page="dogadjaji"
              title={el?.title}
              id={el?.id}
            />
          </div>
        </DisableSSR>
      ));
    }
  }, [isDesktop]);

  return <div className="dogadjaji">{renderMethod()}</div>;
};

export default Events;

// export const getStaticProps = async () => {
//   const texts = await fetcher("api/texts");
//   return {
//     props: {
//       texts,
//     },
//   };
// };
