import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "./slideproduct.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect } from "react";


const categories =[
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories"
]

export default function Slideproduct() {
  
  const [products,setproducts]=useState({})
  useEffect(()=>{

    const fetchproducts = async () =>{
      try{
        const results = await Promise.all(
          categories.map(async (category)=>{
            const res =await fetch(`https://dummyjson.com/products/category/${category}`);
            const data = await res.json();
            return{[category]:data.products}
          })
        )
        const productsData = Object.assign({},...results);
        setproducts(productsData)

      } catch(error){
        console.error("error")
      }
    }
    fetchproducts()
  },[])

  return (
    <div className="slide_products slide">
      <div className="container">
        <div className="top_slide">
          <h2>Lorem ipsum dolor sit amet.</h2>
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
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
