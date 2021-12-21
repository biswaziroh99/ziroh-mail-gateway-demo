import React from "react";
import productOne from '../images/products/product-1.jpg';

const Productcard = (props)=>{
    return(
        <div className="col-4 p-b-20">
            {/* <a href="#" className=""> */}
                <div className="shadow-box">
                    <div className="photo">
                        <img src={props.image} alt=""/>
                    </div>
                    <div className="discription">
                        <h3>{props.name}</h3>
                        <p>{props.description}</p>
                        <p className="m-t-10"> <span className="price">&#8377;{props.cost}</span> <del className="not-price">&#8377;1500</del> <span
                            className="off">33%</span></p>
                    </div>
                    <div className="buttons">
                        <button className="add">Add to cart</button>
                        <button className="rem">Remove from cart</button>
                    </div>
                </div>
            {/* </a> */}
        </div>
    );
    
}

export default Productcard;