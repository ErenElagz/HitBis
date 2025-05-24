import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {
  // Tüm auth verilerini bir kerede kaydet
  async saveAuthData(token: string, user: UserType): Promise<void> {
    try {
      await AsyncStorage.multiSet([
        ['token', token],
        ['user', JSON.stringify(user)],
      ]);
    } catch (error) {
      console.error('Storage save error:', error);
      throw error;
    }
  },

  // Tüm auth verilerini getir
  async getAuthData(): Promise<{token: string | null; user: UserType | null}> {
    try {
      const [token, user] = await AsyncStorage.multiGet(['token', 'user']);
      return {
        token: token[1],
        user: user[1] ? JSON.parse(user[1]) : null,
      };
    } catch (error) {
      console.error('Storage read error:', error);
      return {token: null, user: null};
    }
  },

  // Tüm auth verilerini sil
  async clearAuthData(): Promise<void> {
    try {
      await AsyncStorage.multiRemove(['token', 'user']);
    } catch (error) {
      console.error('Storage clear error:', error);
      throw error;
    }
  },
};
