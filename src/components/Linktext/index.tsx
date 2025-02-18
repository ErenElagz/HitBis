import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../../styles/Colors';

interface LinkTextProps {
  title: string;
  onPress: () => void;
  align: 'center' | 'left' | 'right';
}

const LinkText: React.FC<LinkTextProps> = ({title, onPress, align}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text
        style={[
          styles.text,
          align === 'center' ? {textAlign: 'center'} : align === 'left' ? {textAlign: 'left'} : align === 'right' ? {textAlign: 'right'} : {textAlign: 'center'},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  text: {
    color: Colors.gray,
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LinkText;
