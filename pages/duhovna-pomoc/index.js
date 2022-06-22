import React, { useCallback } from "react";
import TextCard from "../../components/TextCard";
import { spiritual } from "../../components/mocks/spiritualMocks";
import { useMediaQuery } from "react-responsive";
import TextCardResponsive from "../../components/TextCardResponsive";
import DisableSSR from "../../components/DisableSSR";
import Head from "next/head";

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

  return (
    <div>
      <Head>
        <title>Cvet Života - Duhovna pomoć</title>
        <meta
          name="description"
          content="„Centar za duhovni razvoj i edukaciju“ je tim ljudi koji deli zajedničku strast prema radu na sebi i pomaganju drugima da stanu na taj put. Naš cilj je edukacija svih zainteresovanih u duhovne tehnike, promocija duhovnosti  i rada na sebi kao načina života, kao i pružanje pomoći svima kojima je potrebna. U tu svrhu organizujemo seminare, kruseve, druženja i zajedničke aktivnosti sa ciljem unapređenja kvaliteta života i duhovne evolucije."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {renderMethod()}
    </div>
  );
};

export default React.memo(Spiritual);
