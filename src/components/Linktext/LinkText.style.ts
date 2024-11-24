import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import RemSizes from '../../styles/dimensions';

export default StyleSheet.create({
    container: {
        marginVertical: RemSizes.r1,
        marginHorizontal: RemSizes.r1,
    },
    text: {
        color: Colors.gray,
        fontSize: 14,
        textDecorationLine: 'underline',
    },
});
