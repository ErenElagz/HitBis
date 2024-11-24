import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';
import RemSizes from '../../styles/dimensions';

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '700',
  },
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: RemSizes.r1,
    borderRadius: RemSizes.r1,
  },
});

export default styles;
