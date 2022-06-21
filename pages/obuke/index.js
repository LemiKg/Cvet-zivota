import React, { useCallback } from "react";
import TextCard from "../../components/TextCard";
import { trainings } from "../../components/mocks/trainingsMocks";
import { useMediaQuery } from "react-responsive";
import TextCardResponsive from "../../components/TextCardResponsive";
import DisableSSR from "../../components/DisableSSR";
import LearningInstructions from "../../components/LearningInstructions";

const Trainings = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 767px)",
  });

  const renderMethod = useCallback(() => {
    if (isDesktop) {
      return trainings?.map((el, i) => (
        <DisableSSR key={i}>
          <div>
            <TextCard title={el?.title} content={el?.text} />
          </div>
        </DisableSSR>
      ));
    } else {
      return trainings?.map((el, i) => (
        <DisableSSR key={i}>
          <div>
            <TextCardResponsive page="obuke" title={el?.title} id={el?.id} />
          </div>
        </DisableSSR>
      ));
    }
  }, [isDesktop]);

  return (
    <div className="trainings">
      {renderMethod()}
      <LearningInstructions />
    </div>
  );
};

export default React.memo(Trainings);
