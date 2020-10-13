import React from 'react';

const ProductsListItem = ({ product: { productName, price } }) => {
    console.log("there")
    return (
        <div style={{ width: "80px", height: "100px", backgroundColor: "cornflowerblue", borderRadius: "5px" }}>
            <h2>{productName}</h2>
            <p>{price}</p>
        </div>
    );
}

export default ProductsListItem;