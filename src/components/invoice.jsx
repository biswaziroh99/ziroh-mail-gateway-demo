import React from "react";
import products from "../resource/product";

const Invoice = (props) =>{
    return(
        <div className="card invoice-card" >
        <span onClick={()=> {props.setInvoice(false)}}>X</span>
        <div className="card" id="chk" >
            <div className="card-header" style={{padding: '0.5rem 1rem',marginBottom: '0',backgroundColor: 'rgba(0, 0, 0, 0.03)',borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}}>Invoice</div>
            <div className="user-greet card-header" style={{padding: '0.5rem 1rem',marginBottom: '0',backgroundColor: 'rgba(0, 0, 0, 0.03)',borderBottom: '1px solid rgba(0, 0, 0, 0.125)'}}>Hello, Abhishek</div>
            <div className="user-details" style={{display: 'flex',fontSize: '12px', justifyContent: 'space-between', padding: '20px',backgroundColor: '#e0e0e0'}}>
                <div sytle={{display: 'inline'}}>
                    <b>Order No:</b> <br/>
                    DX-BBF0-2 17511568-161121<br/>
                    <b>Delivery expected by:</b> <br/>
                    Mon 17 Jan 2022 between<br/>
                    10:30 AM and 12:30 PM
                    
                </div>
                <div sytle={{display: 'inline'}}>
                    Your order will be dilivered to this adress: <br/>
                    Zam II M,<br/>
                    A277 Fblock,<br/>
                    Electronic City Phase-1,<br/>
                    Banglore - 560100<br/>
                    Phone Number: 6361579615    
                </div>
            </div>
            <table className="table" style={{
                width: '100%',
                marginBottom: '1rem',
                color: '#212529',
                verticAllign: 'top',
                borderColor: '#dee2e6',
                captionSide: 'bottom',
                borderCollapse: 'collapse',
                boxSizing: 'border-box',
                display: 'table',
                wordWrap: 'break-word',
                fontSize: '12px'
            }}>
                <thead className="table-dark" style={{
                    verticalAlign: 'bottom',
                    color: '#fff',
                    borderColor: '#373b3e',
                    borderStyle: 'solid',
                    borderWidth: '0',
                    textIndent: 'initial',
                    borderSpacing: '2px',
                    background: '#000'
                }}>
                <tr style={{
                    borderColor: 'inherit',
                    borderStyle: 'solid',
                    borderidth: '0',
                    display: 'table-row',
                    verticalAlign: 'inherit',
                    color: 'rgb(255, 255, 255)',
                    textIndent: 'initial',
                    borderSpacing: '2px',
                    captionSide: 'bottom',
                    borderCollapse: 'collapse',
                    overflowWrap: 'break-word',
                }}>
                    <th scope="col">#</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Cost</th>
                </tr>
                </thead>
                <tbody style={{
                    borderTop: '2px solid currentColor',
                    verticalAlign: 'inherit',
                    borderColor: 'inherit',
                    borderStyle: 'solid',
                    borderWidth: '0',
                    display: 'table-row-group',
                    color: 'rgb(33, 37, 41)',
                    captionSide: 'bottom',
                    borderCollapse: 'collapse',
                    overflowWrap: 'break-word',
                    textIndent: 'initial',
                    borderSpacing: '2px'
                }}>
                {props.cart.map((prods, index) => {
                    return (
                    <tr style={{
                    borderColor: 'inherit',
                    borderStyle: 'solid',
                    borderidth: '0',
                    display: 'table-row',
                    verticalAlign: 'inherit',
                    color: 'rgb(0, 0, 0)',
                    textIndent: 'initial',
                    borderSpacing: '2px',
                    captionSide: 'bottom',
                    borderCollapse: 'collapse',
                    overflowWrap: 'break-word',
                }}>
                        <th scope="row">{index + 1}</th>
                        <td>{products[prods.productId].name}</td>
                        <td>{prods.quantity}</td>
                        <td>{products[prods.productId].cost}</td>
                    </tr>
                    );
                })}
                <tr style={{
                    borderColor: 'inherit',
                    borderStyle: 'solid',
                    borderidth: '0',
                    display: 'table-row',
                    verticalAlign: 'inherit',
                    color: 'rgb(0, 0, 0)',
                    textIndent: 'initial',
                    borderSpacing: '2px',
                    captionSide: 'bottom',
                    borderCollapse: 'collapse',
                    overflowWrap: 'break-word',
                }}>
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