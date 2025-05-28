import ProductCard from "./ProductCard";
import "./slideproduct.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function Slideproduct({title}) {
  return (
    <div className="slide_products slide">
      <div className="container">
        <div className="top_slide">
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            reiciendis?
          </p>
        </div>
        <Swiper
          navigation={true}
          slidesPerView={5}
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          loop={true}
        >
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
