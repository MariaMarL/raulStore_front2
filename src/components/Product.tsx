import * as React from 'react';
import { productType } from '../types';

interface IProductProps {
    product : productType
}

const Product: React.FunctionComponent<IProductProps> = ({product}) => {
  return (
    <div>
        <h1>{product.id} {product.name} {product.description} {product.maxUnits} {product.minUnits} {product.unitsLeft} {product.price} {product.providerName} </h1>
    </div>
  )
};

export default Product;
