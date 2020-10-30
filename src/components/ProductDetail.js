import React, { useState } from 'react';
import { Link } from "react-router-dom";
import useLocalStorage from '../hooks/UseLocalStorage.js';
import './ProductDetail.css';

import quantImg from '../img/num.png';
import shakerImg from '../img/shaker.png';


const ProductDetail = (props) => {
  const glazingPricing = { 
    "1": "0", 
    "2": "0.3", 
    "3": "0.3", 
    "4": "1"
  };
  const [quantity, setQuantity] = useState(1);
  const [glazing, setGlazing] = useState('1');
  const [cart, setCart] = useLocalStorage('cart', []);

  const updateGlazing = (e) => {
    if (e.target.checked) {
      setGlazing(e.target.value);
    }
  }
  
  function calculateTotalPrice() {
    const value = parseFloat(calculatePerItemPricing()) * quantity;
    return value.toFixed(2);
  }
  
  function calculatePerItemPricing() {
    const value = parseFloat(props.price) + parseFloat(glazingPricing[glazing]);
    return value.toFixed(2);
  }

  function handleQuantityChange(event) {
    let value = event.target.value;
    setQuantity(value);
  };

  function handleAddToCart() {
    const productToAdd = {
      quantity: quantity,
      glazing: glazing,
      perItemPricing: calculatePerItemPricing()
    };

    const cartArr = cart;
    cartArr.push(productToAdd);
    setCart([...cartArr]);
    props.addCartCallback();
  }

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
          <span className="price">${calculatePerItemPricing()} / pc</span>
        </div>
        <div className="quantity pb-2">
          <div className="category box pb-2">
            <img src={quantImg} alt="quantity" />
            <span>Quantity</span>
          </div>
          <div className="dropdown control-group">
            <select name="quantity" id="quantity" onChange={(e) => handleQuantityChange(e)}>
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
            <img src={shakerImg} alt="glazing flavor" />
            <span>Glazing</span>
          </div>
          <div className="radios control-group">
            <label className="option">None
            <input type="radio"
                name="radio"
                value='1'
                checked={glazing === '1'}
                onChange={updateGlazing} />
              <span className="checkmark"></span>
            </label>
            <label className="option">Sugar - Milk
            <input type="radio"
                name="radio"
                value='2'
                checked={glazing === '2'}
                onChange={updateGlazing} />
              <span className="checkmark"></span>
            </label>
            <label className="option">Vanilla - Milk
            <input type="radio"
                name="radio"
                value='3'
                checked={glazing === '3'}
                onChange={updateGlazing} />
              <span className="checkmark"></span>
            </label>
            <label className="option">Double - Chocolate
            <input type="radio"
                name="radio"
                value='4'
                checked={glazing === '4'}
                onChange={updateGlazing} />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
        <span className="price pl-1">Total Amount: ${calculateTotalPrice()}</span>
        <div className="add-to-cart-btns my-4">
          <span className="round-btn mr-1" onClick={handleAddToCart}>Add to Cart</span>
          <span className="round-btn">Buy with &#xF8FF;Pay</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;