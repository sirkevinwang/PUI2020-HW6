import './Cart.css';
import CoverImage from '../img/cover.png'
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import OriginalImage from '../img/item-images/the-og.png';
import BlackberryImage from '../img/item-images/bb.png';

const Cart = (props) => {
  return (
    <div>
      <div className="top-cover">
        {/* Cover Image */}
        <div className="intro-section center-parent text-center" style={{
          backgroundImage: `linear-gradient(
        rgba(0, 0, 0, 0.12), 
        rgba(0, 0, 0, 0.12)
      ), url(${CoverImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color: 'white'
        }}>
          <div className="center s-center">
            <h3 className="text-center">Shopping Cart</h3>
          </div>
        </div>
      </div>
      <div id="cart-container">
        <div className="cart-item">
          <div className="column">
            <img src={OriginalImage}></img>
          </div>
          <div className="column middle">
            <h3>Classic</h3>
            <span>$3.99 / pc</span><br></br>
            <span>Vanilla Milk Glazing</span>
          </div>
          <div className="column side">
            <a>Edit</a>
            <br></br>
            <a>Delete</a>
          </div>
        </div>
        <hr></hr>
        <div id="receipt">
          <table className="full-width">
            <tbody>
              <tr>
                <td>Subtotal</td>
                <td>$3.99</td>
              </tr>
              <tr>
                <td>Shipping</td>
                <td>FREE</td>
              </tr>
              <tr>
                <td>Estimated tax for 15232</td>
                <td>$0.28</td>
              </tr>
              <hr></hr>
              <tr>
                <td>Total</td>
                <td>$4.27</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="add-to-cart-btns my-4">
          <span className="round-btn mr-1">Check Out</span>
          <span className="round-btn">Buy with &#xF8FF;Pay</span>
        </div>
      </div>
    </div>

  );
}

export default Cart;