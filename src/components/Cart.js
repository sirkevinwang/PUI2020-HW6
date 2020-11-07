import './Cart.css';
import CoverImage from '../img/cover.png'

import OriginalImage from '../img/item-images/the-og.png';
import BlackberryImage from '../img/item-images/bb.png';

const Cart = (props) => {
  const skuMap = {
    "1": {
      name: "The Original",
      img: OriginalImage
    },
    "2": {
      name: "Blackberry Delight",
      img: BlackberryImage
    }
  }
  const glazingNames = {
    "1": "No Glazing",
    "2": "Sugar Milk Glazing",
    "3": "Vanilla Milk Glazing",
    "4": "Double Chocolate Glazing",
  };

  const popItem = (i) => {
    const newArr = props.cart;
    newArr.splice(i, 1);
    console.log(newArr);
    props.cartSetter([...newArr]);
    props.cartSizeSetter(newArr.length);
  }

  const calculateSubtotal = () => {
    const subtotal = props.cart.reduce((a, b) => parseFloat(a) + parseFloat(b.perItemPricing) * b.quantity, 0);
    return subtotal.toFixed(2)
  }

  const calculateTaxes = () => {
    const totalTax = parseFloat(calculateSubtotal()) * parseFloat("0.07")
    return totalTax.toFixed(2)
  }

  const calculateTotal = () => {
    const total = parseFloat(calculateSubtotal()) + parseFloat(calculateTaxes())
    return total.toFixed(2)
  }

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
            <h3 className="text-center cover-h">Shopping Cart</h3>
          </div>
        </div>
      </div>
      <div style={{display: props.cartSize > 0 ? "none" : "block"}}><h5 className="p-4">Your cart is empty.</h5></div>
      <div id="cart-container" style={{ display: props.cartSize > 0 ? "block" : "none" }}>
        {props.cart.map((cartItem, index) =>
          <div id="items-wrapper" key={index}>
            <div className="cart-item">
              <div className="column cart-item-image fill">
                <img src={skuMap[cartItem.sku].img} alt="cinnamon roll"></img>
              </div>
              <div className="column cart-item-info">
                <h3 className="item-name">{skuMap[cartItem.sku].name}</h3>
                <div className="item-price"><span>${cartItem.perItemPricing} / pc</span></div>
                <div className="item-config"><span>{glazingNames[cartItem.glazing]}</span></div>
              </div>
              <div className="column cart-item-actions">
                <div className="dropdown control-group">
                  <span id="quantity-unit">{cartItem.quantity} Roll{cartItem.quantity === "1" ? "" : "s"}</span>
                </div>
                <div><span className="btn" onClick={() => popItem(index)}>Remove</span></div>
              </div>
            </div>
          </div>
        )}
        
        <hr className="divider"></hr>
        <div id="receipt">
          <div className="total-placeholder"></div>
          <div className="total-display">
            <table className="full-width">
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td className="total-second-col">${calculateSubtotal()}</td>
                </tr>
                <tr>
                  <td>Shipping</td>
                  <td className="total-second-col">FREE</td>
                </tr>
                <tr>
                  <td>Estimated tax for 15232</td>
                  <td className="total-second-col">${calculateTaxes()}</td>
                </tr>
              </tbody>
            </table>
            <hr className="divider-2"></hr>
            <table className="full-width">
              <tbody>
                <tr>
                  <td className="total-row">Total</td>
                  <td className="total-second-col total-row">${calculateTotal()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="checkout-btns my-4">
          <span className="round-btn mr-1">Check Out</span>
          <span className="round-btn">Buy with &#xF8FF;Pay</span>
        </div>
      </div>
    </div>

  );
}

export default Cart;