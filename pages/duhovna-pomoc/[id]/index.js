import { useRouter } from "next/router";
import React from "react";
import { spiritual } from "../../../components/mocks/spiritualMocks";
import Title from "../../../components/TextCard/Title";
import Content from "../../../components/TextCard/Content";

const SpiritualHelpText = () => {
  const router = useRouter();
  const { id } = router.query;
  const page = spiritual[id];
  return (
    page && (
      <div className="single-page-text">
        <Title text={page.title} />
        <Content text={page.text} />
      </div>
    )
  );
};

export default SpiritualHelpText;
