import { configureStore } from '@reduxjs/toolkit';
import * as React from 'react';
import providerState from './providerSlice'
import productState from './productSlice'



const store = configureStore({
    reducer:{
        providerState,   //clave y el valor es el contenido
        productState,
        

    }

  
});

type stateTypeRedux = ReturnType<typeof store.getState>


export default store;
export type {stateTypeRedux}
