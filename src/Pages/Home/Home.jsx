import Heroslider from "../../Components/Home/Heroslider";
import "./home.css";
import Slideproduct from "../../Components/Slideproducts/Slideproduct";
import { useState, useEffect } from "react";

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "tablets",
  "sunglasses",
  "sports-accessories",
];

export default function Home() {
  const [products, setproducts] = useState({});
  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`
            );
            const data = await res.json();
            return { [category]: data.products };
          })
        );
        const productsData = Object.assign({}, ...results);
        setproducts(productsData);
      } catch (error) {
        console.error("error");
      }
    };
    fetchproducts();
  }, []);
  console.log(products);

  return (
    <div>
      <Heroslider />
{categories.map((category)=>(
  
  <Slideproduct data={products[category]} title={category}  />
))}
    </div>
  );
}
