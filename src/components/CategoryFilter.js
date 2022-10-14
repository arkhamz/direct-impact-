import {v4 as uuidv4} from "uuid";
import "./CategoryFilter.css"

// renders a group of filter checkboxes for each spec
export default function CategoryFilter({data, handleFilterChange}){
    // const {state} = useVacancyContext();
    // const categories = state.categories;

    return(
        <div className="category-filter-container">
            {data.length > 1 && data.map(function(cat,index,arr){

                return <div key={uuidv4()} className="cat">
                    <label htmlFor={`cat${index}`}>{cat}</label>
                    <input type="checkbox" id={`cat${index}`} onChange={(e) => {
                        e.preventDefault();
                        handleFilterChange(cat);
                    } } />
                </div>
            })}

        </div>
    )


}
