import API from './api';
export const updateUser = async updatedFields => {
  try {
    const response = await API.post('/user/edit', updatedFields);
    return response.data; // Güncellenmiş kullanıcı bilgisi
  } catch (error) {
    console.error('Update error:', error);
    throw error;
  }
};

export const getUser = async () => {
  try {
    const response = await API.get('user/profile');
    return response.data.data; // Kullanıcı bilgilerini döndür
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};
