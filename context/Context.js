import React, { createContext } from 'react'

export const Context = createContext(null)

export const ContextProvider = (props) => {
  const [selectedHashLink, setSelectedHasLink] = React.useState("")


  const value = {
    selectedHashLink,
    setSelectedHasLink,
  }

  return <Context.Provider value={value}>{props.children}</Context.Provider>
}
