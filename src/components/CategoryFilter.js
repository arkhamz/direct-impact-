import {v4 as uuidv4} from "uuid";
import { useState, useCallback, useMemo } from "react";
import "./CategoryFilter.css"
import React from "react";

// renders a group of filter checkboxes for unique spec values
export default function CategoryFilter({data, handleFilterChange}){

// calling a setter function or anything similar inside onChange causes the issue with no tick

    return(
        <div className="category-filter-container">
            {data.length > 0 && data.map(function(cat,index,arr){

                return <div key={index} >
                    {/* <label htmlFor={`cat${index}`}>{cat}</label> */}
                    <label> {cat}</label>
                    <input type="checkbox" onChange={function(e){
                        handleFilterChange(cat);
                    }} />
                </div>
            })}

        </div>
    )


}

