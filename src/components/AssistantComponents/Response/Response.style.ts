import {StyleSheet} from 'react-native';
import Colors from '../../../styles/Colors';
import Fonts from '../../../styles/Fonts';

const styles = StyleSheet.create({
  message: {
    flexDirection: 'column',
    gap: 8,
    padding: 16,
    marginBottom: 8,
    borderRadius: 16,
  },
  placesCard: {
    backgroundColor: '#ffffff20',
    padding: 12,
    borderRadius: 16,
    marginBottom: 8,
  },
  placesCardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  placesCardDescription: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffffaa',
  },
});

export default styles;
