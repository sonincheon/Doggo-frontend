




const BASE_URL = 'http://localhost:8111/api';



// 요거는 동물도감
export const getAnimals = async (animalType, page) => {
  try {
    const response = await fetch(`${BASE_URL}/${animalType}/view/list?page=${page}&size=8`);
    
    if (!response.ok) {
      throw new Error('Network fail');
    }
    return await response.json();
  } catch (error) {
    console.error('Fetching animals data failed:', error);
    throw error;
  }
};




