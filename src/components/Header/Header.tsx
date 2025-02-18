import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Button from '../Button/Button';
import Colors from '../../styles/Colors';
import Fonts from '../../styles/Fonts';

interface HeaderProps {
  title: string;
  description: string;
  style?: object;
  button?: boolean;
  onPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({title, description, button, onPress}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={require('../../assets/images/avatar.jpg')} />
      <View style={{flex: 1, marginLeft: 16}}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      {button && <Button type="secondary" title="End Ride" onPress={onPress} style={{flex: 0.4}} />}
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

export default Header;
