import React from "react";

const WhatWeOffer = () => {
  const inlineStyle = {
    backgroundImage: "url(/what-we-offer.png)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div style={inlineStyle} className="what-we-offer">
      <div className="content">
        <h1>Nudimo Vam</h1>
        <p>
          Ovo su terapeutske i energetske usluge koje nudimo, a sve se rade
          online, preko viber ili whatsapp video poziva. Javite nam se na viber
          i napišite koji problem imate, a mi vam možemo dati sugestiju kako
          najbolje da ga rešite uz našu pomoć. <br />
          <a href="tel:+381643307907">+38164 330 7907</a>
        </p>
      </div>
    </div>
  );
};

export default React.memo(WhatWeOffer);
