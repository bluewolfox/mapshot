import React, { useState } from 'react'
import './MapOptions.scss'

const MapOptions = () => {
  const [latitude, setLatitude] = useState('')
  const [hardness, setHardness] = useState('')

  const onsubmitMapOptions = (e: React.FormEvent) => {
    e.preventDefault();
  }

  return <div className="map-options">
    <form onSubmit={onsubmitMapOptions}>
      <div className="input-item">
        <div className="item-title">중심점 설정</div>
        <div className="dp-flex">
          <p>위도</p>
          <input type="text" value={latitude} onChange={(e) => setLatitude(e.target.value)} />
        </div>
        <div className="dp-flex">
          <p>경도</p>
          <input type="text" value={hardness} onChange={(e) => setHardness(e.target.value)} />
        </div>
      </div>
      <div className="input-item">
        <div className="item-title">배율 설정</div>
        <select>
          <option value="1">반경 1km</option>
          <option value="2">반경 2km</option>
          <option value="5">반경 5km</option>
          <option value="10">반경 10km</option>
        </select>
      </div>
    </form>
  </div>
}

export default MapOptions