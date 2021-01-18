import React from 'react'
import { createContext, useState } from 'react'

export const Context = createContext();

const Provider = ({children}) => {
  const [userState, setUserState] = useState(false);
  const value = { userState, setUserState };
  
  return <Context.Provider value={value}>
    {children}
  </Context.Provider>;
};

const exportVar = {
  Provider, Consumer: Context.Consumer
}

export default exportVar;