// 1.createContext() -> context create krva = emty tank
// 2.Provider -> data provide/share krva  = add water
// 3.useContext() -> data consume/read krva = use water 


import { createContext } from "react";

const UserContext = createContext();


export default UserContext;