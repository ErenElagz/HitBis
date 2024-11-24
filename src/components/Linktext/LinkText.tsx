import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './LinkText.style';

interface LinkTextProps {
  title: string;
  onPress: () => void;
  style: {};
  align: 'center' | 'left' | 'right';
}

const LinkText: React.FC<LinkTextProps> = ({title, onPress, align}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text
        style={[
          styles.text,
          align === 'center'
            ? {textAlign: 'center'}
            : align === 'left'
            ? {textAlign: 'left'}
            : align === 'right'
            ? {textAlign: 'right'}
            : {textAlign: 'center'},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default LinkText;
