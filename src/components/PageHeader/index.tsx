import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({title}) => {
  const nav = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingBottom: 12,
      }}>
      <TouchableOpacity onPress={() => nav.goBack()} style={{flex: 1}}>
        <Icon name="arrow-left" size={20} color={Colors.light} />
      </TouchableOpacity>
      <Text
        style={{
          color: Colors.light,
          fontSize: 16,
        }}>
        {title}
      </Text>
      <View style={{flex: 1}} />
    </View>
  );
};

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

export default PageHeader;
