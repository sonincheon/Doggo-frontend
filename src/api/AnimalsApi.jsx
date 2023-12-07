




const BASE_URL = '';



// 요거는 견종도감
export const fetchDogs = async () => {
  try {
    const response = await fetch(`${BASE_URL}/dog`);
    if (!response.ok) {
      throw new Error('Network fail');
    }
    return await response.json();
  } catch (error) {
    console.error('fetching strays data fail:', error);
    throw error;
  }
};


// 요거는 묘종도감
export const fetchCats = async () => {
    try {
      const response = await fetch(`${BASE_URL}/cat`);
      if (!response.ok) {
        throw new Error('Network fail');
      }
      return await response.json();
    } catch (error) {
      console.error('fetching strays data fail:', error);
      throw error;
    }
  };
