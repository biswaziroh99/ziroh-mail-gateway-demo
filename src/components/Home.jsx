import React from "react";
import Productcard from "./Productcard";
import products from "../resource/product";

const Home = ()=>{
    return(
        <>
            <h1>This is Home</h1>
            <div className="row flex-box">
                {products.map((product,index)=>{
                    return <Productcard
                        key={index}
                        id={index} 
                        image={product.image}
                        name={product.name}
                        description={product.description}
                        cost={product.cost}
                    />
                })}
            </div>
        </>
    );
}

export default Home;