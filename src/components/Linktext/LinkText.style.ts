import {StyleSheet} from 'react-native';
import Colors from '../../styles/colors';
import Fonts from '../../styles/fonts';
import RemSizes from '../../styles/dimensions';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: RemSizes.r1,
        marginHorizontal: RemSizes.r0_5,
    },
    text: {
        color: Colors.gray,
        fontSize: 14,
        fontFamily: Fonts.inter,
        textDecorationLine: 'underline',
    },
});
