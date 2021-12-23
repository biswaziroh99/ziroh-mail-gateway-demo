import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import products from "../resource/product";
import Cartitem from "./Cartitem";
import Cartcheckout from "./Cartcheckout";
import productOne from '../images/products/product-1.jpg';

const Cart = (props)=>{
    const [price,setPrice] = useState(0);
    let calPrice = 0;
    function totalPrice(){
        for(let i=1;i<=props.cart.length;i++){
            calPrice = calPrice + products[i].cost;
        }
        setPrice(calPrice);
    }
    useEffect(totalPrice,[]);

    return(
        <>
            <div class="cart-container flex-box">
                <div class="all-items-container">
                    <div class="mycart">
                        <h2>My Cart (<span id="cart-items"></span>)</h2>
                    </div>
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