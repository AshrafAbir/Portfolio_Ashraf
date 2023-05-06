import React from "react";
import "./productList.css";
import Product from "./Product";
import { products } from "../data";
const ProductList = () => (
  <div className="pl">
    <div className="pl-text">
      <div className="pl-title">Create & inspire. It's Ashraf</div>
      <div className="pl-des">
        Ashraf is a creative portfolio that your work has been waiting for.
        Beautiful homes, stunning portfolio styles & a whole lot more awaits
        inside.
        <h4>Here is some animated pictures that inspire me most</h4>
      </div>
      <div className="pl-list">
        
         {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))} 
        
        
      </div>
    </div>
  </div>
);

export default ProductList;
