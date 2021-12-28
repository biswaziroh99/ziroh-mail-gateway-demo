import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import products from "../resource/product";

const Cartcheckout = (props) => {
  const handleCheckout = () => {
    if (props.check) {
      props.setCreateTable(true);
    }
  };
  return (
    <div class="bill-place-order">
      <div class="bill-area">
        <div class="bill">
          <div class="bill-head flex-box">
            <div class="head">
              <h3>Your Cart Details</h3>
            </div>
          </div>
          <div class="bill-body">
            <div class="details">
              <div class="key">
                Items:
                <span class="value" id="numItems">{props.items}</span>
              </div>
            </div>
            <div class="details">
              <div class="key">
                Price:
                <span class="value" id="price">
                  {props.price}
                </span>
              </div>
            </div>
            <div class="details">
              <div class="key">
                Discount:
                <span class="value" id="discount"></span>
              </div>
            </div>
            <div class="details">
              <div class="key">
                Delivery Charge:
                <span class="value" id="dCharge"></span>
              </div>
            </div>
          </div>
          <div class="bill-bottom">
            <div class="key">
              <strong>Total Amount:</strong>
              <span class="value" id="total">
                {props.price}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="place-order">
        <button href="" class="place-btn" onClick={props.handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cartcheckout;
