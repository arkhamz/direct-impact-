import "./CategoryFilter.css"
import React from "react";

export default function CategoryFilter({data, handleFilterChange}){


    return(
        <div className="category-filter-container">
            {data.length > 0 && data.map(function(cat,index,arr){

                return <div key={index} >
                    <label> {cat}</label>
                    <input type="checkbox" onChange={function(e){
                        handleFilterChange(cat);
                    }} />
                </div>
            })}

        </div>
    )


}

