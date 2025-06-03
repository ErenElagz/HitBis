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
    return response.data;
  } catch (error) {
    console.error('Error creating event:', error);
  }
};

export const getEventById = async eventId => {
  try {
    const response = await API.get(`/event/?eventId=${eventId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching event by ID:', error);
  }
};

export const getEventUsersCount = async eventId => {
  try {
    const response = await API.get(`/event/user/count?eventId=${eventId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching event users count:', error);
  }
};

export const joinEvent = async eventId => {
  try {
    const response = await API.post(`/event/join?eventId=${eventId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error joining event:', error);
  }
};

export const isUserInEvent = async eventId => {
  try {
    const response = await API.get(`/event/isuserinevent?eventId=${eventId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error checking if user is in event:', error);
  }
};

export const leaveEvent = async eventId => {
  try {
    const response = await API.post(`/event/leave?eventId=${eventId}`);
    return response.data;
  } catch (error) {
    console.error('Error leaving event:', error);
  }
};

export const getEventUsers = async eventId => {
  try {
    const response = await API.get(`/event/users?eventId=${eventId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching event users:', error);
  }
};
