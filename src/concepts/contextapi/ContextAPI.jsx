import React, { createContext } from 'react'
import CC1 from './CC1'
import A1 from './A1'



export const GlobalContext = createContext()
const ContextAPI = () => {
  const data = {
    usernname: "Prabina",
    password: 1234
  }
  return (
    <div>
      <GlobalContext.Provider value={data}>
        <CC1 />
        <A1/>
      </GlobalContext.Provider>
      
    </div>
  )
}

export default ContextAPI