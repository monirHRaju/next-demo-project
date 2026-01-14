import React from 'react';

const ProductDetails = async ({params}) => {
    const {id} = await params;
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const product = await data.json();
   
    return (
        <div>
            <h1>Product Details Page</h1>
            <p>Product ID: {id}</p>
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p>{product.body}</p>



        </div>
    );
};

export default ProductDetails;