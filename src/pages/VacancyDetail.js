import { useState, useEffect } from "react";
import "./VacancyDetail.css"
import { useParams } from "react-router-dom";
import { useVacancyContext } from "../context/config";


function VacancyDetail(){

    const {id} = useParams();
    const {state,dispatch,setDetail,clearDetail} = useVacancyContext();
    const vacancy = state.vacancyDetail;

    useEffect(function(){

        // thunk gets detail by id, dispatches to state
        setDetail(id);


        return function(){
            clearDetail();
        }
    }, []);
    
    return <section className="vacancy-detail">
        <div className="detail-intro">
            {vacancy && vacancy.title}

        </div>
        <div className="detail-description"></div>
        <div className="recruiter"></div>
        <div className="apply">
            <button>Apply</button>
        </div>

    </section>
}

export default VacancyDetail;