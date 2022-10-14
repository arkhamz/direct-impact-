import { tagRemover } from "../utils";
import "./VacancyPreview.css"
import { specFormatter } from "../utils";
import {v4 as uuidv4} from "uuid";
import {Link} from "react-router-dom"
function VacancyPreview({data:vacancy}){

    const specsFormatted = specFormatter(vacancy.specs);


    return <article className="vacancy-prev">
        <div className="prev-content">
            <h2>{vacancy.title}</h2>
            <p>{tagRemover(vacancy.intro).substring(0,150)}...</p>
        </div>
        <div className="prev-meta">
            <ul className="prev-specs">
            {specsFormatted && specsFormatted.map(function(i){
                return <span key={uuidv4()} >{i}</span>
            })}
            </ul>
            <Link to={`/vacancies/${vacancy.jobId}`} >See More</Link>
        </div>


    </article>
}

export default VacancyPreview;