import * as React from 'react';
import { providerType } from '../App'

interface IProviderProps {
    provider: providerType
}


const Provider: React.FunctionComponent<IProviderProps> = ({provider}) => {
  return (

        <tr>
            <td>{provider.id}  </td>
            <td>{provider.name}  </td>
            <td>{provider.dni}  </td>
            <td>{provider.phone}  </td>
        </tr>
  )

      
};

export default Provider;
