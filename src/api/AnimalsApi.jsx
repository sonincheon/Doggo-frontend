




const BASE_URL = 'http://localhost:8111/api';



// 요거는 견종도감
export const getAnimals = async (animalType) => {
  try {
    const response = await fetch(`${BASE_URL}/${animalType}/view/list`);
    if (!response.ok) {
      throw new Error('Network fail');
    }
    return await response.json();
  } catch (error) {
    console.error('fetching strays data fail:', error);
    throw error;
  }
};



