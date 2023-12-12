// 대한민국 지도 간소화 버전에
// const handleImageClick = (e) => {
//     const imageBounds = e.target.getBoundingClientRect();
//     const x = e.clientX - imageBounds.left; // X 좌표 계산
//     const y = e.clientY - imageBounds.top;  // Y 좌표 계산

//     console.log(`X: ${x}, Y: ${y}`); // 콘솔에 좌표 출력
//   };
// 를 사용해서 얻은 x y 좌표값, 건드리면 으르렁 , 절대 좌표라 폐기

// function getXY(event, imageElement) {
//   const imageBounds = imageElement.getBoundingClientRect();

//   // 이미지 내에서의 상대적인 좌표
//   const xRelative = event.clientX - imageBounds.left;
//   const yRelative = event.clientY - imageBounds.top;

//   return { x: xRelative, y: yRelative };
// }

// // 사용 예시
// const handleImageClick = (event) => {
//   const image = event.target;
//   const { x, y } = getXY(event, image);

//   console.log(`이미지 내의 상대적인 X 좌표: ${x}, Y 좌표: ${y}`);
// };

//// 위의 방식은 위험해서 폐기 <^오^>

// 그리드 방식으로 가자 ..

// 아래 선언단 건들면 으르렁

export const citiesData = [
  { name: "서울", gridRow: 6, gridColumn: 8 },
  { name: "춘천", gridRow: 5, gridColumn: 11 },
  { name: "강릉", gridRow: 7, gridColumn: 14 },
  { name: "수원", gridRow: 9, gridColumn: 9 },
  { name: "청주", gridRow: 10, gridColumn: 13 },
  { name: "안동", gridRow: 13, gridColumn: 14 },
  { name: "전주", gridRow: 15, gridColumn: 9 },
  { name: "대전", gridRow: 13, gridColumn: 11 },
  { name: "대구", gridRow: 17, gridColumn: 12 },
  { name: "울산", gridRow: 17, gridColumn: 16 },
  { name: "목포", gridRow: 22, gridColumn: 6 },
  { name: "광주", gridRow: 20, gridColumn: 8 },
  { name: "여수", gridRow: 22, gridColumn: 10 },
  { name: "부산", gridRow: 20, gridColumn: 15 },
  { name: "제주", gridRow: 28, gridColumn: 7 },
];

export const CityComponent = ({ city, weather, isMorning }) => {
  const gridRow = city.gridRow;
  const gridColumn = city.gridColumn;

  const temperature = isMorning ? 
  weather.morningTemperature : weather.afternoonTemperature; // 아침
  const weatherCondition = isMorning ? 
  weather.morningWeatherCondition : weather.afternoonWeatherCondition; // 오후

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        gridRow: gridRow,
        gridColumn: gridColumn,
        zIndex: 9999,
        whiteSpace: "nowrap",
        fontSize: "0.8vw",
        overflow: "visible",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <div>
        <div
          // 추후 아이콘이 위치할거라 flex 적용 , 무조건 도시명+온도 표현식 정중앙에 위치
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column", // 세로 정렬
            height: "100%", // 그리드 셀의 전체 높이 사용
            width: "100%", // 그리드 셀의 전체 너비 사용
          }}>
          {`${weatherCondition}`}
          <div>
            {city.name}
            {`${temperature}°`}
          </div>
          {/* <span>{weather ? `${weather.temperature}°C` : '온도'}</span> */}
        </div>
      </div>
    </div>
  );
};
