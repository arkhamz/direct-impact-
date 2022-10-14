import {v4 as uuidv4} from "uuid";
import { useState,useMemo } from "react";
import CategoryFilter from "./CategoryFilter";
import { specCategories } from "../utils";
import "./FilterBlock.css"


function FilterBlock({handleFilterChange}){

    const categoryArrays = useMemo(() => specCategories(),[]);

    return <section className="filters">
        {categoryArrays && categoryArrays.map(function(i,index){
           return  <div key={index} className="category-filter">
           <h4>{i.name}</h4>
           <CategoryFilter handleFilterChange={handleFilterChange} data={i.list}/>
                    </div>
        })}
    </section>
}

export default FilterBlock;