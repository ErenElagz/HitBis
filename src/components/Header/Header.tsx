import React from 'react';
import {View, Image, Text} from 'react-native';
import styles from './Header.style';
import Button from '../Button';

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

export default Header;
