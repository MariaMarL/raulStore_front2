import * as React from 'react';
import { providerType } from '../App'

interface IProviderProps {
    provider : providerType
}

const Provider: React.FunctionComponent<IProviderProps> = ({provider}) => {
  return (
      <div>
          <h1> {provider.id} {provider.name} {provider.dni}  {provider.phone}  </h1>

      </div>
  )
};

export default Provider;
