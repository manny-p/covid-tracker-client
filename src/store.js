import React, {createContext, useState} from 'react'

export const Context = createContext();

export default ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalHide, setModalHide] = useState(true) 
     const initialState = {
        user,
        setUser,
        token,
        setToken,
        countries,
        setCountries,
        loading,
        setLoading,
        modalHide,
        setModalHide
    }
return (
  <Context.Provider value={initialState}>{children}</Context.Provider>
)};

