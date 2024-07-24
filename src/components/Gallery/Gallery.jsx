import { HomePageSlide } from "../HomePageSlide/HomePageSlide";
import { register } from "swiper/element/bundle";
// Registrar os elementos customizados do Swiper
register();
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Gallery.css";

function HomePageSlider(showHomePageSlide) {
  if (showHomePageSlide) {
    return (
      <>
        <SwiperSlide>
          <HomePageSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HomePageSlide />
        </SwiperSlide>
        <SwiperSlide>
          <HomePageSlide />
        </SwiperSlide>
      </>
    );
  }
}

function Slides(slides) {
  if (slides != undefined) {
    return slides.map((item, index) => (
      <SwiperSlide key={index}>
        <img src={item.src} alt="slider" className="slide-item" />
      </SwiperSlide>
    ));
  }
}

export function Gallery(props) {
  return (
    <div className="swiper-div">
      <Swiper
        loop={true}
        pagination={{ clickable: true }}
        navigation={props.navigation}
      >
        {HomePageSlider(props.showHomePageSlide)}
        {Slides(props.slides)}
      </Swiper>
    </div>
    
  );
}
