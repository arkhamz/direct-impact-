import { useState, useEffect } from "react"
import jobData from "../Jobs.json";
import VacancyPreview from "../components/VacancyPreview";
import "./VacancyLister.css"

function VacancyLister(){

    const [vacancies,setVacancies] = useState(jobData)
    console.log(vacancies);


    return <section className="lister">
        <div className="filter-block"></div>
        <div className="vacancy-previews">
            {vacancies && vacancies.map(function(vacancy){
                return <VacancyPreview data={vacancy} key={vacancy.jobId}/>
            })}
        </div>

    </section>
}

export default VacancyLister