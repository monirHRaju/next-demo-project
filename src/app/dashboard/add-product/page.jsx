import React from 'react';

const AddProduct = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json()
    console.log(users);
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Add Product Page
            </h1>
        </div>
    );
};

export default AddProduct;