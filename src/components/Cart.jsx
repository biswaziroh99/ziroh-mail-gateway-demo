import React, { useEffect, useState } from "react";
import products from "../resource/product";
import Cartitem from "./Cartitem";
import Cartcheckout from "./Cartcheckout";

const Cart = (props)=>{
    const [price,setPrice] = useState(0);
    let calPrice = 0;
    function totalPrice(){
        for(let i=1;i<=props.cart.length;i++){
            const x =  props.cart[i-1];
            calPrice = calPrice + (products[i].cost * products[x].quantity);
        }
        setPrice(calPrice);
    }
    return(
        <>
            <div class="cart-container flex-box">
                <div class="all-items-container">
                    <div class="mycart">
                        <h2>My Cart (<span id="cart-items">{props.cart.length}</span>)</h2>
                    </div>
                    {props.cart.length === 0 ? <p className="empty-cart">Your cart is empty.</p> : null}
                    {props.cart.map((prodId,index)=>{
                        return <Cartitem
                            key={index}
                            id={index} 
                            productId={prodId}
                            image={products[prodId].image}
                            name={products[prodId].name}
                            description={products[prodId].description}
                            cost={products[prodId].cost}
                            cart={props.cart}
                            setCart={props.setCart}
                            totalPrice={totalPrice}
                        />
                    })}
                </div>
                <Cartcheckout 
                    price={price}
                />
            </div>
        </>
    );
}

export default Cart;