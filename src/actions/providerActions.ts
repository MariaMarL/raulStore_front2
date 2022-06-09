

export const getAllProviders = async ()=>{
    const response = await fetch(`http://localhost:8080/api/providers`)
    const data = await response.json()
    return data
  }

  export const createProvider = async ()=>{
    const response = await fetch(`http://localhost:8080/api/provider/create`)
    const data = await response.json()
    return data
  }