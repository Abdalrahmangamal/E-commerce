import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.png";
import { FaSearch } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";
import './header.css';
export default function TopHeader() {
  return (
    <div className="top_header">
      <div className="container">
        <Link to={"/"}>
          
          <img src={Logo} alt="logo"  className="logo"/>
        </Link>
        <form action="" className="search_box">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search For Products"
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>
        <div className="header_icons">
          <div className="icon">
            <CiHeart />
            <span className="count">0</span>
          </div>
          <div className="icon">
            <TiShoppingCart />
            <span className="count">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}
