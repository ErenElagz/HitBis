import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';
import RemSizes from '../../styles/dimensions';

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: RemSizes.r1,
    borderRadius: RemSizes.r1,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary: {
    backgroundColor: Colors.secondary,
  },
  link: {
    backgroundColor: 'transparent',
    textDecorationLine: 'underline',
    color: Colors.gray,
  },
  disabled: {
    backgroundColor: Colors.gray,
  },
});

export default styles;
