const map = L.map('map', {
  scrollWheelZoom: false, // Отключаем масштабирование при скроллинге
}).setView({
  lat: 59.938764863222225,
  lng: 30.323041135556245,
}, 17);

const layer = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/map-pin-tablet.png',
  iconSize: [112, 106],
  iconAnchor: [56, 106],
});

const mainPinMarker = L.marker(
  {
    lat: 59.938764863222225,
    lng: 30.323041135556245,
  },
  {
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

const mapDesktop = L.map('map-desktop', {
  scrollWheelZoom: false,
}).setView({
  lat: 59.93886158213093,
  lng: 30.321169851325223,
}, 17);

const layerDesktop = L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(mapDesktop);

const mainPinIconDesktop = L.icon({
  iconUrl: 'img/map-pin-tablet.png',
  iconSize: [112, 106],
  iconAnchor: [56, 106],
});

const mainPinMarkerDesktop = L.marker(
  {
    lat: 59.938764863222225,
    lng: 30.323041135556245,
  },
  {
    icon: mainPinIconDesktop,
  },
);

mainPinMarkerDesktop.addTo(mapDesktop);

// Отключаем увеличение карты при скроллинге в мобильной версии
if (window.innerWidth < 768) {
  map.touchZoom.disable();
  map.on('touchstart', function (e) {
    if (e.touches.length === 2) {
      e.preventDefault();
    }
  });

  mapDesktop.touchZoom.disable();
  mapDesktop.on('touchstart', function (e) {
    if (e.touches.length === 2) {
      e.preventDefault();
    }
  });
}
