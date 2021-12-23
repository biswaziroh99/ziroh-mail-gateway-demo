import React, { useState } from "react";
import products from "../resource/product";

const Cartitem = (props)=>{
    const [quantity,setQuantity] = useState(1);
    function handleChange(e){
        const {name,value} = e.target;
        setQuantity(value)
    }
    return(
        <>
            <div class="items flex-box">
                <div class="item-img">
                    <img src={props.image} alt=""/>
                </div>
                <div class="item-details flex-box">
                    <h4>{props.name}</h4>
                    <p>{props.description}</p>
                    <p> <span class="">&#8377;<span class="price">{props.cost}</span></span> <del>&#8377;<span class="not-price">5000</span></del>
                        <span class="off">11% off </span> Delivery Charge: <span class="delivery-charge">40</span>
                    </p>
                    <p>Quantity: <input type="number" class="quantity" onChange={handleChange} max="10" min="1" name="quantity" value={quantity}/></p>
                    <p class="fd">FREE DILIVERY</p>
                </div>
            </div>
        </>
    );
}

export default Cartitem;