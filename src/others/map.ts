import L from 'leaflet';

/**
 * Japan/OSMFJ Tileserver
 * @see https://wiki.openstreetmap.org/wiki/Japan/OSMFJ_Tileserver
 */
const tilesSrverDefault = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const tilesSrverBright = 'https://tile.openstreetmap.jp/styles/osm-bright-ja/{z}/{x}/{y}.png';
const tilesSrverMaptilerBasic = 'https://tile.openstreetmap.jp/styles/maptiler-basic-ja/{z}/{x}/{y}.png';
const tilesSrverMaptilerToner = 'https://tile.openstreetmap.jp/styles/maptiler-toner-ja/{z}/{x}/{y}.png';

const map = L.map('map').setView([34.82704, 134.68996], 17);
L.tileLayer(tilesSrverBright, {
  maxZoom: 18,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([34.82689, 134.69024]).addTo(map)
  .bindPopup('姫路駅');
L.marker([34.82580, 134.70233]).addTo(map)
  .bindPopup('勉強会会場(獨協学園はり姫サテライト)').openPopup();

/**
 * Route
 * @see https://geojson.io/#map=17/34.826804/134.691355
 */
const route = [
  [34.82723, 134.69019],
  [34.82727, 134.69024],
  [34.82747, 134.69031],
  [34.82754, 134.69035],
  [34.82737, 134.69184],
  [34.82719, 134.69180],
  [34.82718, 134.69187],
  [34.82697, 134.69281],
  [34.82713, 134.69286],
  [34.82694, 134.69343],
  [34.82682, 134.69393],
  [34.82684, 134.69400],
  [34.82664, 134.69488],
  [34.82659, 134.69521],
  [34.82660, 134.69535],
  [34.82653, 134.69578],
  [34.82652, 134.69592],
  [34.82656, 134.69595],
  [34.82659, 134.69592],
  [34.82663, 134.69579],
  [34.82663, 134.69574],
  [34.82644, 134.69567],
  [34.82642, 134.69610],
  [34.82622, 134.69610],
  [34.82622, 134.69655],
  [34.82612, 134.69708],
  [34.82610, 134.69738],
  [34.82609, 134.69764],
  [34.82614, 134.69802],
  [34.82622, 134.69835],
  [34.82631, 134.69860],
  [34.82647, 134.69893],
  [34.82653, 134.69895],
  [34.82648, 134.69925],
  [34.82630, 134.70060],
  [34.82624, 134.70112],
  [34.82610, 134.70229],
  [34.82596, 134.70225],
  [34.82594, 134.70240],
  [34.82589, 134.70240],
];
// @ts-ignore
L.polyline(route, { color: 'red' }).addTo(map);