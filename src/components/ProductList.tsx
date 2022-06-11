import * as React from 'react';
import { useSelector } from 'react-redux';
import { stateTypeRedux } from '../state/Store';
import './components.css'
import Product from './Product';


const ProductList = () => {

    const products = useSelector((state:stateTypeRedux) =>state.productState.products)
 
 
    return (
        <table className='table getList'>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>UnitsLeft</th>
            <th>MaxUnit</th>
            <th>MinUnit</th>
            <th>Price</th>
            <th>ProviderName</th>
          
        </tr>
        {
          products.map((product) => 
          <> <Product key={product.id} product ={product}  /> <td><button className="delete">Delete</button></td></>  )
          
        }
          
        
        
  
  
    </table>


    )
};

export default ProductList;


