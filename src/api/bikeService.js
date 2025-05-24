import API from './api';

export const getBikeDetails = async bikeId => {
  try {
    const response = await API.get(`/bike/details?bikeId=${bikeId}`);

    return response.data;
  } catch (error) {
    console.error('Error fetching bike details:', error);
  }
};
