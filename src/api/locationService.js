import API from './api';

export const getCities = async () => {
  try {
    const response = await API.get('/city/all');

    return response.data.data;
  } catch (error) {
    console.error('Error fetching cities:', error);
  }
};

export const getCityById = async id => {
  try {
    const response = await API.get(`/city/getCityById/?cityId=${id}`);

    return response.data.data;
  } catch (error) {
    console.error('Error fetching city by ID:', error);
  }
};

export const getCountries = async () => {
  try {
    const response = await API.get('/country/all');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
};

export const getCountryById = async id => {
  try {
    const response = await API.get(`/country/getCountryById/?countryId=${id}`);
    return response.data.data;
  } catch (error) {
    console.error('Error fetching country by ID:', error);
  }
};

export const getAddressFromCoords = async (latitude, longitude) => {
  try {
    latitude = Number(latitude);
    longitude = Number(longitude);

    if (isNaN(latitude) || isNaN(longitude)) {
      throw new Error(`Geçersiz koordinatlar: lat=${latitude}, lon=${longitude}`);
    }

    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=10&addressdetails=1`, {
      headers: {
        'User-Agent': 'HitBisApp/1.0',
      },
    });

    const data = await response.json();

    if (!data.address) {
      console.warn('Adres bulunamadı, yanıt:', data);
      return 'Bilinmeyen';
    }

    const {province, district, city, state, county, town, suburb, village} = data.address;

    const districtData = district || county || town || village || suburb || 'Bilinmeyen ilçe';
    const provinceData = province || city || state || 'Bilinmeyen il';

    return `${districtData}, ${provinceData}`;
  } catch (error) {
    console.error('OSM Geocoding Error:', error.message);
    return 'Bilinmeyen';
  }
};
