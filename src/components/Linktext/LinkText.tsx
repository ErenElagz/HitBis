import {Text, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './LinkText.style';
import { Touchable } from 'react-native';

interface LinkTextProps {
  title: string;
  onPress: () => void;
  style: {};
  textStyle: ['light', 'dark', 'link', 'disabled'];
  disabled: boolean;
  type: ['primary', 'secondary', 'tertiary', 'link', 'disabled'];
  align: ['center', 'left', 'right'];
}

const LinkText: React.FC<LinkTextProps> = ({
  title,
  onPress,
  textStyle,
  type,
  align,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}

    >
      <Text
        style={[
          styles.text,
          align === 'left'
            ? {alignSelf: 'flex-start'}
            : align === 'right'
            ? {alignSelf: 'flex-end'}
            : {alignSelf: 'center'},
          type === 'link' ? styles.link : styles[textStyle],
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default LinkText;
