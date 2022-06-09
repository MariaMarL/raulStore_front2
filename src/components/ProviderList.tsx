import * as React from 'react';
import { useSelector } from 'react-redux';
import { providerType } from '../App';
import {stateTypeRedux} from '../state/Store'
import Provider from './Provider';
import './components.css'


const ProviderList = () => {

    
const providers = useSelector((state:stateTypeRedux) => state.providerState.providers)
    
return (
    <div className='getList'>
        <h1>Providers</h1>
        {providers.map((provider) => <Provider key={provider.id} provider = {provider} /> )}
    </div>
  )
};

export default ProviderList;
