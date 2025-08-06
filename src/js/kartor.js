"use strict";

/**
 * Fetches location data from Nominatim API
 * 
 * @async
 * @function getLocation
 * @returns {Promise<void>} Returns no value but logs data in console
 */
async function getLocation() {
    try {
        const response = await fetch("https://nominatim.openstreetmap.org/search?addressdetails=1&q=bakery+in+berlin+wedding&format=jsonv2&limit=1");
        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log("Error", error)
    }
}

getLocation();