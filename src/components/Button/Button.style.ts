import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  button: {
    width: '100%',
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
  },
});

export default styles;
