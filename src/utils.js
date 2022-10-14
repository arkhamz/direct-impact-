
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