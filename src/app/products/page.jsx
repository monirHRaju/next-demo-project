import Link from 'next/link';
import React from 'react';

const Products = () => {
    return (
        <div>
            <h1>Products Page</h1>
            <Link href="/products/1">
                <button>View Product 1</button>
            </Link>
            <Link href="/products/2">
                <button>View Product 2</button>
            </Link>
            <Link href="/products/3">
                <button>View Product 3</button>
            </Link>
        </div>
    );
};

export default Products;