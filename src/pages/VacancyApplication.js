import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useVacancyContext } from "../context/config";
import { useNavigate } from "react-router-dom";
import { specFormatter } from "../utils";
import {v4 as uuidv4} from "uuid";
import "./VacancyApplication.css"

function VacancyApplication(){

    const {id} = useParams();
    const {state,setDetail,clearDetail} = useVacancyContext();
    const vacancy = state.vacancyDetail;
    const specsFormatted = vacancy && specFormatter(vacancy.specs);

    // form state - file inputs are just for show
    const [firstName,setfirstName] = useState("");
    const [middleName,setMiddleName] = useState("");
    const [lastName,setLastName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");

    function clearFields(){
        setfirstName("");
        setMiddleName("");
        setLastName("");
        setPhone("");
        setEmail("");
    }

    useEffect(function(){

        // thunk gets detail by id, dispatches to state
        setDetail(id);

        //cleanup function, removes vacancy detail on unmount
        return function(){
            clearDetail();
        }
    }, []);

    const navigator = useNavigate();

    function handleSubmit(e){
        
        e.preventDefault();

        // LOG THE STUFF
        console.log(`POST REQUEST, req.body contains {${firstName}, ${middleName},${lastName}, ${phone}, ${email}}`);
        //move to homepage onSubmit
        navigator("/");
        clearFields();
    }

    return <section className="application">
        {vacancy && (
            <>
                <div className="vacancy-info">
            <div className="detail-intro">
                <h1 className="vacancy-title">{vacancy.title}</h1>
                    <div className="detail-specs">
                    {specsFormatted && specsFormatted.map(function(i){
                        return <span key={uuidv4()} >{i}</span>
                    })}
                    </div>
            </div>
        </div>
        <form className="application-form">
            <h2>Application for {vacancy.title}</h2>
            <input value={firstName} onChange={(e) => setfirstName(e.target.value)} required placeholder="FIRST NAME*" type="text" />
            <input value={middleName} onChange={(e) => setMiddleName(e.target.value)} placeholder="MIDDLE NAME"type="text" />
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} required placeholder="LAST NAME*"type="email" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} required placeholder="PHONE*"type="text" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="E-MAIL ADDRESS*"type="text" />
            <div className="resume">
                <label htmlFor="resume">ADD A RESUME*:</label>
                <input id="resume" required type="file" />
            </div>
            <div>
                <label htmlFor="motivation">ADD A MOTIVATION:</label>
            <input id="motivation" placeholder="ADD A MOTIVATION"type="file" />
            </div>
            <div className="check">
                <input id="agree-check" type="checkbox" />
                <label htmlFor="agree-check">I agree with X's privacy statement</label>
            </div>

        </form>
        <div className="apply">
                <button onClick={handleSubmit}>Apply</button>
            </div>
            </>
        )}
    </section>
}

export default VacancyApplication;