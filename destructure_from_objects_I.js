/**
 * @param {object} userLocation
 * @param {number} userLocation.lat
 * @param {number} userLocation.lng
 */
const getLatLng = userLocation => {
    //destructure into 2 variables: lat & lng
    const {lat, lng} = userLocation;
    return `The latitude is ${lat} and the longitude is ${lng}`;
}

// Sample usage - do not modify
const userLocation = {
    lat: 24.235235,
    lng: 2.5734,
};
console.log(getLatLng(userLocation));
