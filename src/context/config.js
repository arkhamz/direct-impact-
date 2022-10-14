import { createContext, useReducer, useContext } from "react";
import {v4 as uuidv4} from "uuid"

import vacancies from "../Jobs.json"

const initialState = {
    vacancies: vacancies,
    vacancyDetail: null,
    categories: null
}

const VacancyContext = createContext();

function vacancyReducer(state, action){

    switch (action.type) {
        case "SET_DETAIL":
            return {...state, vacancyDetail: action.payload}
        
        case "CLEAR_DETAIL":
            return {...state, vacancyDetail: null}

        case "SET_CATEGORIES":
            return {...state, categories: action.payload}
    
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

    function setCategories(){

        const specsIterator = state && Object.entries(state.vacancies[0].specs);
        // const specs = 
        const categories = specsIterator.map(function(item){
            if(item[0] === "__typename"){
                return null
            } else{
                return {title: item[0], id: uuidv4()};
            }
        });
        categories.shift();
        
        dispatch({type:"SET_CATEGORIES", payload:categories });
    }


    return <VacancyContext.Provider value={{state,dispatch, setDetail,clearDetail, setCategories}}>
        {children}
    </VacancyContext.Provider>
    
}

export function useVacancyContext(){

    return useContext(VacancyContext);
}


