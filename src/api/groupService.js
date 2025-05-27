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
    const response = await API.post(`/group/join?groupId=${groupId}`);

    return response.data.data;
  } catch (error) {
    console.error('Error joining group:', error);
  }
};

export const leaveGroup = async groupId => {
  try {
    const response = await API.delete(`/group/leave?groupId=${groupId}`);
    console.log('Group left successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error leaving group:', error);
  }
};

export const isUserMemberOfGroup = async groupId => {
  try {
    const response = await API.get(`/group/ismember?groupId=${groupId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error checking group membership:', error);
  }
};

export const isUserAdminOfGroup = async groupId => {
  try {
    const response = await API.get(`/group/isadmin?groupId=${groupId}`);
    return response.data.data;
  } catch (error) {
    console.error('Error checking if user is admin of group:', error);
  }
};
