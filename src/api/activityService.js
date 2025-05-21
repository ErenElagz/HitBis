import API from './api';

export const getActivities = async () => {
  try {
    const response = await API.get('/activity/all');

    return response.data;
  } catch (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }
};

export const getStats = async () => {
  try {
    const response = await API.get('/activity/stats');

    return response.data;
  } catch (error) {
    console.error('Error fetching stats:', error);
    throw error;
  }
};
