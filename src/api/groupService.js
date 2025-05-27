import API from './api';

export const getGroups = async () => {
  try {
    const response = await API.get('/group/all');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching groups:', error);
  }
};

export const getUsersByGroupId = async groupId => {
  try {
    const response = await API.get(`/group/getusers/?groupId=${groupId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching users by group ID:', error);
  }
};

export const getGroupUserCount = async groupId => {
  try {
    const response = await API.get(`/group/userCount/?groupId=${groupId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching group user count:', error);
  }
};

export const getUserGroup = async () => {
  try {
    const response = await API.get('/group/my');
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching my group:', error);
  }
};

export const findUserGroup = async () => {
  try {
    const response = await API.get(`/group/find`);
    return response.data.data;
  } catch (error) {
    console.error('Error checking if user is in group:', error);
  }
};

export const joinGroup = async groupId => {
  try {
    const response = await API.post(`/group/join?=groupId=${groupId}`);
    console.log('Group joined successfully:', response.data.data);
    return response.data.data;
  } catch (error) {
    console.error('Error joining group:', error);
  }
};
