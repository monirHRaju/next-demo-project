import Link from 'next/link';
import React from 'react';

const Products = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const products = await data.json();
   
    return (
        <div>
            <h1>Products Page</h1>
            
            {
                products.map(product => (
                    <div key={product.id} className="border p-4 my-2">
                        <Link href={`/products/${product.id}`}><li className="text-xl font-bold">{product.title}</li></Link>  
                    </div>
                ))
            }
          
        </div>
    );
};

export default Products;