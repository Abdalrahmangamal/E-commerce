import React from "react";
import { IoStar } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { FaShare } from "react-icons/fa";

export default function ProductCard() {
  return (
    <div className="product">
      <div className="img_product">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoT20H7xvrd4peHbG68tmYr3V0Oi166v3nOA&s"
          alt=""
        />
      </div>
      <p className="name_product">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi minus
        maxime corporis.
      </p>
      <div className="stars">
        <IoStar />
        <IoStar />
        <IoStar />
        <IoStar />
        <FaStarHalfStroke />
      </div>
      <p className="price"><span>$1000</span></p>
      <div className="icons">
        <span>
          <FaCartArrowDown />
        </span>
        <span>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}
