import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    padding: 16,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: Colors.backgroundColorsSecondary,
  },
  text: {
    marginHorizontal: 8,
    Fontsize: 12,
    color: Colors.light,
    opacity: 0.25,
  },
});
