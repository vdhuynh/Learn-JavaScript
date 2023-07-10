/** @param {Object} data */
export function getCountry(data) {
    console.log(data.current, data.location, data.request);
    return data.location.country;
    
}

/** @param {Object} data */
export function getIcon(data) {
    console.log(data.current, data.location, data.request);
    return data.current.weather_icons[0];
    
}

/** @param {Object} data */
export function getTemperature(data) {
    console.log(data.current, data.location, data.request);
    return data.current.temperature;
    
    
}
