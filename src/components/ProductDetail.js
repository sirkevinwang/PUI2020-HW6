import React, { useState } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './ProductDetail.css';
import CoverImage from '../img/cover.png'


const ProductDetail = (props) => {
  const [quantity, setQuantity] = useState(1);
  
  function handleChange(event) {
    let value = event.target.value;
    setQuantity(value)
  };

  return (
    <div className="container">
      <div className="intro-section center-parent text-center"></div>
      {/* Product Image */}
      <div className="product-image">
        <img src={props.imgSrc} alt={props.productName} />
      </div>
      {/* Add to Cart UI */}
      <div className="order-info product-detail">
        <div className="product-info pb-4">
          <h3>{props.productName}</h3>
          <span className="price">${props.price} / pc</span>
        </div>
        <div className="quantity pb-2">
          <div className="category box pb-2">
            <img src="../img/num.png" alt="quantity" />
            <span>Quantity</span>
          </div>
          <div className="dropdown control-group">
            <select name="quantity" id="quantity" onChange={(e) => handleChange(e)}>
              <option value="1" defaultChecked>1</option>
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="12">12</option>
            </select>
            <span id="quantity-unit">Roll{quantity === "1" ? "" : "s"}</span>
          </div>
        </div>
        <div className="glazing">
          <div className="category box pb-2">
            <img src="../img/shaker.png" alt="glazing flavor" />
            <span>Glazing</span>
          </div>
          <div className="radios control-group">
            <label className="option">None
            <input type="radio" defaultChecked name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="option">Sugar - Milk
            <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="option">Vanilla - Milk
            <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="option">Double - Chocolate
            <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <span className="price pl-1">Total Amount: ${quantity * props.price}</span>
        <div className="add-to-cart-btns my-4">
          <span className="round-btn mr-1">Add to Cart</span>
          <span className="round-btn">Buy with &#xF8FF;Pay</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;