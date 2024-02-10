import L from 'leaflet';

const map = L.map('map').setView([34.82704, 134.68996], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([34.82689, 134.69024]).addTo(map)
  .bindPopup('姫路駅');
L.marker([34.82580, 134.70233]).addTo(map)
  .bindPopup('勉強会会場(獨協学園はり姫サテライト)').openPopup();
// const route = [
//   [34.82689, 134.69024],
//   [34.82723, 134.69024],
//   [34.82572, 134.70230]
// ];
// L.polyline(route, { color: 'red' }).addTo(map);