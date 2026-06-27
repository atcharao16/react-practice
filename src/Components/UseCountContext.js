import { useState, createContext, useContext } from "react";


const countContext = createContext();
//useContext provides global access to useState (state variables)
//The countContext(created context has provider and consumer )

//Provider -> for providing value to the components
const CountProvider = ({children}) => {
    const [count , setCount] = useState(10)
    return(
        <countContext.Provider value = {[count, setCount]}>
            {children}
        </countContext.Provider>
    )
}


//Consumer -> for consuming value by the provider provided components
const useCount = () => useContext(countContext)

export {useCount, CountProvider}