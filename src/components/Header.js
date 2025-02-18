import { Link, NavLink } from "react-router-dom"; 
import Logo from "../assets/logo.png"
import "./Header.css";
import { UseSelector, useSelector } from "react-redux";

export const Header = () => {
  const cartItems=useSelector(state=>state.cartState.cartList);
  //above state is Redux state
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="Shopmate Logo" />
        <span>Redux Cart</span>
      </Link>
      <nav className="navigation">
        <NavLink to="/" className="link" end>Home</NavLink>
        <NavLink to="/cart" className="link">Cart</NavLink>
      </nav>
      <Link to="/cart" className="items">
        <span>Cart:{cartItems.length}</span>
      </Link>
    </header>
  )
}
