import { useRouter } from "next/router";
import React from "react";
import { events } from "../../../components/mocks/eventsMock";
import Title from "../../../components/TextCard/Title";
import Content from "../../../components/TextCard/Content";

const EventText = () => {
  const router = useRouter();
  const { id } = router.query;
  const page = events[id];
  console.log(page);
  return (
    page && (
      <div className="single-page-text">
        <Title text={page.title} />
        <Content text={page.text} />
        {page.extraText && <Content text={page.extraText} />}
      </div>
    )
  );
};

export default EventText;
