
import { useState,useMemo } from "react";
import CategoryFilter from "./CategoryFilter";
import { specCategories } from "../utils";
import "./FilterBlock.css"


function FilterBlock(){

    const {educationLevel,employmentLevel,experienceLevel,hoursPerWeek,languages,region,city,industry,functionName,functionGroup,sector,companyType} = useMemo(() => specCategories(),[])

    console.log(languages);

    return <section className="filters">

        <div className="category-filter">
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
        </div>

        {/* <div className="education-filter"></div>
        <div className="region-filter"></div>
        <div className="experience-filter"></div>
        <div className="industry-filter"></div> */}

    </section>
}

export default FilterBlock;