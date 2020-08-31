import React, {createContext, useState} from 'react'

export const Context = createContext();

export default ({ children }) => {
    const [user, setUser] = useState({});
    const [token, setToken] = useState(null);
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true)
    const initialState = {
        user,
        setUser,
        token,
        setToken,
        countries,
        setCountries,
        loading,
        setLoading
    }
return (
  <Context.Provider value={initialState}>{children}</Context.Provider>
)};

