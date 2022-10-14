import { useState, useEffect } from "react"
import VacancyPreview from "../components/VacancyPreview";
import "./VacancyLister.css"
import { useVacancyContext } from "../context/config";
import FilterBlock from "../components/FilterBlock";

function VacancyLister(){

    const {state,setCategories} = useVacancyContext();
    const vacancies = state.vacancies;
    const [categoryIds, setCategoryIds] = useState([]);
    const [filtered, setFiltered] = useState();

     function handleFilterChange(id) {
        //check if the categoryId array includes id already, if it does, remove it by filtering
        if (categoryIds.includes(id)) {
          //filter out this id
          const updated = categoryIds.filter(function (idNum, index) {
            return idNum !== id;
          });
          setCategoryIds(updated);
        } else {
            // add id to the categoryIds
          setCategoryIds([...categoryIds, id]);
        }
      }

      let toShow = 
   
    useEffect(function(){
        setCategories();
    },[])

    useEffect(function(){

        if(vacancies && categoryIds.length > 0){
            const filteredByCategory = vacancies.filter(function (
                item,
                index,
                arr
              ) {
                return categoryIds.includes(item.categoryId);
              });

              setFiltered(filteredByCategory)
        }

    }, [categoryIds])

    
    return <section className="lister">
        <div className="filter-block">
            <FilterBlock/>
        </div>
        <div className="vacancy-previews">
            {vacancies && vacancies.map(function(vacancy){
                return <VacancyPreview data={vacancy} key={vacancy.jobId}/>
            })}
        </div>

    </section>
}

export default VacancyLister