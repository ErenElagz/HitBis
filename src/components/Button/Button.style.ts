import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  button: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
});

export default styles;
