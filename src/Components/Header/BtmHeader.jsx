import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { FaUserPlus } from "react-icons/fa6";
import "./header.css";

const NavLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Accessories", link: "/accessories" },
  { title: "Blog", link: "/blog" },
  { title: "Contact", link: "/contact" },
];

export default function BtmHeader() {
  const [categories, setcategories] = useState([]);
  const location = useLocation()
  const [iscategoryopen,setiscategoryopen]=useState(false)
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setcategories(data));
  }, []);

  console.log(categories);

  return (
    <div className="Btm_header">
      <div className="container">
        <nav className="nav">
          <div className="category_nav">
            <div className="category_btn" onClick={()=>{setiscategoryopen(!iscategoryopen)}}>
              <IoMdMenu />
              <p>Browse Category</p>
              <IoMdArrowDropdown />
            </div>
            <div className={`category_nav_list ${iscategoryopen== true ?"active":""} `}>
              {categories.map((category) => (
                <Link to={category.slug}>{category.name}</Link>
              ))}
            </div>
          </div>
          <div className="nav_links">
            {NavLinks.map((item) => (
              <li className={location.pathname ==item.link? "active":""}>
                <Link to={item.link}>{item.title}</Link>
              </li>
            ))}
          </div>
        </nav>
        <div className="sign_reges_icon">
          <Link to={"/"}>
            <PiSignInBold />
          </Link>
          <Link to={"/"}>
            <FaUserPlus />
          </Link>
        </div>
      </div>
    </div>
  );
}
