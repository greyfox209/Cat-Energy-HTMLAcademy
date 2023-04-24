const map=L.map("map").setView({lat:59.938764863222225,lng:30.323041135556245},17),layer=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map),mainPinIcon=L.icon({iconUrl:"img/map-pin-tablet.png",iconSize:[112,106],iconAnchor:[56,106]}),mainPinMarker=L.marker({lat:59.938764863222225,lng:30.323041135556245},{icon:mainPinIcon});mainPinMarker.addTo(map);const mapDesktop=L.map("map-desktop").setView({lat:59.93886158213093,lng:30.321169851325223},17),layerDesktop=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(mapDesktop),mainPinIconDesktop=L.icon({iconUrl:"img/map-pin-tablet.png",iconSize:[112,106],iconAnchor:[56,106]}),mainPinMarkerDesktop=L.marker({lat:59.938764863222225,lng:30.323041135556245},{icon:mainPinIconDesktop});mainPinMarkerDesktop.addTo(mapDesktop);