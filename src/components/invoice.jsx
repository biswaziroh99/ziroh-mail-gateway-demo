import React from "react";
import products from "../resource/product";

const Invoice = (props) =>{
    return(
        <div className="card invoice-card">
        <div className="card" id="chk">
            <div className="card-header">Invoice</div>
            <div className="user-greet card-header">Hello, Abhishek</div>
            <div className="user-details">
                <div>
                    <b>Order No:</b> <br/>
                    DX-BBF0-2 17511568-161121<br/>
                    <b>Delivery expected by:</b> <br/>
                    Mon 17 Jan 2022 between<br/>
                    10:30 AM and 12:30 PM
                    
                </div>
                <div>
                    Your order will be dilivered to this adress: <br/>
                    Zam II M,<br/>
                    A277 Fblock,<br/>
                    Electronic City Phase-1,<br/>
                    Banglore - 560100<br/>
                    Phone Number: 6361579615    
                </div>
            </div>
            <table className="table">
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
                    <td>{props.price}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <button onClick={props.handlePayNow}>Pay Now</button>
        </div>
    )
}

export default Invoice;