import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import RemSizes from '../../styles/dimensions';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: Colors.backgroundColorSecondary,
  },
  text: {
    marginHorizontal: 10,
    fontSize: 12,
    fontFamily: Fonts.inter,
    color: Colors.light,
    opacity: 0.25,
  },
});
