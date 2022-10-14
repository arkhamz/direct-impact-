import { createContext, useReducer, useContext } from "react";

import vacancies from "../Jobs.json"

const initialState = {
    vacancies: vacancies,
    vacancyDetail: null
}

const VacancyContext = createContext();

function vacancyReducer(state, action){

    switch (action.type) {
        case "SET_DETAIL":
            return {...state, vacancyDetail: action.payload}
        
        case "CLEAR_DETAIL":
            return {...state, vacancyDetail: null}
    
        default:
            return state
            
    }
}



export function ContextProvider({children}){

    const [state,dispatch] = useReducer(vacancyReducer, initialState);

    //kind of like a thunk?
    function setDetail(jId){
        const vacancy = state.vacancies.find(function(i){
            return i.jobId === jId;
        });
        dispatch({type: "SET_DETAIL", payload: vacancy});
    }

    function clearDetail(){
        dispatch({type: "CLEAR_DETAIL"});
    }


    return <VacancyContext.Provider value={{state,dispatch, setDetail,clearDetail}}>
        {children}
    </VacancyContext.Provider>
    
}

export function useVacancyContext(){

    return useContext(VacancyContext);
}