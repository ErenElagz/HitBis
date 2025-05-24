import API from './api';

export const getPocketByQRCode = async slotCode => {
  try {
    const response = await API.get(`/station-pocket/get-by-qr?slotCode=${slotCode}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching pocket by QR code:', error);
    throw error;
  }
};

export const rentBike = async slotCode => {
  try {
    const response = await API.post('/bike-rental/rent/', {slotCode});
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error renting bike:', error);
    throw error;
  }
};
