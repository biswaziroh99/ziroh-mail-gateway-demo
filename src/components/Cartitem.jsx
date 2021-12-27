import React, { useEffect, useState } from "react";
import products from "../resource/product";

const Cartitem = (props) => {
  const [quantity, setQuantity] = useState(1);
  function handleClickInc() {
    setQuantity(quantity + 1);
    props.cart.map((product) => {
      if (product.productId === props.productId) {
        product.quantity = quantity;
        let newPrice = props.price;
        newPrice += products[product.productId].cost;
        props.setPrice(newPrice);
      }
    });
  }
  function handleClickDec() {
    console.log(props.cart);
    if (quantity > 1) {
      setQuantity(quantity - 1);
      props.cart.map((product) => {
        if (product.productId === props.productId) {
          product.quantity = quantity;
          let newPrice = props.price;
          newPrice -= products[product.productId].cost;
          props.setPrice(newPrice);
        }
      });
    } else if (quantity === 1) {
      const newCart = props.cart.filter((item) => {
        let newPrice = props.price;
        newPrice -= products[props.productId];
        props.setPrice(newPrice);
        products[props.productId].inCart = false;
        if (item.productId !== props.productId) return true;
        return false;
      });
      props.setCart(newCart);
    }
  }
  useEffect(() => {
    console.log(quantity);
    products[props.productId].quantity = quantity;
    // props.totalPrice();
  }, []);
  return (
    <>
      <div class="items flex-box">
        <div class="item-img">
          <img src={props.image} alt="" />
        </div>
        <div class="item-details flex-box">
          <h4>{props.name}</h4>
          <p>{props.description}</p>
          <p>
            {" "}
            <span class="">
              &#8377;<span class="price">{props.cost}</span>
            </span>{" "}
            <del>
              &#8377;<span class="not-price">5000</span>
            </del>
            <span class="off">11% off </span> Delivery Charge:{" "}
            <span class="delivery-charge">40</span>
          </p>
          <p className="d-flex">
            Quantity:{" "}
            <button
              className="btn btn-outline-danger btn-circle"
              onClick={handleClickDec}
            >
              -
            </button>{" "}
            <input
              type="number"
              class="quantity"
              max="10"
              min="1"
              name="quantity"
              value={quantity}
              className="form-control text-center"
            />{" "}
            <button
              className="btn btn-outline-success btn-circle"
              onClick={handleClickInc}
            >
              +
            </button>
          </p>
          <p class="fd">FREE DILIVERY</p>
        </div>
      </div>
    </>
  );
};

export default Cartitem;
