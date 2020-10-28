import { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './ProductDetail.css';
import CoverImage from '../img/cover.png'

const ProductDetail = (props) => {
  return (
    <div className="container">
      <div class="intro-section center-parent text-center"></div>
      {/* Product Image */}
      <div class="product-image">
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
            <select name="quantity" id="quantity">
              <option value="1">1</option>
              <option value="3" selected>3</option>
              <option value="6">6</option>
              <option value="12">12</option>
            </select>
            <span>Rolls</span>
          </div>
        </div>
        <div className="glazing">
          <div className="category box pb-2">
            <img src="../img/shaker.png" alt="glazing flavor" />
            <span>Glazing</span>
          </div>
          <div className="radios control-group">
            <label className="option">None
            <input type="radio" checked="checked" name="radio" />
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
        <span className="price pl-1">Total Amount: $3.99</span>
        <div className="add-to-cart-btns my-4">
          <span className="round-btn mr-1">Add to Cart</span>
          <span className="round-btn">Buy with &#xF8FF;Pay</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;