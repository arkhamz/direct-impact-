import { tagRemover } from "../utils";
import "./VacancyPreview.css"
import { specFormatter } from "../utils";
import {v4 as uuidv4} from "uuid";
function VacancyPreview({data:vacancy}){

    const specsFormatted = specFormatter(vacancy.specs);


    return <article className="vacancy-prev">
        <div className="prev-content">
            <h2>{vacancy.title}</h2>
            <p>{tagRemover(vacancy.intro).substring(0,150)}...</p>
        </div>
        <ul className="prev-meta">
            {specsFormatted && specsFormatted.map(function(i){
                return <span key={uuidv4()} >{i}</span>
            })}
        </ul>


    </article>
}

export default VacancyPreview;