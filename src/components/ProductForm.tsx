import * as React from 'react';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import '../App.css'



const ProductForm = () => {

  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [unitsLeft, setUnitsLeft] = useState('')
  const [maxUnits, setMaxUnits] = useState('')
  const [minUnits, setMinUnits] = useState('')
  const [price, setPrice] = useState('')
  const [providerName, setProviderName] = useState('')


  const addProduct =async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(name&&description&&unitsLeft&&maxUnits&&minUnits&&price&&providerName){
      const productToAdd ={
        name,
        description,
        unitsLeft,
        maxUnits,
        minUnits,
        price,
        providerName
      }
    }
    
  }
  return ;
};

export default ProductForm;
