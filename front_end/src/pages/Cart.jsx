import { getCart, updateQuantity, removeFromCart } from "../utils/cart";
import { useState } from "react";
import "./style/Cart.css";
import { Link } from "react-router-dom";


export default function Cart() {
  const [cart, setCart] = useState(getCart());

  const changeQty = (id, delta) => {
    updateQuantity(id, delta);
    setCart(getCart());
  };

  const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
  <section className="cart-section">
    <div className="cart-box">
      <h2 className="cart-title">Giỏ hàng</h2>

      {cart.map(item => (
        <div className="cart-item" key={item.ProductID}>
  <div className="cart-row">
    <div className="cart-left">
      <div className="cart-name">{item.name}</div>
      <div className="cart-price">
        {item.price.toLocaleString()} ₫
      </div>
    </div>

    <div className="cart-right">
      <div className="qty-wrapper">
        <button onClick={() => changeQty(item.ProductID, -1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => changeQty(item.ProductID, 1)}>+</button>
      </div>

      <button
        className="remove-text"
        onClick={() => {
          removeFromCart(item.ProductID);
          setCart(getCart());
        }}
      >
        Erase
      </button>
    </div>
  </div>
</div>


      ))}

      <div className="cart-footer">
        <div className="total">
          <span>Total</span>
          <span>{total.toLocaleString()} ₫</span>
        </div>
<Link to="/shop">
  <button className="return">Shopping</button>
</Link>

        <button className="checkout">Pay</button>
      </div>
    </div>
  </section>
);

}
