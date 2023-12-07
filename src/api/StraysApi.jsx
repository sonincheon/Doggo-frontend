

const BASE_URL = '';

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
