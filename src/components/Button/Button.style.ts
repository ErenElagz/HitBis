import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';
import RemSizes from '../../styles/dimensions';

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.tertiary,
    width: '100%',
    paddingVertical: RemSizes.r1,
    borderRadius: RemSizes.r1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  disabledButton: {
    backgroundColor: Colors.gray,
  },
});

export default styles;
