// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image1 from '../../assets/img/banner_Hero1.jpg'
import Image2 from '../../assets/img/banner_Hero2.jpg'
import Image3 from '../../assets/img/banner_Hero3.jpg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

// import required modules
import { Autoplay,Pagination } from "swiper/modules";

export default function Heroslider() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper 
          loop={true}
          pagination={true} 
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} 
          modules={[Autoplay,Pagination]} className="mySwiper">
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3> Microsoft Xbox <br/> 360 controller</h3>
                <p>Windows xp/10/7/8 ps3,Tv Box</p>
                <Link to={''} className="btn">Shop now</Link>
              </div>
              <img src={Image1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3> Microsoft Xbox <br/> 360 controller</h3>
                <p>Windows xp/10/7/8 ps3,Tv Box</p>
                <Link to={''} className="btn">Shop now</Link>
              </div>
              <img src={Image2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3> Microsoft Xbox <br/> 360 controller</h3>
                <p>Windows xp/10/7/8 ps3,Tv Box</p>
                <Link to={''} className="btn">Shop now</Link>
              </div>
              <img src={Image3} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
