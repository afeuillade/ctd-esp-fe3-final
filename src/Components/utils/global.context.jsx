import { createContext, useEffect, useReducer, useState } from "react";
import { initialState, reducer } from "./reducer";
import axios from "axios";

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {

  const url = "https://jsonplaceholder.typicode.com/users"
  const [medicos, setMedicos] = useState([])
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
      const themeName = state.theme ? 'dark' : 'light'
      localStorage.setItem('theme', themeName);
      document.documentElement.setAttribute("data-base-theme", themeName)
    
  }, [state.theme]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(url)
        setMedicos(response.data)
      }
      fetchData()
    } catch (err) {
      console.log(err)
    }
  }, [])


  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{ state, dispatch, medicos}}>
      {children}
    </ContextGlobal.Provider>
  );
};
