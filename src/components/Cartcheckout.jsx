import React from "react"
import { propTypes } from "react-bootstrap/esm/Image";

const Cartcheckout = (props)=>{
    return(
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
                                <span class="value" id="numItems"></span>
                            </div>
                        </div>
                        <div class="details">
                            <div class="key">
                                Price:
                                <span class="value" id="price">{props.price}</span>
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
                            <span class="value" id="total"></span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="place-order">
                <button href="" class="place-btn">Checkout</button>
            </div>
        </div>
    ); 
}

export default Cartcheckout;
