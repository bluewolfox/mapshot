declare global {
  interface Window {
    kakao: any;
  }
}

interface T_Lng {
  lat: Number
  lng: Number
}

interface T_Lists {
  place_name: string
  x: string
  y: string
}

let map: any;

export const { kakao } = window;
// 카카오 Places
export const places = new kakao.maps.services.Places();

export function setMapInit(params: any) {
  map = params
}

export function getMapInit() {
  return map;
}



// // 카카오 지도 생성
export const setKakaoMaps = (mapInfo: T_Lng = { lat: 33.450701, lng: 126.570667 },) => {
  const mapContainer = document.getElementById("map");
  const mapOption = {
    center: new kakao.maps.LatLng(mapInfo.lat, mapInfo.lng), // 지도의 중심좌표
    level: 10, // 지도의 확대 레벨
  };

  map = new kakao.maps.Map(mapContainer, mapOption);
}

// // 카카오 마커 생성
export const setKakaoMarkers = (item: T_Lists[]) => {
  new kakao.maps.Marker({})
  item.forEach((mapItem) => {
    const imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    const imageSize = new kakao.maps.Size(24, 35);
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize)
    const position = new kakao.maps.LatLng(Number(mapItem.y), Number(mapItem.x))
    new kakao.maps.Marker({
      map,
      position: position,
      title: mapItem.place_name,
      image: markerImage
    })

  })

}