import React from "react";
import Productcard from "./Productcard";
import products from "../resource/product";

const Home = (props)=>{
    return(
        <>
            <div className="container">
                <div className="home-heading">
                    <h1>Products Listing</h1>
                    <hr/>
                </div>
                <div className="row flex-box">
                    {Object.keys(products).map((prodId,index)=>{
                        return <Productcard
                            key={index}
                            id={index} 
                            image={products[prodId].image}
                            name={products[prodId].name}
                            description={products[prodId].description}
                            cost={products[prodId].cost}
                            productId={prodId}
                            cart={props.cart}
                            setCart={props.setCart}
                        />
                    })}
                </div>
            </div>
        </>
    );
}

export default Home;