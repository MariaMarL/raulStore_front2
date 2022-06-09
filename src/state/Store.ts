import { configureStore } from '@reduxjs/toolkit';
import * as React from 'react';
import providerState from './providerSlice'


const store = configureStore({
    reducer:{
        providerState,   //clave y el valor es el contenido
        

    }

  
});

type stateTypeRedux = ReturnType<typeof store.getState>


export default store;
export type {stateTypeRedux}
