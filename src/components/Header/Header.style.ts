import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 24,
    padding: 12,
    paddingTop: 32,
    backgroundColor: Colors.backgroundColorsSecondary,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    zIndex: 1,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 32,
  },
  title: {
    color: Colors.light,
    fontSize: 20,
    fontFamily: Fonts.main,
  },
  description: {
    color: Colors.gray,
    fontSize: 16,
    fontFamily: Fonts.interRegular,
  },
});

export default styles;
