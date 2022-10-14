import {v4 as uuidv4} from "uuid";
import { useState,useMemo } from "react";
import CategoryFilter from "./CategoryFilter";
import { specCategories } from "../utils";
import "./FilterBlock.css"


function FilterBlock({handleFilterChange}){

    const categoryArrays = useMemo(() => specCategories(),[]);




    return <section className="filters">
        {categoryArrays && categoryArrays.map(function(i){
           return  <div key={uuidv4()} className="category-filter">
           <h4>{i.name}</h4>
           <CategoryFilter data={i.list}/>
       </div>
        })}


        {/* <div className="category-filter">
            <h4>Education level</h4>
            <CategoryFilter data={educationLevel}/>
        </div>
        <div className="category-filter">
        <h4>Employment level</h4>
            <CategoryFilter data={employmentLevel}/>
        </div>
        <div className="category-filter">
            <h1>Experience level</h1>
            <CategoryFilter data={experienceLevel}/>
        </div>
        <div className="category-filter">
            <h4>Hours per week</h4>
            <CategoryFilter data={hoursPerWeek}/>
        </div>
        <div className="category-filter">
            <h4>Languages</h4>
            <CategoryFilter data={languages}/>
        </div>
        <div className="category-filter">
            <h4>Region</h4>
            <CategoryFilter data={region}/>
        </div>
        <div className="category-filter">
            <h4>City</h4>
            <CategoryFilter data={city}/>
        </div>
        <div className="category-filter">
            <h4>Industry</h4>
            <CategoryFilter data={industry}/>
        </div>
        <div className="category-filter">
            <h4>Function</h4>
            <CategoryFilter data={functionName}/>
        </div>
        <div className="category-filter">
            <h4>Function group</h4>
            <CategoryFilter data={functionGroup}/>
        </div>
        <div className="category-filter">
            <h4>Sector</h4>
            <CategoryFilter data={sector}/>
        </div>
        <div className="category-filter">
            <h4>Company Type</h4>
            <CategoryFilter data={companyType}/>
        </div> */}

        {/* <div className="education-filter"></div>
        <div className="region-filter"></div>
        <div className="experience-filter"></div>
        <div className="industry-filter"></div> */}

    </section>
}

export default FilterBlock;