import React, { useEffect, useState } from "react";
import products from "../resource/product";
import Cartitem from "./Cartitem";
import Cartcheckout from "./Cartcheckout";
import jsPDF from "jspdf";

const Cart = (props) => {
  const [price, setPrice] = useState(0);
  const handleCheckout = () => {
    const element = document.querySelector("#chk");
    var pdf = new jsPDF("landscape", "pt", "A4");
    // var pdf = new jsPDF('p', 'in', [612, 792]);
    // var pdf = new jsPDF({
    //   orientation: "landscape",
    //   unit: "px",
    //   format: [1280,800]
    // });
    console.log(element);

    console.log(pdf);

    pdf.html(element, {
      callback: () => {
        pdf.save("test.pdf");
      },
    });
  };
  function totalPrice(prodId) {
    let calPrice = 0;
    for (let i = 0; i < props.cart.length; i++) {
      calPrice +=
        products[props.cart[i].productId].cost * props.cart[i].quantity;
    }

    console.log(prodId);
    console.log(calPrice);

    setPrice(calPrice);
  }

  useEffect(() => {
    totalPrice("1");
  }, [props.cart]);
  return (
    <>
      <div className="cart-container flex-box">
        <div className="all-items-container">
          <div className="mycart">
            <h2>
              My Cart (<span id="cart-items">{props.cart.length}</span>)
            </h2>
          </div>
          {props.cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : null}
          {props.cart.map((prodId, index) => {
            return (
              <Cartitem
                key={index}
                id={index}
                productId={prodId.productId}
                image={products[prodId.productId].image}
                name={products[prodId.productId].name}
                description={products[prodId.productId].description}
                cost={products[prodId.productId].cost}
                cart={props.cart}
                setCart={props.setCart}
                totalPrice={totalPrice}
                price={price}
                setPrice={setPrice}
              />
            );
          })}
        </div>
        <Cartcheckout
          items={props.cart.length}
          price={price}
          check={props.check}
          cart={props.cart}
          handleCheckout={handleCheckout}
        />
        {props.cart.length && (
          <div className="card ">
            <div className="card-header">Invoice</div>

            <table className="table" id="chk">
              <thead className="table-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Cost</th>
                </tr>
              </thead>
              <tbody>
                {props.cart.map((prods, index) => {
                  return (
                    <tr>
                      <th scope="row">{index}</th>
                      <td>{products[prods.productId].name}</td>
                      <td>{prods.quantity}</td>
                      <td>{products[prods.productId].cost}</td>
                    </tr>
                  );
                })}
                <tr>
                  <th scope="row" colSpan={3}>
                    Total Amount
                  </th>
                  <td>{price}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
