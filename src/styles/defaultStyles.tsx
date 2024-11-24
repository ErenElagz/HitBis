import {StyleSheet} from 'react-native';
import Colors from '../styles/colors';
import Fonts from '../styles/fonts';
import RemSizes from '../styles/dimensions';

export default StyleSheet.create({
  HeaderText: {
    marginTop: RemSizes.r3,
    color: Colors.light,
    fontSize: 40,
    fontFamily: Fonts.main,
  },
  HeaderBottomText: {
    color: Colors.gray,
    fontSize: 14,
  },
});
