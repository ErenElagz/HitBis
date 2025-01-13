import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

export default StyleSheet.create({
  searchBar: {
    width: '100%',
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginVertical: 12,
    backgroundColor: Colors.backgroundColorsSecondary,
    borderRadius: 16,
  },
  inputText: {
    flex: 1,
    color: Colors.light,
    fontSize: 16,
  },
});
