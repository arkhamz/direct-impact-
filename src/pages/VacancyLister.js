import { useState, useEffect } from "react"
import VacancyPreview from "../components/VacancyPreview";
import "./VacancyLister.css"
import { useVacancyContext } from "../context/config";

function VacancyLister(){

    const {state} = useVacancyContext();
    const vacancies = state.vacancies;

    
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