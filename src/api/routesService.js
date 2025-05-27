import API from './api';

export const getRoutes = async () => {
  try {
    const response = await API.get('/route/my');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching routes:', error);
    throw error;
  }
};

export const getRouteDetails = async routeId => {
  try {
    const response = await API.get(`/route/details/?routeId=${routeId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching route details:', error);
    throw error;
  }
};

export const getPublicRoutes = async () => {
  try {
    const response = await API.get('/route/public');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching public routes:', error);
    throw error;
  }
};
