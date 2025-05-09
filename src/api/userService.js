import axios from 'axios';

export const updateUser = async (name: string, surname: string, email: string) => {
  try {
    const response = await axios.put('https://your-api-url.com/updateUser', {
      name,
      surname,
      email,
    });
    return response.data;
  } catch (error) {
    console.error('Update error:', error);
    throw error;
  }
};
