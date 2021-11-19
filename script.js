const cities = L.layerGroup();
// if you want to create marker then you should follow this
    // L.marker([28.26783686394683, 83.9754581451416]).bindPopup('This is bat Cave').addTo(cities),
    // L.marker([28.15347626428456, 84.11349534988403]).bindPopup('This is Rupa Lake').addTo(cities),
    // L.marker([28.200994837113992, 83.94488632678986]).bindPopup('This is World Peace Pagoda').addTo(cities);
const mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const streets = L.tileLayer(mbUrl, { id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr }),
    grayscale = L.tileLayer(mbUrl, { id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr }),
    openstreetmap = L.tileLayer((osmUrl), { mbAttr });


const map = L.map('map', {
    center: [28.3949, 84.1240],
    zoom: 8,
    layers: [streets, cities]
});
grayscale.addTo(map);


const baseLayers = {
    "Grayscale": grayscale,
    "Streets": streets,
    "OpenStreetMap": openstreetmap
};

const overlays = {
    "Cities": cities
};

const layers = L.control.layers(baseLayers, overlays);
layers.addTo(map);