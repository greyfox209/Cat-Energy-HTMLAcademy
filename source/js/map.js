const map = L.map('map')
  .setView({
    lat: 59.93875424509649,
    lng: 30.320078028328375,
  }, 17);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const marker = L.marker(
  {
    lat: 59.938764863222225,
    lng: 30.323041135556245,
  },
);

marker.addTo(map);
