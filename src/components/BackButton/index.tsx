import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const BackButton: React.FC = () => {
  const nav = useNavigation();
  return (
    <TouchableOpacity style={styles.button} onPress={() => nav.goBack()}>
      <Icon name="arrow-left" size={28} color={Colors.light} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 999,
    top: 16,
    left: 16,
    backgroundColor: Colors.dark,
    width: 48,
    height: 48,
    borderRadius: 16,
  },
});

export default BackButton;
