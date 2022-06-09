import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProvidersInReducer } from "../state/providerSlice";
import '../App.css'


const Form = () => {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [dni, SetDni] = useState('')
    const [phone, SetPhone] = useState('')

    const addProvider = (e) => {
        e.preventDefault()
        if(name&&dni&&phone){
            const providerToAdd = {
                id: Math.floor(Math.random() * 1000),
                name,
                dni,
                phone
            }
            
            dispatch(addProvidersInReducer(providerToAdd))
        
            setName('')
            SetDni('')
            SetPhone('')
        }
    }

  return (
      <div>
          <form>
              <input 
                type="text" 
                placeholder="name"
                onChange={(e)=> setName(e.target.value)}
                value={name}
              />
              <input 
                type="text" 
                placeholder="dni"
                onChange={(e)=> SetDni(e.target.value)}
                value={dni}
              />
             <input 
                type="text" 
                placeholder="phone"
                onChange={(e)=> SetPhone(e.target.value)}
                value={phone}
              />
              <button onClick={addProvider}>add Provider</button>
          </form>
      </div>
  );
};
export default Form;