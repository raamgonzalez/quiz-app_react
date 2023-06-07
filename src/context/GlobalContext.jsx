import { createContext } from "react";

export const GlobalContext = createContext('');

const GlobalContextProvider = ({ children }) => {

const title = 'hola'

    return (
        <GlobalContext.Provider value={{ 
					title,
        }}
        >
        {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;