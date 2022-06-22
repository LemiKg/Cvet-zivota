import Head from "next/head";
import Carousel from "../components/Carousel";
import Counters from "../components/Counters";
import Offers from "../components/Offers";
import WhatWeOffer from "../components/WhatWeOffer";
import { topSlides, midSlides } from "../components/mocks/allSlides";
import styles from "../styles/Home.module.css";
import DisableSSR from "../components/DisableSSR";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cvet Života</title>
        <meta
          name="description"
          content="„Centar za duhovni razvoj i edukaciju“ je tim ljudi koji deli zajedničku strast prema radu na sebi i pomaganju drugima da stanu na taj put. Naš cilj je edukacija svih zainteresovanih u duhovne tehnike, promocija duhovnosti  i rada na sebi kao načina života, kao i pružanje pomoći svima kojima je potrebna. U tu svrhu organizujemo seminare, kruseve, druženja i zajedničke aktivnosti sa ciljem unapređenja kvaliteta života i duhovne evolucije."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="content">
        <Carousel
          numberOfSlides={1}
          sliderClass="top-slider slider"
          slides={topSlides}
          pagination={true}
        />

        <DisableSSR>
          <Carousel
            numberOfSlides={1.1}
            sliderClass="mid-slider slider"
            slides={midSlides}
            pagination={false}
          />
        </DisableSSR>

        <WhatWeOffer />

        <Offers />

        <Counters />
      </section>
    </div>
  );
}
