import * as React from 'react';
import { productType } from '../types';

interface IProductProps {
    product : productType
}

const Product: React.FunctionComponent<IProductProps> = ({product}) => {
  return (

    <tr>
      <td>{product.id} </td>
      <td>{product.name}  </td>
      <td>{product.description}  </td>
      <td>{product.unitsLeft}  </td>
      <td>{product.maxUnits}  </td>
      <td>{product.minUnits}  </td>
      <td>{product.price}  </td>
      <td>{product.providerName}  </td>
    </tr>

  )
};

export default Product;
