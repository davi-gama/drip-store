import { register } from "swiper/element/bundle";
// Registrar os elementos customizados do Swiper
register();
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Gallery.css";

export function Gallery(props) {
  return (
    <div className="swiper-div">
      <Swiper
        loop={true}
        pagination={{ clickable: true }}
        navigation={props.navigation}
      >
        {props.images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.src} alt="Slider" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    
  );
}
