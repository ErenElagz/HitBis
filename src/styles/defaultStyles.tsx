import {StyleSheet} from 'react-native';
import Colors from '../styles/colors';
import Fonts from '../styles/fonts';

export default StyleSheet.create({
  HeaderText: {
    marginTop: 48,
    color: Colors.light,
    fontSize: 40,
    fontFamily: Fonts.main,
  },
  HeaderBottomText: {
    color: Colors.gray,
    fontSize: 14,
  },
});
