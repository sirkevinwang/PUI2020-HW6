import { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './ProductDetail.css';
import CoverImage from '../img/cover.png'

export default function ProductDetail() {
  return (
    <div class="order-info">
      <div class="product-info pb-4">
        <h3>The Original</h3>
        <span class="price">$3.99 / pc</span>
      </div>
      <div class="quantity pb-2">
        <div class="category box pb-2">
          <img src="../img/num.png" alt="quantity" />
          <span>Quantity</span>
        </div>
        <div class="dropdown control-group">
          <select name="quantity" id="quantity">
            <option value="1">1</option>
            <option value="3" selected>3</option>
            <option value="6">6</option>
            <option value="12">12</option>
          </select>
          <span>Rolls</span>
        </div>
      </div>
      <div class="glazing">
        <div class="category box pb-2">
          <img src="../img/shaker.png" alt="glazing flavor" />
          <span>Glazing</span>
        </div>
        <div class="radios control-group">
          <label class="option">None
            <input type="radio" checked="checked" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="option">Sugar - Milk
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="option">Vanilla - Milk
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
          <label class="option">Double - Chocolate
            <input type="radio" name="radio" />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
      <span class="price pl-1">Total Amount: $3.99</span>
      <div class="add-to-cart-btns my-4">
        <a href="./shop.html"><span class=" round-btn mr-1">Add to Cart</span></a>
        <a href="./shop.html"><span class=" round-btn">Buy with &#xF8FF;Pay</span></a>
      </div>
    </div>
  );
}