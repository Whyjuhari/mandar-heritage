import { useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, LayersControl, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import mapPoints from '../data/mapPoints'

// Marker icon berdasarkan status
function createMarkerIcon(status) {
  const isFokus = status === 'Fokus Awal'
  return new L.DivIcon({
    className: '',
    html: `<span style="
      display: block;
      width: 16px;
      height: 16px;
      background: ${isFokus ? '#33210d' : '#112a1b'};
      border: 3px solid ${isFokus ? '#e9c176' : '#90ab96'};
      border-radius: 50%;
      box-shadow: 0 2px 10px ${isFokus ? 'rgba(51,33,13,0.5)' : 'rgba(17,42,27,0.45)'};
      cursor: pointer;
    "></span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
    popupAnchor: [0, -12],
  })
}

// Status badge style
const statusStyle = {
  'Fokus Awal': { bg: '#ffdea5', color: '#5d4201' },
  'Tahap Lanjutan': { bg: '#d4e8d9', color: '#1a3d26' },
}

// FitBounds: auto-zoom agar semua marker terlihat
function FitBounds() {
  const map = useMap()
  useEffect(() => {
    if (!mapPoints.length) return
    const bounds = L.latLngBounds(mapPoints.map((p) => p.position))
    map.fitBounds(bounds, { padding: [48, 48] })
  }, [map])
  return null
}

// Legend menggunakan Leaflet native control agar posisi aman
function LegendControl() {
  const map = useMap()
  useEffect(() => {
    const control = L.control({ position: 'bottomleft' })
    control.onAdd = () => {
      const div = L.DomUtil.create('div', 'map-legend')
      const title = L.DomUtil.create('p', 'legend-title', div)
      title.textContent = 'Legenda'

      const focusItem = L.DomUtil.create('div', 'legend-item', div)
      L.DomUtil.create('span', 'legend-dot legend-dot--fokus', focusItem)
      focusItem.append('Fokus Awal Budaya Mandar')

      const nextItem = L.DomUtil.create('div', 'legend-item', div)
      L.DomUtil.create('span', 'legend-dot legend-dot--lanjutan', nextItem)
      nextItem.append('Rencana Pemetaan Lanjutan')

      L.DomEvent.disableClickPropagation(div)
      L.DomEvent.disableScrollPropagation(div)
      return div
    }
    control.addTo(map)
    return () => control.remove()
  }, [map])
  return null
}

const baseLayers = [
  {
    name: 'Peta Jalan',
    checked: true,
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
  },
  {
    name: 'Satelit',
    checked: false,
    url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, USGS, AeroGRID, IGN, and the GIS User Community',
  },
  {
    name: 'Terrain',
    checked: false,
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> | Style: &copy; <a href="https://opentopomap.org" target="_blank" rel="noopener">OpenTopoMap</a>',
  },
]

function InteractiveMap() {
  return (
    <MapContainer
      center={[-3.1, 119.1]}
      zoom={8}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
      zoomControl={true}
    >
      <FitBounds />
      <LegendControl />

      {/* Base layer switcher */}
      <LayersControl position="topright">
        {baseLayers.map((layer) => (
          <LayersControl.BaseLayer key={layer.name} checked={layer.checked} name={layer.name}>
            <TileLayer attribution={layer.attribution} url={layer.url} />
          </LayersControl.BaseLayer>
        ))}
      </LayersControl>

      {/* Label & batas wilayah — selalu tampil */}
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}"
        attribution="Labels &copy; Esri"
        opacity={1}
      />

      {/* Jaringan jalan — selalu tampil */}
      <TileLayer
        url="https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Transportation/MapServer/tile/{z}/{y}/{x}"
        attribution="Roads &copy; Esri"
        opacity={0.8}
      />

      {/* Titik budaya */}
      {mapPoints.map((point) => (
        <Marker
          key={point.id}
          position={point.position}
          icon={createMarkerIcon(point.status)}
        >
          {/* Popup detail — muncul saat marker diklik */}
          <Popup minWidth={220} maxWidth={260}>
            <div style={{ padding: '12px 14px' }}>
              {/* Nama wilayah */}
              <p style={{ fontWeight: 700, fontSize: '14px', color: '#33210d', margin: '0 0 6px 0', lineHeight: 1.3 }}>
                {point.name}
              </p>

              {/* Status badge */}
              <span style={{
                display: 'inline-block',
                background: statusStyle[point.status]?.bg ?? '#f5f5f5',
                color: statusStyle[point.status]?.color ?? '#333',
                fontSize: '10px',
                fontWeight: 700,
                padding: '2px 10px',
                borderRadius: '999px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '8px',
              }}>
                {point.status}
              </span>

              {/* Kategori */}
              <p style={{ fontSize: '11px', color: '#775a19', fontWeight: 600, margin: '0 0 8px 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {point.category}
              </p>

              {/* Catatan */}
              <p style={{ fontSize: '12px', color: '#4e453d', lineHeight: 1.5, margin: '0 0 10px 0' }}>
                {point.note}
              </p>

              {/* Objek budaya */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '10px' }}>
                {point.culturalObjects.map((obj) => (
                  <span key={obj} style={{
                    background: '#f7f3e9',
                    color: '#4e453d',
                    fontSize: '10px',
                    padding: '3px 9px',
                    borderRadius: '999px',
                    fontWeight: 600,
                    border: '1px solid rgba(51,33,13,0.1)',
                  }}>
                    {obj}
                  </span>
                ))}
              </div>

              {/* Disclaimer prototype */}
              <p style={{
                fontSize: '10px',
                color: '#80756c',
                fontStyle: 'italic',
                margin: 0,
                paddingTop: '8px',
                borderTop: '1px solid rgba(51,33,13,0.06)',
              }}>
                Prototype pemetaan awal — bukan lokasi final objek budaya.
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default InteractiveMap
