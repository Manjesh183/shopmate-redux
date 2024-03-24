import "./ProductCard.css";
import {add,remove} from "../store/cartSlice";
import { useDispatch } from "react-redux";
import {  useSelector } from "react-redux";
import { useEffect, useState } from "react";

export const ProductCard = ({ product }) => {
  const {id, name, price, image } = product;
  const [isItemInCart,setIsItemInCart]=useState(false);
  const dispatch = useDispatch();
const cartItems=useSelector(state=>state.cartState.cartList);


useEffect(()=>{
  const productInCart=cartItems.find(item=>item.id===id);
  if(productInCart){ //ie if productInCart is true
    setIsItemInCart(true);
  } else{
    setIsItemInCart(false);
  }
},[cartItems,id])
//if cartItems is updated,useEffect will execute again

  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        {isItemInCart?(<button className="removeBtn" onClick={() => dispatch(remove(product))}>Remove</button>):(<button className="addBtn" onClick={() => dispatch(add(product))}>Add To Cart</button>)}
  
        
        
      </div>
    </div>
  );
};

//line 14-added product goes to action.payload-->see in cartSlice.js