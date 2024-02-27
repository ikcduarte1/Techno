// Set the Mapbox access token
mapboxgl.accessToken = "pk.eyJ1IjoibWlob2cyNTU5MiIsImEiOiJjbGlxOW4xc2gwMzI2M21tcmdlMnZ1czB5In0.09YW2RoYWaWGqkXl1jQZsQ";

// Function to set up the Mapbox map
function setupMap(bounds) {
    // Create a new Mapbox map instance
    const map = new mapboxgl.Map({
        container: 'map', // The ID of the div element to contain the map
        style: 'mapbox://styles/mapbox/streets-v11', // The style URL of the map
        bounds: bounds, // The bounding box for the map view
        fitBoundsOptions: { padding: 20 }, // Add padding around the bounds
        maxBounds: bounds // Restrict panning outside the bounds
    });

    // Create a navigation control instance
    const nav = new mapboxgl.NavigationControl();
    // Add the navigation control to the map
    map.addControl(nav);
}

// Set up the map for Baguio City, Philippines
const baguioBounds = [
    [120.5443, 16.3615], // Southwest coordinates
    [120.6358, 16.4537]  // Northeast coordinates
];

setupMap(baguioBounds);
