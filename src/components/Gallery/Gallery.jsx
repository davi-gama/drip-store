import { register } from "swiper/element/bundle";
// Registrar os elementos customizados do Swiper
register();
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Gallery.css";

export function Gallery(props) {
  return (
    <div className="swiper-div">
      <Swiper
        loop={true}
        pagination={{ clickable: true }}
        navigation={props.navigation}
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
    </div>
    
  );
}
