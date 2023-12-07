




const BASE_URL = '';



// 이거는 db에 처 박아둔 각 지역별 일주일 날씨 ..
export const fetchRegionWeathers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/Weather`);
    if (!response.ok) {
      throw new Error('Network fail');
    }
    return await response.json();
  } catch (error) {
    console.error('fetching weathers data fail:', error);
    throw error;
  }
};
