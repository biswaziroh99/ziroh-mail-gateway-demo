import React, { useEffect, useState } from "react";
import products from "../resource/product";
import productOne from "../images/products/product-1.jpg";

const Productcard = (props) => {
  // const [itemAddedToCart,setItemAddedToCart] = useState(false);
  const [productId, setProductID] = useState();
  useEffect(() => {
    setProductID(props.productId);
  }, []);
  function handleClickAdd(e) {
    e.preventDefault();
    // setItemAddedToCart(true);
    products[props.productId].inCart = true;
    props.setCart([...props.cart, { productId, quantity: 1 }]);
  }
  function handleClickRem(e) {
    e.preventDefault();
    // setItemAddedToCart(false);
    products[props.productId].inCart = false;
    const newCart = props.cart.filter((prodId) => prodId !== productId);
    props.setCart(newCart);
  }
  return (
    <div className="col-4 p-b-20">
      {/* <a href="#" className=""> */}
      <div className="shadow-box">
        <div className="photo">
          <img src={props.image} alt="" />
        </div>
        <div className="discription">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <p className="m-t-10">
            {" "}
            <span className="price">&#8377;{props.cost}</span>{" "}
            <del className="not-price">&#8377;1500</del>{" "}
            <span className="off">33%</span>
          </p>
        </div>
        <div className="buttons">
          {products[props.productId].inCart ? (
            <button className="rem" onClick={handleClickRem}>
              Remove from cart
            </button>
          ) : (
            <button className="add" onClick={handleClickAdd}>
              Add to cart
            </button>
          )}
        </div>
      </div>
      {/* </a> */}
    </div>
  );
};

export default Productcard;
