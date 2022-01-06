import React, { useEffect, useState } from "react";
import products from "../resource/product";
import Cartitem from "./Cartitem";
import Cartcheckout from "./Cartcheckout";
import Invoice from "./invoice";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
// window.html2canvas = html2canvas;

const Cart = (props) => {

  const [invoice,setInvoice] = useState(false);
  const [price, setPrice] = useState(0);
  const handleCheckout = () => { props.cart.length >= 1 ? setInvoice(true) : alert("Your cart is empty!")}
  const handlePayNow = () => {
    const element = document.querySelector("#chk");
    html2canvas(element).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 10, 10);
      // pdf.save('test.pdf');
      var formdata = new FormData();
      const fileInput = new File([pdf.output('blob')],'invoice.pdf');
      formdata.append("jsonData",JSON.stringify({to:['biswajit.chanda@ziroh.com'],subject: 'gatewaytest', body:element.innerHTML}));
      formdata.append("file", fileInput);
      console.log(pdf);
      console.log(formdata);
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
      
      fetch("http://34.222.18.30:8090/omail/gateway/send", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error)); 
    }).catch((err)=>console.log(err));
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
      </div>
      <div className="invoice-container" style={{display: invoice ? 'block' : 'none'}} onClick={()=>{
        setInvoice(false);
      }}>
        <span>X</span>
          <Invoice  cart={props.cart} price={price} handlePayNow={handlePayNow} />
      </div>
    </>
  );
};

export default Cart;
