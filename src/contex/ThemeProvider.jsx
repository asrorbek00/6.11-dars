import { createContext, useEffect, useReducer } from "react";

export const ThemeContext = createContext()

const configurState = (state, action)=>{
    switch (action.type) {
          case  "CHANGE_MODE":
            return{...state , mode:action.payload}
            // case  "CHANGE_DELETE":
            // return{...state , deleted:action.payload}
            default:
                return state
    }
}
const stateFromLocal = ()=>{
    return JSON.parse(localStorage.getItem("state" , )) || {
        mode: "light" ,

    }
}

export function ThemeContextProvider({children}){

    const[state , dispatch] = useReducer(configurState, stateFromLocal) 
    const changeMode = (newMode)=>{
        dispatch({type:"CHANGE_MODE" , payload: newMode})
    }

    useEffect(() =>{
        localStorage.setItem("state" , JSON.stringify(state))
        document.documentElement.setAttribute("data-theme", state.mode)
    },[state.mode])

    // const changeDelete = (newDelete)=>{
    //     dispatch({type:"CHANGE_DELETE" , payload: newDelete})
    // }
    return(
        <ThemeContext.Provider value={{ ...state , changeMode}}>
            {children }
        </ThemeContext.Provider>
    )

}