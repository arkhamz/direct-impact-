import { useState, useEffect } from "react"
import VacancyPreview from "../components/VacancyPreview";
import "./VacancyLister.css"
import { useVacancyContext } from "../context/config";
import FilterBlock from "../components/FilterBlock";

function VacancyLister(){

    const {state,setCategories} = useVacancyContext();
    const vacancies = state.vacancies;
    const [filters, setFilters] = useState([]);
    const [filtered,setFiltered] = useState([]);

    console.log("filters",filters);
    console.log("filtered", filtered);


    
    useEffect(function(){
        setCategories();
    },[])

    useEffect(function(){

        if(vacancies){
            console.log(vacancies);
            const filteredByCategory = vacancies.filter(function (item) {

                return filters.some(function(filterTerm){
                    return Object.values(item.specs).includes(filterTerm);
                });

              });
              console.log("filteredByCategory", filteredByCategory);

            setFiltered(filteredByCategory);
        }

    }, [filters]);

    function handleFilterChange(checkValue) {
        //check if the filters array includes id already, if it does, remove it by filtering
        if (filters.includes(checkValue)) {
            console.log(checkValue);
          //filter out this id
          const updated = filters.filter(function (checkVal) {
            return checkVal !== checkValue;
          });
          setFilters(updated);
        } else {
            // add id to the categoryIds
            setFilters([...filters, checkValue]);
        }
      }

      let toShow =  filtered && filtered.length > 0 ? filtered : vacancies;
      console.log(toShow);

    
    return <section className="lister">
        <div className="filter-block">
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