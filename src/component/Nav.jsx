import logo from "./../img/logo.svg";
import iconCart from "./../img/cart.svg";
import { useDataCart } from "../context/dataContext";

import { Link } from "react-router-dom";
export default function Nav() {
  const { cart } = useDataCart();
  return (
    <nav>
      <Link to={"/"}>
        <img src={logo} alt="" className="logo" />
      </Link>
      <div>
        <ul>
          <li></li>
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/product/all"}>
            <li>Products</li>
          </Link>
          <Link to={"/cart"}>
            <li>Cart</li>
          </Link>
        </ul>
      </div>
      <Link to={"/cart"} className="cart-icon">
        <span style={{ display: cart.length <= 0 && "none" }}>
          {cart.length}
        </span>
        <img src={iconCart} alt="" />
      </Link>
    </nav>
  );
}
