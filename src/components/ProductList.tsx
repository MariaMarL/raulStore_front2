import * as React from 'react';
import { useSelector } from 'react-redux';
import { stateTypeRedux } from '../state/Store';
import './components.css'
import Product from './Product';


const ProductList = () => {

    const products = useSelector((state:stateTypeRedux) =>state.productState.products)
 
 
    return (
        <div className='getList'>
            <h1> Products</h1>
            {products.map((product) => <Product key={product.id} product ={product} />)}

        </div>
    )
};

export default ProductList;
