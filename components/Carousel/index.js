import React, { useCallback } from "react";
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Slide from "./Slide";

const Carousel = (props) => {
  const { numberOfSlides, sliderClass, slides, pagination } = props;
  const isDesktop = useMediaQuery({
    query: "(min-width: 767px)",
  });

  const renderSlides = useCallback(() => {
    return slides?.map((el, i) => (
      <SwiperSlide key={i}>
        <Slide
          image={!isDesktop ? el?.images.mobile : el?.images.desktop}
          title={el?.title}
          text={el?.text}
          quoteBy={el?.quoteBy}
          button={el?.button}
        />
      </SwiperSlide>
    ));
  }, [slides, isDesktop]);

  const renderMethod = useCallback(() => {
    return (
      <Swiper
        slidesPerView={!isDesktop ? numberOfSlides : 1}
        loop={true}
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={sliderClass}
      >
        {renderSlides()}
      </Swiper>
    );
  }, [isDesktop, numberOfSlides, sliderClass, renderSlides]);

  return renderMethod();
};

export default React.memo(Carousel);
