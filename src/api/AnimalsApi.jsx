
const BASE_URL = 'http://localhost:8111/api';



// 요거는 동물도감 리스트
export const getAnimals = async (animalType, page, size) => {
  try {
    // console.log(page);
    const response = await fetch(`${BASE_URL}/${animalType}/view/list?page=${page}&size=${size}`);
    // console.log(response.body);
    if (!response.ok) {
      throw new Error('Network fail');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetching animals data failed:', error);
    throw error;
  }
};


// 요거는 해당 품종 상세정보

export const getDetails = async (animalType, korean_name ) => {
  try {
    const response = await fetch(`${BASE_URL}/${animalType}/detail/${korean_name}`)
    
    if (!response.ok) {
      throw new Error('Network fail');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetching animals data failed:', error);
    throw error;
  }
};

// 요거는 특정키워드 검색 , 특정키워드 관련 품종들 리스트 반환

export const getSearchedAnimals = async (animalType, searchQuery ) => {
  try {
    const response = await fetch(`${BASE_URL}/${animalType}/view/search?keyword=${searchQuery}`)
    
    if (!response.ok) {
      throw new Error('Network fail');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetching animals data failed:', error);
    throw error;
  }
};



