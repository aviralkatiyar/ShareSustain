import React, { createContext, useContext, useReducer } from 'react'

const CartStateContext=createContext();
const CartDispatchContext=createContext();

const reducer=(state,action)=>{
switch(action.type){
    case "ADD":
    return [...state,{id:action.id,name:action.name}]
    case "REMOVE":
        let newArr=[...state]
        newArr.splice(action.index,1)
        return newArr;

    case "DROP":
        let empArray=[]
        return empArray;
    default:
        console.log("error in reducer");
}
}

export const CardProvider=({children})=>{
    const[state,dispatch]=useReducer(reducer,[])
    return(

        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    )
}

export const useCart=()=>useContext(CartStateContext);
export const useDispathCart=()=>useContext(CartDispatchContext)