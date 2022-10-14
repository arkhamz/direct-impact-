import jobData from "./Jobs.json"
/**
 * 
 * @param {text} string containing <p> tags 
 * @returns plaintext without any tags
 */
export function tagRemover(text){
    const freetext = text.replaceAll("<p>", "").replaceAll("</p>", "");
    return freetext;
}

/**
 * 
 * @param {specObj} object vacancy spec 
 * @returns array of vacancy specs
 */
export function specFormatter(specObj){

    const specsIterator = Object.entries(specObj);

    const specsFormatted = specsIterator.map(function(pair){
        if(pair[0] === "__typename"){
            return null;
        } else if(pair[0] === "hoursPerWeek"){
            return `${pair[1]}hr`
        } else if(pair[1]){
            return pair[1];
        } else{
            return pair[1];
        }
    });

    return specsFormatted
    
}

export function specCategories(){

    const vacancies = [...jobData].map(function(item){
        delete item.specs.__typename
        return item.specs;
    });

    //loop through array and get unique values for each thing

    const educationLevel = [...new Set(vacancies.map(item => item.educationLevel))]
    const employmentLevel = [...new Set(vacancies.map(item => item.employmentTerm))]
    const experienceLevel = [...new Set(vacancies.map(item => item.experienceLevel))]
    const hoursPerWeek = [...new Set(vacancies.map(item => item.hoursPerWeek))]
    const languages = [...new Set(vacancies.map(item => item.languages))]
    const region = [...new Set(vacancies.map(item => item.region))]
    const city = [...new Set(vacancies.map(item => item.city))]
    const industry = [...new Set(vacancies.map(item => item.industry))]
    const functionName = [...new Set(vacancies.map(item => item.function))]
    const functionGroup = [...new Set(vacancies.map(item => item.functionGroup))]
    const sector = [...new Set(vacancies.map(item => item.sector))]
    const companyType = [...new Set(vacancies.map(item => item.companyType))]

    return {educationLevel,employmentLevel,experienceLevel,hoursPerWeek,
    languages,region,city,industry,functionName,functionGroup,sector,companyType}
}


// "specs": {
//     "educationLevel": "MBO",
//     "employmentTerm": "",
//     "experienceLevel": "Medior (3-5 jr ervaring)",
//     "hoursPerWeek": 40,
//     "languages": "",
//     "region": "Zuid-Holland",
//     "city": "Dordrecht",
//     "industry": "Office",
//     "function": "Werkvoorbereider",
//     "functionGroup": "Werkvoorbereiding",
//     "sector": "Techniek",
//     "companyType": "external"