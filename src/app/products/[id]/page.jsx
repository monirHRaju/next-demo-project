import React from 'react';

const ProductDetails = async ({params}) => {
    const {id} = await params;
    return (
        <div>
            <h1>Product Details Page</h1>
            <p>Product ID: {id}</p>

        </div>
    );
};

export default ProductDetails;