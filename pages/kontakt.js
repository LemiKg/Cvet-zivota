import React from "react";
import Head from "next/head";

const Kontakt = () => {
  return (
    <div className="kontakt">
      <Head>
        <title>Cvet Života - Kontakt</title>
        <meta
          name="description"
          content="„Centar za duhovni razvoj i edukaciju“ je tim ljudi koji deli zajedničku strast prema radu na sebi i pomaganju drugima da stanu na taj put. Naš cilj je edukacija svih zainteresovanih u duhovne tehnike, promocija duhovnosti  i rada na sebi kao načina života, kao i pružanje pomoći svima kojima je potrebna. U tu svrhu organizujemo seminare, kruseve, druženja i zajedničke aktivnosti sa ciljem unapređenja kvaliteta života i duhovne evolucije."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Kontakt</h1>
      <div>
        <p>
          Članovi centra za duhovni razvoj su tu za svakog, pomažemo i onima
          koji nemaju novca. A svoje usluge naplaćujemo samo kada je klijent
          zadovoljan sa radom.
          <br />
          Javite nam se običnom porukom ili na viber i kažite koji je va&scaron;
          problem, a mi ćemo probati da vam pomognemo koliko smo u mogućnosti:
        </p>
      </div>
      <p>
        <br />
        Centrala &ndash; Nemanja Blagojević&nbsp;
        <a href="tel:+381643307907">+381 64 3307907</a>
      </p>
      <p>
        Ako želite direktno kontaktirati nekog od specijalizovanih članova,
        možete to uraditi na viber broj:
      </p>
      <ul>
        <li>
          Astrolog Marijana Janković&nbsp;
          <a href="tel:+381616106165">+381 61 610 6165</a>
        </li>
        <li>
          Medijum Jelena Popović <a href="tel:+38163330555">+381 63 330 555</a>
        </li>
        <li>
          Radiestezista &ndash; Egzorcista Du&scaron;an Vlajković&nbsp;
          <a href="tel:+381677078611">+381 67 707 86 11</a>
        </li>
        <li>
          Emotivni terapeut &ndash; Sladjana Djordjević&nbsp;
          <a href="tel:+381677078611">+381 67 707 86 11</a>
        </li>
      </ul>
    </div>
  );
};

export default Kontakt;
