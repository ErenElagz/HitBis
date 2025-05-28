import API from './api';

export const getEvents = async id => {
  try {
    const response = await API.get(`/event/all?groupId=${id}`);

    return response.data.data;
  } catch (error) {
    console.error('Error fetching events:', error);
  }
};

export const getActiveEvents = async id => {
  try {
    const response = await API.get(`/group/active?groupId=${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching active events:', error);
  }
};

export const createEvent = async (eventData, groupId) => {
  try {
    const response = await API.post(`/event/create?groupId=${groupId}`, eventData);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
  }
};
