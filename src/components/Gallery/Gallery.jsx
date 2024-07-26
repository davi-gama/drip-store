import { register } from "swiper/element/bundle";
// Registrar os elementos customizados do Swiper
register();
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Gallery.css";

export function Gallery(props) {
  const [activeThumb, setActiveThumb] = useState();
  return (
    <div className="swiper-div">
      <Swiper
        loop={true}
        pagination={{ clickable: true }}
        navigation={props.navigation}
        grabCursor={true}
        thumbs={{
          swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
        }}
        modules={[Navigation, Thumbs]}
      >
        {props.customSlides
          ? props.customSlides.map((item, index) => (
              <SwiperSlide key={index}>{item.slide}</SwiperSlide>
            ))
          : null}
        {props.slides
          ? props.slides.map((item, index) => (
              <SwiperSlide key={index}>
                <img src={item.src} alt="slider" className="slide-item" />
              </SwiperSlide>
            ))
          : null}
      </Swiper>
      {props.showThumbs ? (
        <Swiper
          onSwiper={setActiveThumb}
          loop={true}
          pagination={{ clickable: true }}
          navigation={false}
          slidesPerView={4}
          spaceBetween={20}
          modules={[Navigation, Thumbs]}
          grabCursor={true}
          className="slide-thumbs"
        >
          {props.slides
            ? props.slides.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.src} alt="slider" className="slide-item" />
                </SwiperSlide>
              ))
            : null}
        </Swiper>
      ) : null}
    </div>
  );
}
