import { useState, useEffect } from "react"
import VacancyPreview from "../components/VacancyPreview";
import "./VacancyLister.css"
import { useVacancyContext } from "../context/config";
import FilterBlock from "../components/FilterBlock";

function VacancyLister(){

    const {state,setCategories} = useVacancyContext();
    const vacancies = state.vacancies;
    const [filters, setFilters] = useState([]);

     function handleFilterChange(checkValue) {
        //check if the filters array includes id already, if it does, remove it by filtering
        if (filters.includes(checkValue)) {
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

      let toShow =  filters || vacancies;
   
    useEffect(function(){
        setCategories();
    },[])

    useEffect(function(){

        if(vacancies && filters.length > 0){
            const filteredByCategory = vacancies.filter(function (
                item,
                index,
                arr
              ) {
                return filters.includes(item.categoryId);
              });

              setFilters(filteredByCategory)
        }

    }, [filters])

    
    return <section className="lister">
        <div className="filter-block">
            <FilterBlock handleFilterChange={handleFilterChange}/>
        </div>
        <div className="vacancy-previews">
            {vacancies && vacancies.map(function(vacancy){
                return <VacancyPreview data={vacancy} key={vacancy.jobId}/>
            })}
        </div>

    </section>
}

export default VacancyLister