import { useState, useEffect, useCallback } from "react"
import VacancyPreview from "../components/VacancyPreview";
import "./VacancyLister.css"
import { useVacancyContext } from "../context/config";
import FilterBlock from "../components/FilterBlock";
import jobData from "../Jobs.json"

function VacancyLister(){

    const {state,setCategories} = useVacancyContext();
    const vacancies = state.vacancies;
    const [filters, setFilters] = useState([]);
    const [filtered,setFiltered] = useState([]);
    const [term,setTerm] = useState("");


    // console.log("filters",filters);
    // console.log("filtered", filtered);

    // useEffect(function(){
    //     setCategories();
    // },[]);

    useEffect(function(){
        console.log("useEffect running");

        // if(term && filters){
        //     // filter by term first
        //     /
        // }

        if(vacancies && filters){
            const filteredByCategory = vacancies.filter(function (item) {
                // filter for vacancies whose values include filters
                return filters.some(function(filterTerm){
                    return Object.values(item.specs).includes(filterTerm);
                });

              });
            //   console.log("filteredByCategory", filteredByCategory);

            setFiltered(filteredByCategory);
        }

    }, [filters]);


    // source of checkbox bug -state updates
    function handleFilterChange(checkValue) {
        //check if the filters array includes id already, if it does, remove it by filtering
        if (filters && filters.includes(checkValue)) {
          //filter out this checkbox value
          const updated = filters.filter(function (checkVal) {
            return checkVal !== checkValue;
          });
          setFilters(updated);
        } else if(!filters.includes(checkValue)) {
            
            console.log("hello")
            // add id check value to categoryIds
            setFilters([...filters, checkValue]);
          

        }
      }
      //end of hand filter

      useEffect(function(){
        if(term){

            const filteredBySearch = vacancies.filter(function (item) {
                // filter for vacancies whose values include filters
                // return filters.some(function(filterTerm){
                //     return Object.values(item.specs).includes(filterTerm);
                // });

                return item.title.toLowerCase().startsWith(term);

              });
            //   console.log("filteredByCategory", filteredByCategory);

            setFiltered(filteredBySearch);
        }else if (term === ""){
            setFiltered(vacancies);
        }
        }
      ,[term])


      let toShow =  filtered && filtered.length > 0 ? filtered : vacancies;
      console.log("toshow");
      console.log("filters", filters);

    
    return <section  className="lister">
        
        <div className="lister-filters">

        <div className="search-filter">
         <input type="text" value={term} onChange={e => setTerm(e.target.value)} placeholder={"Vacancy itle"} />
        </div>

            <FilterBlock handleFilterChange={handleFilterChange}/>
        </div>
        <div className="vacancy-previews">
            {toShow && toShow.map(function(vacancy){
                return <VacancyPreview data={vacancy} key={vacancy.jobId}/>
            })}
        </div>

    </section>
}

export default VacancyLister