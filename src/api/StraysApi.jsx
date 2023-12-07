

const BASE_URL = '';



// 이거는 파이썬 크롤러로 긁어서 db에 박아놓은 데이터들을 가져오는 api
export const fetchStrays = async () => {
  try {
    const response = await fetch(`${BASE_URL}/strays`);
    if (!response.ok) {
      throw new Error('Network fail');
    }
    return await response.json();
  } catch (error) {
    console.error('fetching strays data fail:', error);
    throw error;
  }
};
