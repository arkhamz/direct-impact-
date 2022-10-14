import { useState, useEffect } from "react";
import "./VacancyDetail.css"
import { useParams, useNavigate } from "react-router-dom";
import { useVacancyContext } from "../context/config";
import { specFormatter, tagRemover } from "../utils";
import {v4 as uuidv4} from "uuid"


function VacancyDetail(){

    const {id} = useParams();
    const {state,dispatch,setDetail,clearDetail} = useVacancyContext();
    const vacancy = state.vacancyDetail;
    const specsFormatted = vacancy && specFormatter(vacancy.specs);

    useEffect(function(){

        // thunk gets detail by id, dispatches to state
        setDetail(id);

        //cleanup function, removes vacancy detail on unmount
        return function(){
            clearDetail();
        }
    }, []);

    const navigator = useNavigate();

    function handleClick(){
        navigator(`/vacancies/${id}/application`)
    }
    
    return <section className="vacancy-detail">
        {vacancy && (
            <>
            <div className="detail-intro">
            <h1 className="vacancy-title">{vacancy.title}</h1>
                <div className="detail-specs">
                {specsFormatted && specsFormatted.map(function(i){
                    return <span key={uuidv4()} >{i}</span>
                })}
                </div>
        </div>
            <div className="detail-description">
                <h2 className="vacancy-description">Description</h2>
                <p className="description-text">{tagRemover(vacancy.intro)}</p>
            </div>
            <div className="recruiter">
                <h3>Recruiter:</h3>
                <p>{vacancy.recruiter}</p>
            </div>
             <div className="apply">
                <button onClick={handleClick}>Apply</button>
            </div>
            </>
        )}

    </section>
}

export default VacancyDetail;