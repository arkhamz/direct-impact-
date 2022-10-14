import { useVacancyContext } from "../context/config";
import { useEffect, useCallback, useMemo } from "react";
import {v4 as uuidv4} from "uuid";
import "./CategoryFilter.css"



// renders a group of filter checkboxes
export default function CategoryFilter({data}){
    const {state} = useVacancyContext();
    // const categories = state.categories;





    return(
        <div className="category-filter-container">
            {data.length > 1 && data.map(function(cat,index,arr){

                return <div key={uuidv4()} className="cat">
                    <label htmlFor="">{cat}</label>
                    <input  type="checkbox" />
                </div>
            })}

        </div>
    )


}

// "specs": {
//     "educationLevel": "MBO",
//     "employmentTerm": "",
//     "experienceLevel": "Medior (3-5 jr ervaring)",
//     "hoursPerWeek": 40,
//     "languages": "",
//     "region": "Zuid-Holland",
//     "city": "Dordrecht",
//     "industry": "Office",
//     "function": "Werkvoorbereider",
//     "functionGroup": "Werkvoorbereiding",
//     "sector": "Techniek",
//     "companyType": "external"