import React, { useCallback } from "react";
import DisableSSR from "../components/DisableSSR";
import TextCard from "../components/TextCard";
import { fetcher } from "../lib/api";

const Tekstovi = ({ texts }) => {
  const renderMethod = useCallback(() => {
    return texts.data?.map((el, i) => (
      <TextCard
        key={i}
        title={el?.attributes.title}
        content={el?.attributes.text}
      />
    ));
  }, [texts.data]);

  return <div className="texts">{renderMethod()}</div>;
};

export default React.memo(Tekstovi);

export const getStaticProps = async () => {
  const texts = await fetcher("api/texts", {
    Authentication: process.env.NEXT_PUBLIC_API_TOKEN,
  });
  return {
    props: {
      texts,
    },
  };
};
