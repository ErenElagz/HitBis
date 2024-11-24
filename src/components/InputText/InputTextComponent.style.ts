import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import RemSizes from '../../styles/dimensions';

export default StyleSheet.create({
  inputText: {
    width: '100%',
    paddingVertical: RemSizes.r1_25,
    paddingHorizontal: RemSizes.r1,
    backgroundColor: Colors.backgroundColorSecondary,
    borderRadius: RemSizes.r1,
    color: Colors.light,
    fontSize: 14,
  },
});
