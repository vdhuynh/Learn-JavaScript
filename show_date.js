import {getDate} from "./helpers.js";

const showDate = () => {
    try {
        const date = getDate();
        return date;
    } catch {
        return "Could not get date"; 
        
    }
    
}

// Sample usage - do not modify
console.log(showDate());
