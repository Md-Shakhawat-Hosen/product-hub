import { Spinner } from '@nextui-org/react';
import React from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import ProductsCard from '../ProductsCard/ProductsCard';

const Products = () => {
    const products = useLoaderData()
    // console.log(products.products)

    const spinner = useNavigation()
    const isL = spinner.state === "loading";
    // console.log(isL);

    return (
      <div>
        {isL ? <Spinner></Spinner> : ""}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products?.products.map((product) => (
            <ProductsCard key={product.id} product={product}></ProductsCard>
          ))}
        </div>
      </div>
    );
};

export default Products;