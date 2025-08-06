"use strict";

/**
 * Fetches location data from Nominatim API
 * 
 * @async
 * @function getLocation
 * @param {string} query - Corresponds to the location to search for
 * @returns {Promise<void>} - Updates map or throws an error message 
 */
async function getLocation(query) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?addressdetails=1&q=${encodeURIComponent(query)}&format=jsonv2&limit=1`);
        const data = await response.json();

        const oldMessage = document.getElementById("errorMessage");
        if (oldMessage) oldMessage.remove();

        if (data.length > 0) {
            const { lat, lon } = data[0];

            const mapElement = document.getElementById("map");
            mapElement.src = `https://www.openstreetmap.org/export/embed.html?layer=mapnik&marker=${lat},${lon}`;
        } else {
            const errorMessage = document.createElement("p")
            errorMessage.id = "errorMessage";
            errorMessage.textContent = "Ingen plats hittades!"

            document.getElementById("searchLocation").appendChild(errorMessage);
        }

    } catch (error) {
        console.log("Error", error)
    }
}

document.getElementById("searchLocation").addEventListener("submit", function (e) {
    e.preventDefault();
    const query = document.getElementById("locationInput").value.trim();
    if (query) {
        getLocation(query);
    }
});